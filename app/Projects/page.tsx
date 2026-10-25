"use client";
import Navbar from "@/components/Navbar";
import RN from "@/components/RN";
import UI from "@/components/UI";

import Image from "next/image";

const Projects = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <section className="w-full flex flex-col items-center justify-center gap-5 pb-4 pt-32 lg:gap-8">
        <p className="text-black space font-bold text-2xl lg:text-5xl lg:pt-2">
          MY <span className="text-[#FF6E6D]">WORKS</span> &{" "}
          <span className="text-[#A459FF]">PROJECTS</span>
        </p>
        <p className="text-black space font-normal text-center px-4 text-base lg:text-3xl lg:pb-2 lg:w-[50%]">
          “Projects that reflect my design thinking and development skills”
        </p>

        <div className="w-[90%] bg-[#8FA9EB] border-[6px] border-black rounded-b-[3.5rem] rounded-t-[1.8rem] h-96\ flex flex-col items-center py-12 gap-4">
          {/* ui projects */}

          <p className="text-black space font-bold text-2xl lg:text-3xl">
            <span className="text-[#FF6E6D]">UI</span>{" "}
            <span className="text-[#23A095]">&</span>{" "}
            <span className="text-[#5F4FE6]">UX</span> PROJECTS
          </p>

          <UI />
          {/* react native projects */}
          <p className="text-black space font-bold text-[1.3rem] pt-4 lg:text-3xl">
            <span className="text-[#23A095]">WEB</span>{" "}
            <span className="text-[#5F4FE6]">&</span>{" "}
            <span className="text-[#FF6E6D]">APP</span> PROJECTS
          </p>

          <RN />
        </div>
      </section>
    </div>
    // <div className="w-full min-h-screen bg-white">
    //   <Navbar />
    //   <section className="w-full flex items-center justify-center pt-28">
    //     <Image
    //       width={520}
    //       height={520}
    //       src="/icons/under.svg"
    //       alt="no image"
    //       className="mt-12 w-80 h-80 lg:w-96 lg:h-96"
    //     />
    //   </section>
    // </div>
  );
};

export default Projects;
