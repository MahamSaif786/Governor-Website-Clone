import Link from "next/link";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTiktok,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"; // Importing social icons

function Footer() {
  return (
    <div className="bg-gray-200 w-full flex flex-col justify-center items-center mt-0 py-6">
      <div className="w-[80%] flex sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start">
        <div className="sm:p-3 md:p-10 lg:p-15 xl:p-15">
          <ul>
            <li>
              <h1 className="font-bold text-xl pb-4">Core Courses</h1>
            </li>
            <li>
              <Link href="#">Programming Fundamentals</Link>
            </li>
            <li>
              <Link href="#">Web2 Using NextJS</Link>
            </li>
            <li>
              <Link href="#">Earn as You Learn</Link>
            </li>
          </ul>
        </div>
        <div className="sm:p-3 md:p-10 lg:p-15 xl:p-15">
          <ul>
            <li>
              <h1 className="font-bold text-xl pb-4">Advanced Courses</h1>
            </li>
            <li>
              <Link href="#">Web 3 and Metaverse</Link>
            </li>
            <li>
              <Link href="#">Cloud-Native Computing</Link>
            </li>
            <li>
              <Link href="#">
                Artificial Intelligence (AI) and Deep Learning
              </Link>
            </li>
            <li>
              <Link href="#">Ambient Computing and IoT</Link>
            </li>
            <li>
              <Link href="#">Genomics and Bioinformatics</Link>
            </li>
            <li>
              <Link href="#">Network Programmability and Automation</Link>
            </li>
          </ul>
        </div>

        <div className="sm:p-3 md:p-10 lg:p-15 xl:p-15">
          <h1 className="font-bold text-xl pb-4">Social Links</h1>
          <ul className="list-none flex mb-6">
            <li>
              <Link
                href="https://www.linkedin.com/in/maham-saif-996906306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-blue-700 text-3xl mr-2 transition duration-200 ease-out hover:scale-105 hover:ease-in"
                />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="text-black text-3xl mr-2 transition duration-200 ease-out hover:scale-105 hover:ease-in"
                />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-blue-500 text-3xl mr-2 transition duration-200 ease-out hover:scale-105 hover:ease-in"
                />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-green-500 text-3xl mr-2 transition duration-200 ease-out hover:scale-105 hover:ease-in"
                />
              </Link>
            </li>
            <li>
              <Link
                href="mailto:mahamsaif2005@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              ></Link>
            </li>
          </ul>
          <p className="text-gray-700 text-center mt-4">
            Gmail:{" "}
            <a
              href="mailto:mahamsaif2005@gmail.com"
              className="font-bold text-blue-600 hover:underline"
            >
              mahamsaif2005@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
