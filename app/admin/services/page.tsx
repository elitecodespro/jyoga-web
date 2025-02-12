import Link from "next/link";
import { Fragment } from "react";

export default async function Services() {
    let services = null;

    try {
        const result = await fetch(process.env.URL + '/api/services/get', {
          method: 'POST',
          body: JSON.stringify({
            limit: 9,
            order: 'asc',
          }),
          cache: 'no-store',
        });
        const data = await result.json();
        services = data;
    } catch (error) {
        services = { title: 'Failed to load services' };
    }

    return (
        <div className="mt-12 mb-6 px-10">
            <h1 className='text-2xl font-semibold text-center my-7 text-gray-300'>
                List of Services
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {services && services.length > 0 && (
                    <Fragment>
                        {services?.map((service : any) => (
                            <div key={service._id} className="card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-gray-200 dark:bg-dark  hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group">
                                
                                <h1 className="text-3xl font-bold">{service.name}</h1>
                                <h1 className="text-center text-4xl font-semibold text-primary">
                                    {`${service.price}`} AED
                                </h1>

                                <p>{service.description}</p>
                                <p className="font-semibold text-2xl">
                                {" "}
                                Duration : {service.duration}
                                </p>
                                <div className="flex gap-4 justify-center items-center mt-2">
                                    <Link href={`/admin/update-service/${service._id}`} className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">
                                        Edit
                                    </Link>
                                    <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Fragment>
                )}
            </div>
        </div>
    )
}