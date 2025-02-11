"use client"

import { app } from '../../../../firebase';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdateHome() {
    const [isLoaded, setIsLoaded] = useState<any>(false);
    const [aboutUsFile, setAboutUsFile] = useState<any>([]);
    const [yogaFile, setYogaFile] = useState<any>([]);
    const pathname = usePathname();
    const aboutId = pathname.split('/').pop();
    const [formData, setFormData] = useState<any>({
        aboutUs: '',
        yogaMeaning: '',
        aboutPhoto: '',
        yogaPhoto: '',
    })

    useEffect(() => {
        const fetchListing = async () => {
            const res = await fetch('/api/about/get', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                aboutId,
            }),
            });
            const data = await res.json();
            if (data.success === false) {
                console.log(data.message);
                return;
            }
            setFormData(data[0]);
            setIsLoaded(true)
        };
        fetchListing();
    }, []);

    const [imageUploadError, setImageUploadError] = useState<any>(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<any>(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleAboutUsSubmit = (e: any) => {
        if (aboutUsFile.length > 0) {
          setUploading(true);
          setImageUploadError(false);
          storeImage(aboutUsFile[0], "aboutPhoto")
          .then((url: any) => {
            setFormData({
              ...formData,
              aboutPhoto: url,
            });
            setImageUploadError(false);
            setUploading(false);
          })
          .catch((err) => {
            setImageUploadError('About Us Image upload failed (2 mb max per About Us)');
            setUploading(false);
          });
            
        } else {
          setImageUploadError('You can only upload 1 photo per About Us');
          setUploading(false);
        }
    };

    const handleYogaSubmit = (e: any) => {
        if (yogaFile.length > 0) {
          setUploading(true);
          setImageUploadError(false);
          storeImage(yogaFile[0], "yogaPhoto")
          .then((url: any) => {
            setFormData({
              ...formData,
              yogaPhoto: url,
            });
            setImageUploadError(false);
            setUploading(false);
          })
          .catch((err) => {
            setImageUploadError('Yoga Meaning Image upload failed (2 mb max per Yoga Meaning)');
            setUploading(false);
          });
            
        } else {
          setImageUploadError('You can only upload 1 photo per Yoga Meaning');
          setUploading(false);
        }
    };

    const storeImage = async (file: any, preFix: any) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = preFix + new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done`);
            },
            (error) => {
                reject(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
                });
            }
            );
        });
    };

    const handleRemoveImage = (fileToRemove: any) => {
        setFormData({
          ...formData,
          [fileToRemove]: '',
        });
    };

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        try {
          if (
                formData?.aboutPhoto.length < 1 || 
                formData?.yogaPhoto.length < 1
            ) {
                return setError('All images fields must not be left empty!');
            }

          setLoading(true);
          setError(false);
          const res = await fetch('/api/about/update', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...formData,
              aboutId,
            }),
          });
          const data = await res.json();
          setLoading(false);
          if (data.success === false) {
            setError(data.message);
          }
          router.push(`/`);
        } catch (error: any) {
          setError(error.message);
          setLoading(false);
        }
    };

    if (!isLoaded) {
        return (
          <h1 className='text-center text-xl my-7 font-semibold'>Loading...</h1>
        );
    }

    return (
        <div className="mt-12 mb-6 px-2">
            <h1 className='text-2xl font-semibold text-center my-7 text-gray-300'>
                Update About Jyoga
            </h1>

            <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>
                <div className='flex flex-col gap-4 flex-1'>
                    <label className='text-gray-400'>About Jyoga</label>
                    <textarea
                        placeholder='About Jyoga'
                        className='border p-3 -mt-3 rounded-lg'
                        id='aboutUs'
                        required
                        onChange={handleChange}
                        value={formData?.aboutUs}
                    >{formData?.aboutUs}</textarea>

                    <label className='text-gray-400'>What is Yoga?</label>
                    <textarea
                        placeholder='What is Yoga?'
                        className='border p-3 -mt-3 rounded-lg'
                        id='yogaMeaning'
                        required
                        onChange={handleChange}
                        value={formData?.yogaMeaning}
                    >{formData?.yogaMeaning}</textarea>

                    <label className='text-gray-400'>About Us Photo</label>
                    <input
                        onChange={(e: any) => setAboutUsFile(e.target.files)}
                        className='p-3 border border-gray-300 rounded w-full -mt-3'
                        type='file'
                        id='aboutPhoto'
                        accept='image/*'
                    />
                    <button
                        disabled={uploading}
                        onClick={handleAboutUsSubmit}
                        className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
                    >
                        {uploading ? 'Uploading...' : 'Upload'}
                    </button>

                    {formData?.aboutPhoto?.length > 0 && 
                        <div
                        className='flex justify-between p-3 border items-center'
                        >
                            <img
                                src={formData?.aboutPhoto}
                                alt='About Us'
                                className='w-20 h-20 object-contain rounded-lg'
                            />
                            <button
                                type='button'
                                onClick={() => handleRemoveImage("aboutPhoto")}
                                className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
                            >
                                Delete
                            </button>
                        </div>
                    }

                    <label className='text-gray-400'>Yoga Meaning Photo</label>
                    <input
                        onChange={(e: any) => setYogaFile(e.target.files)}
                        className='p-3 border border-gray-300 rounded w-full -mt-3'
                        type='file'
                        id='yogaPhoto'
                        accept='image/*'
                    />
                    <button
                        disabled={uploading}
                        onClick={handleYogaSubmit}
                        className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
                    >
                        {uploading ? 'Uploading...' : 'Upload'}
                    </button>

                    {formData?.yogaPhoto?.length > 0 && 
                        <div
                        className='flex justify-between p-3 border items-center'
                        >
                            <img
                                src={formData?.yogaPhoto}
                                alt='About Us'
                                className='w-20 h-20 object-contain rounded-lg'
                            />
                            <button
                                type='button'
                                onClick={() => handleRemoveImage("yogaPhoto")}
                                className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
                            >
                                Delete
                            </button>
                        </div>
                    }

                    <button
                        disabled={loading || uploading}
                        className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
                    >
                        {loading ? 'Updating About Jyoga...' : 'Update About Jyoga'}
                    </button>
                    <p className='text-red-700 text-sm'>
                        {imageUploadError && imageUploadError}
                    </p>
                    {error && <p className='text-red-700 text-sm'>{error}</p>}

                </div>
            </form>
        </div>
    )
}