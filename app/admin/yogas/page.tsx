import Link from "next/link";
import { Fragment } from "react";

export default async function yogaList() {
    let yogaList = null;

    try {
        const result = await fetch(process.env.URL! + '/api/yogas/get', {
          method: 'POST',
          body: JSON.stringify({
            limit: 9,
            order: 'asc',
          }),
          cache: 'no-store',
        });
        const data = await result.json();
        yogaList = data;
        
      } catch (error) {
        yogaList = { title: 'Failed to load yoga listing' };
    }

    return (
        <div className="mt-12 mb-6 px-10">
            <h1 className='text-2xl font-semibold text-center my-7 text-gray-300'>
                List of Yoga Types
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                {yogaList && yogaList.length > 0 && (
                    <Fragment>
                        {yogaList?.map((yoga : any) => (
                            <div key={yoga._id} className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                                <img src={yoga.photo} alt="Blog yoga 1" className="w-full h-60 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800">{yoga.name}</h3>
                                    <hr className="my-4" />
                                    <p className="text-gray-700 text-sm line-clamp-2">{yoga.description}</p>

                                    <div className="flex gap-4 justify-center items-center mt-2">
                                        <Link href={`/admin/update-yoga/${yoga._id}`} className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">
                                            Edit
                                        </Link>
                                        <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Fragment>
                )}
            </div>
        </div>
    )
}