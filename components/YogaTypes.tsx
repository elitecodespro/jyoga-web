import React from 'react'

const YogaTypes = () => {
  return (
    <div className="py-14 dark:bg-black bg-slate-100 duration-300">
        <div className="container" data-aos="fade-down">
            <div className="pb-12">
                <h1
                data-aos="fade-up"
                className="text-3xl font-bold text-center sm:text-4xl"
                >
                Different <span className="text-primary">Types of</span> Yoga
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                <a href="#" className="group border dark:border-gray-800 rounded-lg">
                    <img src={'/assets/poses/hatha.jpg'} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
                    <div className='px-5 pb-4'>
                        <h3 className="mt-4 text-lg font-medium ">Hatha Yoga</h3>
                        <p className="mt-1 text-sm "><strong>* Focus: </strong> Basics of yoga, including physical postures (asanas) and breathing techniques (pranayama).</p>

                        <p className="mt-3 text-sm "><strong>* Ideal For: </strong> Beginners looking to build a strong foundation.</p>
                    </div>
                </a>

                <a href="#" className="group border dark:border-gray-800 rounded-lg">
                    <img src={'/assets/poses/vinyasa.jpg'} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
                    <div className='px-5 pb-4'>
                        <h3 className="mt-4 text-lg font-medium">Vinyasa Yoga</h3>
                        <p className="mt-1 text-sm"><strong>* Focus: </strong> Flowing movements synchronized with breath, creating a dynamic sequence.</p>

                        <p className="mt-3 text-sm"><strong>* Ideal For: </strong> Those who enjoy a creative and energetic practice.</p>
                    </div>
                </a>

                <a href="#" className="group border dark:border-gray-800 rounded-lg">
                    <img src={'/assets/poses/ashtanga.jpeg'} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
                    <div className='px-5 pb-4'>
                        <h3 className="mt-4 text-lg font-medium">Ashtanga Yoga</h3>
                        <p className="mt-1 text-sm"><strong>* Focus: </strong> A structured, physically demanding sequence of poses.</p>

                        <p className="mt-3 text-sm"><strong>* Ideal For: </strong> Experienced practitioners seeking a disciplined and vigorous workout.</p>
                    </div>
                </a>

                <a href="#" className="group border dark:border-gray-800 rounded-lg">
                    <img src={'/assets/poses/kundalini.jpeg'} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
                    <div className='px-5 pb-4'>
                        <h3 className="mt-4 text-lg font-medium">Kundalini Yoga</h3>
                        <p className="mt-1 text-sm"><strong>* Focus: </strong> Awakening spiritual energy through chanting, meditation, and specific movements.</p>

                        <p className="mt-3 text-sm"><strong>* Ideal For: </strong> Those seeking a spiritual and meditative experience.</p>
                    </div>
                </a>

                <a href="#" className="group border dark:border-gray-800 rounded-lg">
                    <img src={'/assets/poses/bikram.jpeg'} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
                    <div className='px-5 pb-4'>
                        <h3 className="mt-4 text-lg font-medium">Bikram Yoga (Hot Yoga)</h3>
                        <p className="mt-1 text-sm"><strong>* Focus:</strong> A sequence of 26 poses performed in a heated room.</p>

                        <p className="mt-3 text-sm"><strong>* Ideal For: </strong> People looking to detoxify and improve flexibility through sweating.</p>
                    </div>
                </a>

                <a href="#" className="group border dark:border-gray-800 rounded-lg">
                    <img src={'/assets/poses/iyengar.jpeg'} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
                    <div className='px-5 pb-4'>
                        <h3 className="mt-4 text-lg font-medium">Iyengar Yoga</h3>
                        <p className="mt-1 text-sm"><strong>* Focus:</strong> Precision and alignment in poses, often using props like blocks and straps.</p>

                        <p className="mt-3 text-sm"><strong>* Ideal For:</strong> Individuals recovering from injuries or those seeking detailed instruction.</p>
                    </div>
                </a>

                <a href="#" className="group border dark:border-gray-800 rounded-lg">
                    <img src={'/assets/poses/yin.jpeg'} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
                    <div className='px-5 pb-4'>
                        <h3 className="mt-4 text-lg font-medium">Yin Yoga</h3>
                        <p className="mt-1 text-sm"><strong>* Focus:</strong> Holding passive poses for extended periods to stretch deep connective tissues.</p>

                        <p className="mt-3 text-sm"><strong>* Ideal For:</strong> Relaxation, flexibility, and mindfulness.</p>
                    </div>
                </a>

                <a href="#" className="group border dark:border-gray-800 rounded-lg">
                    <img src={'/assets/poses/restorative.jpeg'} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
                    <div className='px-5 pb-4'>
                        <h3 className="mt-4 text-lg font-medium">Restorative Yoga</h3>
                        <p className="mt-1 text-sm"><strong>* Focus:</strong> Deep relaxation using props to support the body in restful poses.</p>

                        <p className="mt-3 text-sm"><strong>* Ideal For:</strong> Stress relief, recovery, and mental clarity.</p>
                    </div>
                </a>

            </div>

        </div>
    </div>
  )
}

export default YogaTypes