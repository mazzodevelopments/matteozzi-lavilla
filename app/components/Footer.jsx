"use client";

import Image from "next/image";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function Footer() {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (target) => {
    if (scroll) {
      scroll.scrollTo(`#${target}`, {
        offset: 0,
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    }
  };

  return (
    <footer
      className="w-full flex items-center flex-col text-black pt-10 sm:pt-20 h-auto"
      data-scroll-section
    >
      <div className="w-[90%] sm:w-[80%] py-10 sm:py-20 h-auto flex flex-col lg:flex-row justify-between items-start lg:items-center border-y border-gray-300">
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 mb-10 lg:mb-0">
          <div>
            <ul className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Menu</h3>
              <li className="flex items-center hover:underline cursor-pointer">
                <a
                  onClick={() => handleScroll("about")}
                  className="text-base sm:text-lg"
                >
                  Nosotros
                </a>
              </li>
              <li className="flex items-center hover:underline cursor-pointer">
                <a
                  onClick={() => handleScroll("services")}
                  className="text-base sm:text-lg"
                >
                  Servicios
                </a>
              </li>
              <li className="flex items-center hover:underline cursor-pointer">
                <a
                  onClick={() => handleScroll("team")}
                  className="text-base sm:text-lg"
                >
                  Equipo
                </a>
              </li>
              <li className="flex items-center hover:underline cursor-pointer">
                <a
                  onClick={() => handleScroll("contact")}
                  className="text-base sm:text-lg"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                Contacto
              </h3>
              <li className="flex items-start">
                <a
                  href="tel:+542944422066"
                  className="text-base sm:text-lg cursor-pointer hover:underline"
                >
                  +54 2944 422066
                </a>
              </li>
              <li className="flex items-start">
                <a
                  href="mailto:info@matteozzi-lavilla.com.ar"
                  className="text-base sm:text-lg cursor-pointer hover:underline"
                >
                  info@matteozzi-lavilla.com.ar
                </a>
              </li>
              <li className="flex items-start">
                <a
                  href="https://maps.google.com/?q=Mitre 125, San Carlos de Bariloche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg cursor-pointer hover:underline"
                >
                  Mitre 125, San Carlos de Bariloche
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[40%] flex flex-row justify-start items-center gap-4 sm:gap-6 lg:gap-10">
          <Image
            src="/logo.png"
            alt="logo"
            width={500}
            height={500}
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-40 lg:h-40"
          />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-none mb-2">
            Matteozzi <br />
            Lavilla
          </h2>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-[90%] sm:w-[80%] px-5 sm:px-10 py-5 sm:py-10 justify-between items-center">
        <p className="text-sm sm:text-md text-gray-500 mb-2 sm:mb-0">
          © 2025 Matteozzi Lavilla. All Rights Reserved
        </p>
        <p className="text-sm sm:text-md text-gray-500">Developed by Mazzo</p>
      </div>
    </footer>
  );
}
