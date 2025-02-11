import React from "react";

const About = () => {
  return (
    <div className="py-14 dark:bg-black bg-slate-100 duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <div data-aos="fade-up">
            <img
              src={'/assets/banner1.png'}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[400px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">01</h1>
                </div>
                <div>
                  <p className="text-primary">Who is</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">JYOGA</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Jyoga is more than just a yoga brand - it's a movement toward health, happiness, and balance. Based in Dubai, we are dedicated to making yoga accessible, enjoyable, and life-changing for everyone.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                At Jyoga, we believe yoga isn't just about poses; it's about building strength, finding peace, and unlocking your potential. Whether you're a beginner or a seasoned yogi, our expert-led classes, calming spaces, and flexible packages are designed to help you thrive.
              </p>
              <p data-aos="fade-up" data-aos-delay="400">
                Join Jyoga today and discover a yoga experience that's all about you.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
