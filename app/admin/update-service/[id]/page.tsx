"use client"

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdateService() {
    const pathname = usePathname();
    const serviceId = pathname.split('/').pop();

    const [formData, setFormData] = useState({
        name: '',
        price: 50,
        description: '',
        duration: '',
        serviceType: 'Online',
        eventType: 'Yoga Group Event',
    });

    useEffect(() => {
        const fetchService = async () => {
          const res = await fetch('/api/services/get', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              serviceId,
            }),
          });
          const data = await res.json();
          if (data.success === false) {
            console.log(data.message);
            return;
          }
          setFormData(data[0]);
        };
        fetchService();
    }, []);

    const [error, setError] = useState<any>(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e: any) => {
        if (e.target.id === 'Online' || e.target.id === 'Onsite') {
            setFormData({
              ...formData,
              serviceType: e.target.id,
            });
        }

        if (e.target.id === 'Yoga Group Event' || e.target.id === 'Individual Session') {
            setFormData({
                ...formData,
                eventType: e.target.id,
            });
        }

        if (
            e.target.type === 'number' ||
            e.target.type === 'text' ||
            e.target.type === 'textarea'
        ) {
            setFormData({
                ...formData,
                [e.target.id]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
          setLoading(true);
          setError(false);
          const res = await fetch('/api/services/update', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...formData,
              serviceId,
            }),
          });
          const data = await res.json();
          setLoading(false);
          if (data.success === false) {
            setError(data.message);
          }
          router.push(`/admin/services`);
        } catch (error: any) {
          setError(error.message);
          setLoading(false);
        }
    };

    return (
        <div className="mt-12 mb-6 px-10">
            <h1 className='text-2xl font-semibold text-center my-7 text-gray-300'>
                Update Service
            </h1>

            <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4 text-gray-400'>
                <div className='flex flex-col gap-4 flex-1'>
                    <label>Name {`(Based on Number of People)`}</label>
                    <input
                        type='text'
                        placeholder='Name'
                        className='border p-3 rounded-lg -mt-3 text-gray-800'
                        id='name'
                        maxLength={62}
                        minLength={10}
                        required
                        onChange={handleChange}
                        value={formData.name}
                    />

                    <label>Description</label>
                    <textarea
                        placeholder='Description'
                        className='border p-3 rounded-lg -mt-3 text-gray-800'
                        id='description'
                        required
                        onChange={handleChange}
                        value={formData.description}
                    />

                    <label>Duration {`(is it Per Session or Multiple Sessions?)`}</label>
                    <input
                        type='text'
                        placeholder='Duration'
                        className='border p-3 rounded-lg -mt-3 text-gray-800'
                        id='duration'
                        maxLength={62}
                        minLength={10}
                        required
                        onChange={handleChange}
                        value={formData.duration}
                    />

                    <div className='flex gap-6 flex-wrap'>
                        <div className='flex gap-2'>
                            <input
                                type='checkbox'
                                id='Online'
                                className='w-5'
                                onChange={handleChange}
                                checked={formData.serviceType === 'Online'}
                            />
                            <span>Online</span>
                        </div>

                        <div className='flex gap-2'>
                            <input
                                type='checkbox'
                                id='Onsite'
                                className='w-5'
                                onChange={handleChange}
                                checked={formData.serviceType === 'Onsite'}
                            />
                            <span>Onsite</span>
                        </div>
                    </div>

                    <div className='flex gap-6 flex-wrap'>
                        <div className='flex gap-2'>
                            <input
                                type='checkbox'
                                id='Yoga Group Event'
                                className='w-5'
                                onChange={handleChange}
                                checked={formData.eventType === 'Yoga Group Event'}
                            />
                            <span>Yoga Group Event</span>
                        </div>

                        <div className='flex gap-2'>
                            <input
                                type='checkbox'
                                id='Individual Session'
                                className='w-5'
                                onChange={handleChange}
                                checked={formData.eventType === 'Individual Session'}
                            />
                            <span>Individual Session</span>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-6'>
                        <div className='flex items-center gap-2'>
                            <input
                                type='number'
                                id='price'
                                required
                                className='p-3 border border-gray-300 rounded-lg text-gray-800'
                                min='50'
                                max='10000000'
                                onChange={handleChange}
                                value={formData.price}
                            />
                            <div className='flex flex-col items-center'>
                                <p>Price</p>
                            </div>
                        </div>
                    </div>

                    <button
                        disabled={loading}
                        className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
                    >
                        {loading ? 'Updating...' : 'Update Service'}
                    </button>
                    {error && <p className='text-red-700 text-sm'>{error}</p>}
                </div>
            </form>
        </div>
    )
}