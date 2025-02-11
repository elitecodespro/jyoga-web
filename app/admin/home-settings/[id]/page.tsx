"use client"

import { app } from '../../../../firebase';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdateHome() {
    const [isLoaded, setIsLoaded] = useState<any>(false);
    const [lightLogoFile, setLightLogoFile] = useState<any>([]);
    const [darkLogoFile, setDarkLogoFile] = useState<any>([]);
    const [bgFile, setBgFile] = useState<any>([]);
    const pathname = usePathname();
    const settingId = pathname.split('/').pop();
    const [formData, setFormData] = useState<any>({
        lightLogo: '',
        darkLogo: '',
        heroTitle: '',
        heroSubTitle: '',
        heroBackgroundPhoto: '',
        contactPhoneNumber: '',
        contactEmail: '',
        insatagramLink: '',
        facebookLink: '',
        linkedInLink: '',
    })

    useEffect(() => {
        const fetchListing = async () => {
            const res = await fetch('/api/settings/get', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                settingId,
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

    const handleLightLogoSubmit = (e: any) => {
        if (lightLogoFile.length > 0) {
          setUploading(true);
          setImageUploadError(false);
          storeImage(lightLogoFile[0], "lightlogo")
          .then((url: any) => {
            setFormData({
              ...formData,
              lightLogo: url,
            });
            setImageUploadError(false);
            setUploading(false);
          })
          .catch((err) => {
            setImageUploadError('Light Logo Image upload failed (2 mb max per Light Logo)');
            setUploading(false);
          });
            
        } else {
          setImageUploadError('You can only upload 1 photo per Light Logo');
          setUploading(false);
        }
    };

    const handleDarkLogoSubmit = (e: any) => {
        if (darkLogoFile.length > 0) {
          setUploading(true);
          setImageUploadError(false);
          storeImage(darkLogoFile[0], "darkLogo")
          .then((url: any) => {
            setFormData({
              ...formData,
              darkLogo: url,
            });
            setImageUploadError(false);
            setUploading(false);
          })
          .catch((err) => {
            setImageUploadError('Dark Logo Image upload failed (2 mb max per Dark Logo)');
            setUploading(false);
          });
            
        } else {
          setImageUploadError('You can only upload 1 photo per Dark Logo');
          setUploading(false);
        }
    };

    const handleBgSubmit = (e: any) => {
        if (bgFile.length > 0) {
          setUploading(true);
          setImageUploadError(false);
          storeImage(bgFile[0], "heroBackgroundPhoto")
          .then((url: any) => {
            setFormData({
              ...formData,
              heroBackgroundPhoto: url,
            });
            setImageUploadError(false);
            setUploading(false);
          })
          .catch((err) => {
            setImageUploadError('Hero Background Image upload failed (2 mb max per Hero Background)');
            setUploading(false);
          });
            
        } else {
          setImageUploadError('You can only upload 1 photo per Hero Background');
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
                formData?.lightLogo.length < 1 || 
                formData?.darkLogo.length < 1 ||
                formData?.heroBackgroundPhoto.length < 1
            ) {
                return setError('All images fields must not be left empty!');
            }

          setLoading(true);
          setError(false);
          const res = await fetch('/api/settings/update', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...formData,
              settingId,
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
                Update Home Page
            </h1>

            <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>
                <div className='flex flex-col gap-4 flex-1'>
                    <label className='text-gray-400'>Hero Title</label>
                    <input
                        type='text'
                        placeholder='Hero Title'
                        className='border p-3 -mt-3 rounded-lg'
                        id='heroTitle'
                        maxLength={62}
                        minLength={10}
                        required
                        onChange={handleChange}
                        value={formData?.heroTitle}
                    />

                    <label className='text-gray-400'>Hero Sub Title</label>
                    <textarea
                        placeholder='Hero Sub Title'
                        className='border p-3 -mt-3 rounded-lg'
                        id='heroSubTitle'
                        required
                        onChange={handleChange}
                        value={formData?.heroSubTitle}
                    >{formData?.heroSubTitle}</textarea>

                    <label className='text-gray-400'>Contact Phone Number</label>
                    <input
                        type='text'
                        placeholder='Contact Phone Number'
                        className='border p-3 -mt-3 rounded-lg'
                        id='contactPhoneNumber'
                        maxLength={62}
                        minLength={10}
                        required
                        onChange={handleChange}
                        value={formData?.contactPhoneNumber}
                    />

                    <label className='text-gray-400'>Contact Email</label>
                    <input
                        type='text'
                        placeholder='Contact Email'
                        className='border p-3 -mt-3 rounded-lg'
                        id='contactEmail'
                        maxLength={62}
                        minLength={10}
                        required
                        onChange={handleChange}
                        value={formData?.contactEmail}
                    />

                    <label className='text-gray-400'>Instagram Link {`(Optional)`}</label>
                    <input
                        type='text'
                        placeholder='Instagram Link'
                        className='border p-3 -mt-3 rounded-lg'
                        id='insatagramLink'
                        maxLength={62}
                        minLength={10}
                        onChange={handleChange}
                        value={formData?.insatagramLink}
                    />

                    <label className='text-gray-400'>Facebook Link {`(Optional)`}</label>
                    <input
                        type='text'
                        placeholder='Facebook Link'
                        className='border p-3 -mt-3 rounded-lg'
                        id='facebookLink'
                        maxLength={62}
                        minLength={10}
                        onChange={handleChange}
                        value={formData?.facebookLink}
                    />

                    <label className='text-gray-400'>LinkedIn Link {`(Optional)`}</label>
                    <input
                        type='text'
                        placeholder='LinkedIn Link'
                        className='border p-3 -mt-3 rounded-lg'
                        id='linkedInLink'
                        maxLength={62}
                        minLength={10}
                        onChange={handleChange}
                        value={formData?.linkedInLink}
                    />

                    <label className='text-gray-400'>Hero Background</label>
                    <input
                        onChange={(e: any) => setBgFile(e.target.files)}
                        className='p-3 border border-gray-300 rounded w-full -mt-3'
                        type='file'
                        id='heroBackgroundPhoto'
                        accept='image/*'
                    />
                    <button
                        disabled={uploading}
                        onClick={handleBgSubmit}
                        className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
                    >
                        {uploading ? 'Uploading...' : 'Upload'}
                    </button>

                    {formData?.heroBackgroundPhoto.length > 0 && 
                        <div
                        className='flex justify-between p-3 border items-center'
                        >
                            <img
                                src={formData?.heroBackgroundPhoto}
                                alt='Hero Background Photo'
                                className='w-20 h-20 object-contain rounded-lg'
                            />
                            <button
                                type='button'
                                onClick={() => handleRemoveImage("heroBackgroundPhoto")}
                                className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
                            >
                                Delete
                            </button>
                        </div>
                    }

                    <label className='text-gray-400'>Light Logo</label>
                    <input
                        onChange={(e: any) => setLightLogoFile(e.target.files)}
                        className='p-3 border border-gray-300 rounded w-full -mt-3'
                        type='file'
                        id='lightLogo'
                        accept='image/*'
                    />
                    <button
                        disabled={uploading}
                        onClick={handleLightLogoSubmit}
                        className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
                    >
                        {uploading ? 'Uploading...' : 'Upload'}
                    </button>

                    {formData?.lightLogo.length > 0 && 
                        <div
                        className='flex justify-between p-3 border items-center'
                        >
                            <img
                                src={formData?.lightLogo}
                                alt='Light Logo'
                                className='w-20 h-20 object-contain rounded-lg'
                            />
                            <button
                                type='button'
                                onClick={() => handleRemoveImage("lightLogo")}
                                className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
                            >
                                Delete
                            </button>
                        </div>
                    }

                    <label className='text-gray-400'>Dark Logo</label>
                    <input
                        onChange={(e: any) => setDarkLogoFile(e.target.files)}
                        className='p-3 border border-gray-300 rounded w-full -mt-3'
                        type='file'
                        id='darkLogo'
                        accept='image/*'
                    />
                    <button
                        disabled={uploading}
                        onClick={handleDarkLogoSubmit}
                        className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
                    >
                        {uploading ? 'Uploading...' : 'Upload'}
                    </button>

                    {formData?.darkLogo.length > 0 && 
                        <div
                        className='flex justify-between p-3 border items-center'
                        >
                            <img
                                src={formData?.darkLogo}
                                alt='Light Logo'
                                className='w-20 h-20 object-contain rounded-lg'
                            />
                            <button
                                type='button'
                                onClick={() => handleRemoveImage("darkLogo")}
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
                        {loading ? 'Updating Home Page...' : 'Update Home Page'}
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