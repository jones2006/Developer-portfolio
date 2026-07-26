"use client";
import Navbar from "@/components/Navbar";
import Profile from "@/components/profile";
import Skills from "@/components/Skills";
import Whattodo from "@/components/Whattodo";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { ArrowUp } from "react-feather";

const About = () => {
  const scrollref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      {/* hero section */}
      <section
        className="w-full flex flex-col items-center justify-center gap-8 pb-5 pt-28"
        ref={scrollref}
      >
        <div className="w-[90%]  border-[6px] border-black bg-[#F2C65E] rounded-[3rem] flex flex-col gap-1 justify-center items-center pb-6 lg">
          <Image
            width={130}
            height={130}
            src="/icons/about.webp"
            alt="no image"
            className="pt-6 lg:w-64 lg:h-28 lg:mt-3 md:w-52 md:h-24 "
          />
          <p className="space font-medium text-black text-base text-center px-2 py-4 lg:text-3xl lg:pt-6 md:text-2xl">
            “<span className="text-[#FD714F]">DESIGNER</span> BY THINKING,
            <span className="text-[#5F4FE6]">DEVELOPER</span> BY PRACTICE”
          </p>
          {/* profile */}
          <Profile />
        </div>

        {/* second section  */}
        <Whattodo />
        <Skills />

        {/* say hello and top btn */}
        <div className="flex flex-row  justify-evenly w-[90%] gap-4 lg:justify-between md:justify-between">
          <div className="bg-[#A459FF] rounded-4xl w-[80%] border-[6px] border-black flex flex-col items-center justify-center gap-3 py-3 lg:flex-row lg:rounded-full lg:py-4 lg:px-4 lg:gap-0 lg:justify-evenly lg:w-[80%] md:flex-row md:justify-evenly">
            <span className="space font-bold text-black text-center text-[1rem] leading-5 w-[80%] lg:text-4xl lg:w-auto md:w-auto md:text-xl">
              Let’s create something great together.
            </span>
            <button
              className="bg-[#FF6E6D] rounded-full px-4 py-2 border-4 border-black space font-bold text-black text-sm  lg:py-4 lg:text-2xl cursor-pointer hover:scale-105 transition"
              onClick={() => {
                router.push("/Contact");
              }}
            >
              Say Hello😎!
            </button>
          </div>
          <button
            className="w-16 rounded-2xl bg-[#F2E961] border-black border-4 flex flex-col items-center justify-center lg:w-28 lg:rounded-full lg:border-8 cursor-pointer hover:scale-105 transition"
            onClick={() => {
              scrollref.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            aria-label="Scroll page"
          >
            <ArrowUp color="black" strokeWidth={2} className="lg:w-8 lg:h-8" />
            <span className="space font-bold text-black text-sm lg:text-xl">
              top
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
