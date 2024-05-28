"use client";

import Image from "next/image";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isNavOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link href="#" className="navbar-brand">
          <Image
            src="/m-logo.png"
            width={50}
            height={50}
            priority={true}
            alt="Michael River Nilsson logo"
          />
        </Link>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal hidden gap-10 p-0 text-lg md:flex">
          <li>
            <Link
              href="#about"
              className="p-0 hover:bg-black hover:text-coralred"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="p-0 hover:bg-black hover:text-coralred"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#portfolio"
              className="p-0 hover:bg-black hover:text-coralred"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="p-0 hover:bg-black hover:text-coralred"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="dropdown flex">
          <button
            tabIndex={0}
            role="button"
            className="p-0 text-coralred md:hidden"
            aria-label="Show menu"
          >
            <Hamburger
              label="Show menu"
              toggled={isNavOpen}
              toggle={setIsNavOpen}
              size={30}
              direction="left"
              duration={0.5}
              rounded
            />
          </button>

          <ul
            tabIndex={0}
            className={`${isNavOpen ? "block" : "hidden"} menu dropdown-content right-0 top-14 z-[1] flex justify-end gap-5 rounded-bl border-b-2 border-s-2 border-coralred bg-black px-10 py-5 text-lg`}
          >
            <li>
              <Link
                href="#about"
                onClick={() => setIsNavOpen(false)}
                className="p-0 hover:bg-black hover:text-coralred"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                onClick={() => setIsNavOpen(false)}
                className="p-0 hover:bg-black hover:text-coralred"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                onClick={() => setIsNavOpen(false)}
                className="p-0 hover:bg-black hover:text-coralred"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={() => setIsNavOpen(false)}
                className="p-0 hover:bg-black hover:text-coralred"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
