"use client";
import Image from "next/image";
import image from "../images/logo.png";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header className="bg-[#044e83] fixed top-0 left-0 flex z-50 justify-between items-center w-full h-[80px] p-4 md:p-3 shadow-lg">
      {/* Logo */}
      <div className="flex-shrink-0 ml-10 mb-0">
        <Image
          src={image}
          width={70}
          height={80}
          alt="logo"
          className="w-[70px] h-auto"
        />
      </div>
      <div className="flex-1 text-center">
        <h3
          className="font-sans font-bold text-lg md:text-2xl"
          style={{ color: "#b9d8f3" }}
        >
          Tuition Free Education Program on Latest Technologies
        </h3>
      </div>
      <button className="text-white block md:hidden" onClick={toggle}>
        ☰
      </button>
      <nav
        className={`${
          open ? "block" : "hidden"
        } md:flex w-full md:w-auto bg-[#044e83] md:bg-transparent absolute md:static top-[100%] left-0 md:top-auto z-40 transition-all duration-300`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-0 text-white font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/apply">Apply</Link>
          </li>
          <li>
            <Link href="/jobs">Jobs</Link>
          </li>
          <li>
            <Link href="/result">Result</Link>
          </li>
          <li>
            <Link href="http://localhost:3000/#courses">Courses</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
