import React from "react";

const Banner2 = () => {
  return (
    <div className="py-14 dark:bg-dark bg-white duration-300">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">02</h1>
                </div>
                <div>
                  <p className="text-primary">Discover</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">What is Yoga?</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Yoga is a powerful practice that unites the body, mind, and spirit. Through mindful movement, breath control, and meditation, yoga helps you achieve balance, flexibility, and inner peace.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                It's not just an exercise - it's a holistic approach to wellness that empowers you to live a healthier, calmer, and more focused life.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
          {/* Image section */}
          <div data-aos="fade-up">
            <img
              src={'/assets/banner2.jpg'}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[370px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
