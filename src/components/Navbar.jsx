import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 2,
      ease: "bounce.out",
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex fixed top-0 left-0 z-40 w-full items-center justify-between px-8 py-4 bg-blue-900 text-white"
    >
      <div className="font-bold text-2xl">ILETSS Institute</div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-7 bg-white rounded transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-7 bg-white rounded my-1 transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-7 bg-white rounded transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 text-xl">
        <li>
          <a href="#features" className="hover:text-blue-300 ">
            Features
          </a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-blue-300 ">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#resources" className="hover:text-blue-300 ">
            Resources
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-300 ">
            Contact
          </a>
        </li>
      </ul>
      {/* Mobile menu */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-blue-900 flex flex-col items-center gap-6 py-6 text-xl md:hidden shadow-lg animate-fadeIn">
          <li>
            <a
              href="#features"
              className="hover:text-blue-300 "
              onClick={() => setOpen(false)}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:text-blue-300 "
              onClick={() => setOpen(false)}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#resources"
              className="hover:text-blue-300 "
              onClick={() => setOpen(false)}
            >
              Resources
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-300 "
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
      {/* FadeIn animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease;
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;