import React from "react";
import {
  FaCode,
  FaGlobe,
  FaNetworkWired,
  FaFileAlt,
  FaDatabase,
  FaWrench,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Software Development ",
      icon: <FaCode className="text-white text-5xl mx-auto mb-3" />,
      description:
        "Proficient in object-oriented programming using Java and Python, with a focus on building robust, scalable, and efficient applications. ",
    },
    {
      id: 2,
      title: "Web Development ",
      icon: <FaGlobe className="text-white text-5xl mx-auto mb-3" />,
      description:
        "Experienced in creating responsive, user-friendly websites and web applications using modern front-end technologies like HTML, CSS, and JavaScript, combined with back-end development using PHP.",
    },
    {
      id: 3,
      title: "Internet Services",
      icon: <FaNetworkWired className="text-white text-5xl mx-auto mb-3" />,
      description:
        "Knowledgeable in computer networking fundamentals, including network configuration, troubleshooting, and management of internet services. ",
    },

    {
      id: 4,
      title: "Microsoft Office Suite",
      icon: <FaFileAlt className="text-white text-5xl mx-auto mb-3" />,
      description:
        "Advanced proficiency in Microsoft Office applications, enabling the creation of professional documents, data analysis using spreadsheets, and dynamic presentations. ",
    },
    {
      id: 5,
      title: "Database Management",
      icon: <FaDatabase className="text-white text-5xl mx-auto mb-3" />,
      description:
        "Experienced in designing, querying, and managing relational databases using Structured Query Language (SQL) and Microsoft Access. ",
    },
    {
      id: 6,
      title: "Computer  Maintenance",
      icon: <FaWrench className="text-white text-5xl mx-auto mb-3" />,
      description:
        "Skilled in diagnosing, troubleshooting, and resolving hardware and software issues on desktops, laptops, and peripherals.",
    },
  ];
  return (
    <div className="main w-full  p-4 min-h-screen text-center">
      <h1 className="text-white text-5xl font-bold mb-10">
        My <span className="text-green-500 border-b-4">Services</span>
      </h1>
      <div className="services grid grid-cols-3 gap-4 ">
        {services.map((service, index) => (
          <div
            className="service p-5 bg-green-600 rounded-lg transition-all duration-500 hover:-translate-y-2 hover:bg-green-400"
            key={index}
          >
            <h3 className="text-center text-white ">{service.icon}</h3>
            <h2 className="text-center text-2xl font-bold text-white mb-3">
              {service.title}
            </h2>
            <p className="text-white ">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
