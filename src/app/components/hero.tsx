import React from "react";
import Image from "next/image";
import kamran from "../images/kamran.png";
import governor from "../images/governor.png";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-poppins",
});

function Hero() {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col lg:flex-row justify-between items-center sm:pt-32 md:pt-20 lg:pt-20 xl:pt-20 2xl:pt-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${governor.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-70 z-0"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col justify-start items-start sm:ml-6 lg:ml-12 sm:pt-5 md:pl-12 md:pt-8 lg:pt-0 lg:pl-12 xl:pl-12 2xl:pl-12">
        <h1
          className={`${poppins.variable} sm:text-2xl md:text-3xl lg:text-5xl xl:text-4xl text-[#044e83] font-extrabold`}
        >
          Governor Sindh
        </h1>
        <h2 className="sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl text-[#044e83] mb-4">
          Kamran Khan Tessori
        </h2>
        <h2
          className={`${poppins.variable} text-[40px] leading-[48px] text-[rgb(46,182,232)] font-semibold`}
        >
          Certified Cloud <br />
          Applied Generative AI <br />
          Engineer (GenEng)
        </h2>
        <h3 className="text-2xl text-[#044e83] font-bold lg:pt-9 xl:pt-9 2xl:pt-9">
          Earn up to $5,000 / month
        </h3>
        <h3 className="text-2xl text-[#044e83] font-bold">
          Now admissions are open in <br /> Hyderabad
        </h3>

        <div className="flex items-center space-x-4 mt-4">
          <button className="w-[150px] text-white p-3 text-xl rounded-lg bg-[#044e83] font-bold transition duration-200 ease-out hover:scale-105 hover:ease-in">
            Apply Now
          </button>
          <div className="flex flex-col">
            <p
              className={`${poppins.variable} text-[30px] leading-[36px] text-[rgb(4,78,131)] font-bold`}
            >
              562,143
            </p>
            <p
              className={`${poppins.variable} text-[14px] leading-[20px] text-[#044e83] font-normal`}
            >
              Accepted Applications
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 lg:w-[57.5%] h-full flex items-end justify-end">
        <Image
          src={kamran}
          alt="kamrantessori"
          layout="responsive"
          width={500}
          height={800}
          className="object-cover h-[100vh] w-auto"
          style={{
            objectPosition: "bottom",
          }}
        />
      </div>
    </div>
  );
}

export default Hero;
