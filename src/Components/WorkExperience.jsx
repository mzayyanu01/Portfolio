import React from "react";
import {
  FaTasks,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaUserGraduate,
  FaCashRegister,
  FaLaptopCode,
  FaMicrochip,
} from "react-icons/fa";

export default function WorkExperience() {
  const works = [
    {
      id: 1,
      title: "Programme Officer",
      organization: "Kebbi Youth Connect Initiatives",
      location: "Birnin Kebbi",
      period: "2025 – Present",
      description:
        "Organizing and managing programme activities, coordinating events, and ensuring smooth execution of youth-focused initiatives.",
      icon: <FaTasks className="text-white " />,
    },
    {
      id: 2,
      title: "Computer  Facilitator",
      organization: "HCDC Birnin Kebbi",
      location: "Birnin Kebbi",
      period: "2024 – Present",
      description:
        "Delivering lectures on foundational and advanced computer science topics, preparing students for ICT-related assessments and examinations.",
      icon: <FaChalkboardTeacher className="text-white " />,
    },
    {
      id: 3,
      title: "Examinations Officer",
      organization: "Ummah Academy",
      location: "Birnin Kebbi",
      period: "2023 – 2025",
      description:
        "Coordinating exam logistics and student data management, maintaining academic integrity, and assisting in result compilation.",
      icon: <FaClipboardCheck className="text-white " />,
    },
    {
      id: 4,
      title: "NYSC Service",
      organization: "GDSS Gidan Madi",
      location: "Tangaza, Sokoto State",
      period: "2022 – 2023",
      description:
        "Provided ICT support and digital training during NYSC assignment, enhancing technology adoption in the school.",
      icon: <FaUserGraduate className="text-white " />,
    },
    {
      id: 5,
      title: "Café Cashier",
      organization: "ML-Tech Zamani High-Speed Cyber Café",
      location: "Birnin Kebbi",
      period: "2019 – 2021",
      description:
        "Managed transactions, provided tech assistance to customers, and ensured smooth daily operations of the cyber café.",
      icon: <FaCashRegister className="text-white " />,
    },
    {
      id: 6,
      title: "ICT Instructor",
      organization: "Sharhamak Computer Institute",
      location: "Birnin Kebbi",
      period: "2018 – 2019",
      description:
        "Taught digital literacy, MS Office, and basic programming to students, building foundational ICT skills.",
      icon: <FaLaptopCode className="text-white " />,
    },
    {
      id: 7,
      title: "SIWES Intern (Computer Lab)",
      organization: "Waziri Umaru Federal Polytechnic",
      location: "Birnin Kebbi",
      period: "2016 – 2017",
      description:
        "Assisted with lab maintenance and student support during practical sessions, ensuring a conducive learning environment.",
      icon: <FaMicrochip className="text-white" />,
    },
  ];
  return (
    <div className="working mx-auto w-full p-5 rounded-lg ">
      <h1 className="text-white text-2xl font-medium">
        My places of <span>Work Experiance</span>
      </h1>
      <div className="works grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8">
        {works.map((work, index) => (
          <div
            key={work.id}
            className="group bg-white rounded-3xl p-5 sm:p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              {/* Icon + Title */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-green-600 flex items-center justify-center text-2xl sm:text-3xl shadow-md flex-shrink-0">
                  {work.icon}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                    {work.title}
                  </h3>

                  <p className="text-green-600 font-semibold text-sm sm:text-base">
                    {work.organization}
                  </p>
                </div>
              </div>

              {/* Date Badge */}
              <span className="self-start bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                {work.period}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-500 text-sm sm:text-base mb-4">
              <span>📍</span>
              <span>{work.location}</span>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-4"></div>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
