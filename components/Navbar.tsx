"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Hover from "./Hover";
import { useRouter } from "next/navigation";

type Props = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed w-full h-24 flex items-center justify-between px-6 bg-white text-black lg:px-12 md:px-12 z-50 ">
      {/* Logo */}
      <Image
        src="/icons/logo.svg"
        alt="image"
        width={120}
        height={25}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 items-center">
        <Hover label="Home" onClick={() => setMenuOpen(false)} href="/" />
        <Hover label="About" onClick={() => setMenuOpen(false)} href="/About" />
        <Hover
          label="Projects"
          onClick={() => setMenuOpen(false)}
          href="/Projects"
        />
        <button
          className="bg-[#F2E961] border-b-4 border-r-2 border-black w-24 h-10 rounded-full"
          aria-label="redirect Contact"
        >
          <Link href="/Contact" className="ibm font-bold text-sm">
            Contact
          </Link>
        </button>
      </div>

      {/* Hamburger (Mobile only) */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="navbar"
      >
        <Image
          src={menuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
          alt="menu toggle"
          width={34}
          height={34}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-24 left-0 w-full bg-[#DECDFE] text-black flex flex-col items-center justify-center gap-12 py-10 rounded-b-2xl border-b-4 border-b-black md:hidden transition-all duration-500 ease-in-out
       ${
         menuOpen
           ? "opacity-100 translate-y-0"
           : "opacity-0 -translate-y-10 pointer-events-none"
       }`}
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="ibm font-bold"
        >
          Home
        </Link>

        <Link
          href="/About"
          onClick={() => setMenuOpen(false)}
          className="ibm font-bold"
        >
          About
        </Link>

        <Link
          href="/Projects"
          onClick={() => setMenuOpen(false)}
          className="ibm font-bold"
        >
          Projects
        </Link>

        <button
          className="bg-[#F2E961] border-b-4 border-r-2 border-black w-36 h-10 rounded-full"
          aria-label="navbar open"
          onClick={() => setMenuOpen(false)}
        >
          <Link href="/Contact" className="ibm font-bold text-sm">
            Contact
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
