import React from "react";
import { Typewriter } from "react-simple-typewriter";
import bg1 from "../Assets/Pictures/bg-1.png";
import bg2 from "../Assets/Pictures/bg-2.png";
import bg3 from "../Assets/Pictures/bg-3.png";

import port1 from "../Assets/Pictures/passport.png";
import port2 from "../Assets/Pictures/port-2.png";
import port3 from "../Assets/Pictures/port-3.png";
import { FaDownload } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import {
  FaCode,
  FaGlobe,
  FaNetworkWired,
  FaFileAlt,
  FaDatabase,
  FaWrench,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="main grid grid-cols-3 gap-8 max-w-5xl w-full  min-h-screen items-center">
      {/* Info COntainer */}
      <div className=" col-span-2">
        <h1 className="text-white text-6xl font-bold  mt-10 border-l-5 border-r-white p-3">
          Hi! I'am{" "}
          <span className="text-green-500 uppercase p-5 mb-8">Zayyanu,</span>
          <br />
          <span>
            <Typewriter
              words={["Web Developer", "Web Designer", "Digital Creator"]}
              loop
              cursor
              cursorBlinking
              cursorStyle="|"
              typeSpeed={300}
              deleteSpeed={150}
              delaySpeed={150}
            />
          </span>
        </h1>
        <p className="text-white p-10 text-justify leading-relaxed">
          I' am a dedicated and detail-oriented Computer Science professional
          with hands-on experience in software development, computer networking,
          ICT instruction, and academic administration. Proven ability to
          deliver technical and educational solutions in fast-paced
          environments, with strong communication skills and a passion for
          continuous learning.
        </p>
        <div className="mt-10 flex justify-around">
          <button className="text-white bg-green-400 font-medium px-12 py-3 rounded-full flex justify-center gap-3 place-items-center">
            Contact Me! <MdOutlineWifiCalling3 />
          </button>
          <button className="text-white bg-green-400 font-medium px-12 py-3 rounded-full flex justify-center gap-3 place-items-center">
            Download CV <FaDownload />
          </button>
        </div>
      </div>
      {/* Image Container */}
      <div className=" w-full flex justify-center relative">
        <img src={port1} alt="" className="relative -mt-6 " />
      </div>
    </div>
  );
}
