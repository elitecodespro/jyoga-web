import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Personalized (1 to 1)",
    price: '276',
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: [
      "Get personalized 1 to 1 sessions with our experts, unlimited for a month",
    ],
    duration: "Per Session",
    aosDelay: "1000",
  },
];

const skillsData2 = [
  {
    name: "20 People",
    price: '1,015',
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: [
      "Yoga Group Event.",
      "Perfect for small groups or private gatherings.",
    ],
    duration: "Per Session",
    aosDelay: "0",
  },
  {
    name: "50 People",
    price: '2,036',
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: [
      "Yoga Group Event",
      "Ideal for medium-sized corporate or group events.",
    ],
    duration: "Per Session",
    aosDelay: "500",
  },
  {
    name: "100 People",
    price: '4,037',
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: [
      "Yoga Group Event",
      "Perfect for large corporate events or big group gatherings.",
    ],
    duration: "Per Session",
    aosDelay: "1000",
  },
  {
    name: "Personalized (1 to 1)",
    price: '508',
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: [
      "Individual Session",
      "For a more intimate experience, book a one-on-one personalized session.",
    ],
    duration: "Per Session",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-8">
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold text-center sm:text-4xl"
            >
              What <span className="text-primary">We</span> Offer
            </h1>

            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-2xl mt-3"
            >
              Online Yoga Sessions
            </h1>

            <p className="text-center">Available to the entire. Includes both groups and individual sessions. Join us online from anywhere!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill, i) => (
              <div key={i}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-gray-200 dark:bg-dark  hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group "
              >
                {/* <div className="grid place-items-center">{skill.icon}</div> */}
                <h1 className="text-3xl font-bold">{skill.name}</h1>
                <h1 className="text-center text-4xl font-semibold text-primary">
                  {`${skill.price}`} AED
                </h1>

                {skill.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
                <p className="font-semibold text-2xl">
                  {" "}
                  Duration : {skill.duration}
                </p>
                <a
                  href={skill.link}
                  className="primary-btn mt-4 group-hover:scale-105  duration-200"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>

          <div className="pb-6 mt-14">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-2xl mt-3"
            >
              Onsite Yoga Sessions (Dubai Only)
            </h1>
            <p className="text-center">Yoga events tailored for large groups like corporate or any other public session (Available only in Dubai).</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData2.map((skill, i) => (
              <div key={i}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-gray-200 dark:bg-dark  hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group "
              >
                {/* <div className="grid place-items-center">{skill.icon}</div> */}
                <h1 className="text-3xl font-bold">{skill.name}</h1>
                <h1 className="text-center text-4xl font-semibold text-primary">
                  {`${skill.price}`} AED
                </h1>

                {skill.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
                <p className="font-semibold text-2xl">
                  {" "}
                  Duration : {skill.duration}
                </p>
                <a
                  href={skill.link}
                  className="primary-btn mt-4 group-hover:scale-105  duration-200"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Services;
