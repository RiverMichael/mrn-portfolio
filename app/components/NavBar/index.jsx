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
        <ul className="menu menu-horizontal hidden gap-5 text-lg md:flex">
          <li className="py-1">Contact</li>
          <li className="py-1">Contact</li>
          <li className="py-1">Contact</li>
          <li className="py-1">Contact</li>
        </ul>

        <div className="dropdown flex">
          <button
            tabIndex={0}
            role="button"
            className="text-coralred p-0 md:hidden"
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
            className={`${isNavOpen ? "block" : "hidden"} border-coralred menu dropdown-content right-0 top-14 z-[1]  flex justify-end gap-4 rounded-bl border-b-2 border-s-2 bg-black px-10 py-5 text-lg`}
          >
            <li>About</li>
            <li>About</li>
            <li>About</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
