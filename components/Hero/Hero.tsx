import React from "react";

const Hero = ({setting} : any) => {
  const BgStyle = {
    backgroundImage: `url(${setting.heroBackgroundPhoto})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionY: "10%",
    height: "100%",
    width: "100%",
  };

  return (
    <div
      style={BgStyle}
      className="dark:bg-black dark:text-white duration-300 "
    >
      <div className="bg-white/20  dark:bg-black/80 duration-300">
        <div className="container min-h-[620px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
            <p data-aos="fade-up" className="text-primary text-2xl font-bold">
              <img
                src={setting.darkLogo}
                alt=""
                className="w- sm:w-24 dark:hidden absolute bottom-1 left-0 sm:left-1/2 sm:-translate-x-1/2 m-2 sm:m-0 "
              />
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-5xl md:text-7xl font-bold text-white"
            >
              {setting.heroTitle}
            </h1>
            <p data-aos="fade-up" data-aos-delay="500" className="text-white">
              “{setting.heroSubTitle}”{" "}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once={"true"}
              className="primary-btn"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
