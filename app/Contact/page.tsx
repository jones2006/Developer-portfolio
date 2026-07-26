"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Figma, GitHub, Linkedin } from "react-feather";

const Contact = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <section className="w-full flex items-center justify-center pt-28 flex-col gap-5 lg:pb-8">
        <div className="bg-[#FF6E6D] w-[97%] border-[6px] border-black rounded-t-[4.5rem] rounded-b-4xl flex flex-col gap-4 justify-center items-center py-6 lg:py-10 lg:gap-6">
          <Image
            width={150}
            height={150}
            src="/icons/connect.webp"
            alt="connect image"
            className="lg:w-64 lg:h-20"
          />

          <div className="bg-[#0CCE84] p-2 h-40 border-black w-[96%] border-4 border-b-[10px] rounded-2xl flex flex-col items-center justify-center text-black lg:w-[80%] lg:items-start lg:border-b-[12px] lg:gap-2 lg:h-40 md:items-start md:p-1 md:h-32">
            <span className="space font-bold text-xl lg:text-3xl lg:px-10 md:px-10">
              Have an idea or a project?
            </span>
            <p className="text-center space font-normal text-black text-xl lg:text-2xl lg:px-10 md:text-xl md:px-10">
              I’m open to discussing design, development, and new opportunities.
            </p>
          </div>

          <span className="space font-bold text-black text-xl py-2 lg:text-3xl">
            CONNECT WITH ME
          </span>
          <div className="flex flex-row gap-4">
            <a
              href="https://figma.com/@jonesj"
              target="_blank"
              className="bg-[#1BBBFF] w-16 h-16 rounded-full border-4 border-black flex items-center justify-center cursor-pointer lg:w-20 lg:h-20 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <Figma color="black" className="lg:w-8 lg:h-8" />
            </a>

            <a
              href="https://linkedin.com/in/jones-j06"
              target="_blank"
              className="bg-[#0CCE84] w-16 h-16 rounded-full border-4 border-black flex items-center justify-center cursor-pointer lg:w-20 lg:h-20 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <Linkedin color="black" className="lg:w-8 lg:h-8" />
            </a>
            <a
              href="https://github.com/jones2006"
              target="_blank"
              className="bg-[#F2E961] w-16 h-16 rounded-full border-4 border-black flex items-center justify-center cursor-pointer lg:w-20 lg:h-20 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <GitHub color="black" className="lg:w-8 lg:h-8" />
            </a>
          </div>
        </div>
        <div className="bg-[#F2C65E] w-[96%] h-[5.5rem] border-[6px] border-black rounded-full flex flex-row items-center justify-between px-6  lg:h-28 lg:px-14">
          <Image
            width={120}
            height={120}
            src="/icons/projects.webp"
            alt="projects image"
            className="lg:w-44 lg:h-16"
          />
          <button
            className="rounded-full w-14 h-14 bg-[#A459FF] border-4 border-black flex items-center justify-center cursor-pointer lg:w-20 lg:h-20 hover:scale-105 transition"
            onClick={() => router.push("/Projects")}
            aria-label="redirect Projects"
          >
            <ArrowUpRight
              strokeWidth={2.5}
              color="black"
              className="lg:w-8 lg:h-8"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
