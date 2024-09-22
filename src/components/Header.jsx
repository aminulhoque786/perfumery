import React, { useState, useEffect } from "react";
import "./header.css";
import lui from "../assets/liu.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 150); // Set true when scrolled > 150px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="max-w-container mx-auto">
      <section className={scroll ? "menu1" : "menu"}>
        <div>
          {/* Fixed navbar for all devices */}
          <nav className="fixed top-0 left-0  z-10 w-full bg-black opacity-80 ease-out font-gail text-center">
            <div className="max-w-full flex  flex-wrap items-center justify-between lg:justify-between mx-auto">
              {/* Logo */}
              <div className="w-1/4">
                <img className="w-[100px]" src={lui} alt="logo" />
              </div>

              {/* Menu button for small screens */}
              <div className="flex items-center md:order-2 space-x-1 rtl:space-x-reverse">
                <button
                  onClick={toggleMenu}
                  className="md:hidden text-white focus:outline-none"
                >
                  <svg
                    className="w-8 h-8 mt-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>

              {/* Navbar links */}
              <div
                className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "block" : "hidden"
                } md:block`}
              >
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0">
                  <li>
                    <Link
                      to="/"
                      className="block py-2 px-4 text-white hover:text-red-700"
                      onClick={closeMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="block py-2 px-4 text-white hover:text-red-700"
                      onClick={closeMenu}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Company"
                      className="block py-2 px-4 text-white hover:text-red-700"
                      onClick={closeMenu}
                    >
                      Our Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Carrers"
                      className="block py-2 px-4 text-white hover:text-red-700"
                      onClick={closeMenu}
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/investors"
                      className="block py-2 px-4 text-white hover:text-red-700"
                      onClick={closeMenu}
                    >
                      Investors
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
