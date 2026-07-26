import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="bg-[#0FDA75] border-[6px] border-black w-[90%]  rounded-4xl flex flex-col items-center pt-7 pb-8 lg:py-10">
      <span className="space font-bold text-black text-xl lg:text-3xl lg:pt-2">
        TOOLS & TECHNOLOGIES
      </span>

      <div className="w-full flex flex-col gap-6 pt-6 lg:flex-row lg:items-center lg:justify-evenly lg:py-10 md:flex-row md:items-center md:justify-evenly">
        {/* Design */}
        <div className="flex flex-col gap-6 items-center lg:gap-8">
          <span className="space font-bold text-xl text-black bg-[#8FA9EB] border-2 border-b-4 border-black w-32 h-12  flex items-center justify-center rounded-xl lg:w-40 lg:h-14 hover:scale-105 transition">
            DESIGN :
          </span>
          <div className="flex flex-row gap-5 lg:gap-10">
            <div
              className="w-14 h-14 rounded-full bg-[#302D40] flex items-center justify-center lg:w-16 lg:h-16 transition-transform duration-2000 ease-in-out 
                hover-[transform:rotateZ(360deg)]"
            >
              <Image
                width={15}
                height={20}
                src="/icons/figma.svg"
                alt="no image"
                className="lg:w-7 lg:h-7"
              />
            </div>
            <div
              className="w-14 h-14 rounded-full bg-[#302D40] flex items-center justify-center lg:w-16 lg:h-16 transition-transform duration-2000 ease-in-out 
                hover-[transform:rotateZ(360deg)]"
            >
              <Image
                width={25}
                height={25}
                src="/icons/spline.svg"
                alt="no image"
              />
            </div>
            <div
              className="w-14 h-14 rounded-full bg-[#302D40] flex items-center justify-center lg:w-16 lg:h-16 transition-transform duration-2000 ease-in-out 
                hover-[transform:rotateZ(360deg)]"
            >
              <Image
                width={30}
                height={20}
                src="/icons/ps.webp"
                alt="no image"
              />
            </div>
          </div>
        </div>

        {/* Front-end  */}

        <div className="flex flex-col gap-6 items-center lg:gap-8">
          <span className="space font-bold text-xl text-black bg-[#23A095] border-2 border-b-4 border-black py-2 px-6 rounded-xl lg:py-3 hover:scale-105 transition">
            FRONT-END :
          </span>
          <div className="flex flex-row gap-5 lg:gap-10">
            <div
              className="w-13 h-13 rounded-full bg-[#302D40] flex items-center justify-center lg:w-16 lg:h-16 transition-transform duration-2000 ease-in-out 
                hover-[transform:rotateZ(360deg)]"
            >
              <Image
                width={35}
                height={35}
                src="/icons/html.svg"
                alt="no image"
              />
            </div>
            <div
              className="w-13 h-13 rounded-full bg-[#302D40] flex items-center justify-center lg:w-16 lg:h-16 transition-transform duration-2000 ease-in-out 
                hover-[transform:rotateZ(360deg)]"
            >
              <Image
                width={30}
                height={30}
                src="/icons/css.svg"
                alt="no image"
              />
            </div>
            <div
              className="w-13 h-13 rounded-full bg-white flex items-center justify-center lg:w-16 lg:h-16 transition-transform duration-2000 ease-in-out 
                hover-[transform:rotateZ(360deg)]"
            >
              <Image
                width={30}
                height={30}
                src="/icons/tcss.svg"
                alt="no image"
              />
            </div>
            <div
              className="w-13 h-13 rounded-full bg-white flex items-center justify-center lg:w-16 lg:h-16 transition-transform duration-2000 ease-in-out 
                hover-[transform:rotateZ(360deg)]"
            >
              <Image
                width={40}
                height={40}
                src="/icons/react.svg"
                alt="no image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 pt-6 lg:flex-row lg:items-center lg:justify-evenly lg:pe-16 lg:gap-32 md:flex-row md:items-center md:justify-evenly md:pe-10 md:gap-28">
        {/* Mobile and Backend */}
        <div className="flex flex-col gap-6 items-center lg:gap-8">
          <span className="space font-bold text-xl text-black bg-[#FD714F] border-2 border-b-4 border-black w-32 h-12  flex items-center justify-center rounded-xl lg:w-40 lg:h-14 hover:scale-105 transition">
            MOBILE :
          </span>
          <div className="flex flex-row gap-5 lg:gap-9">
            <div
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center lg:w-16 lg:h-16 transition-transform duration-2000 ease-in-out 
                hover-[transform:rotateZ(360deg)]"
            >
              <Image
                width={40}
                height={40}
                src="/icons/react.svg"
                alt="no image"
              />
            </div>
            <div
              className="flex items-center transition-transform duration-2000 ease-in-out 
                hover-[transform:rotateZ(360deg)]"
            >
              <Image
                width={100}
                height={50}
                src="/icons/expo.svg"
                alt="no image"
              />
            </div>
          </div>
        </div>

        {/* Backend */}

        <div className="flex flex-col gap-6 items-center lg:gap-8 ">
          <span className="space font-bold text-xl text-black bg-[#F2E961] border-2 border-b-4 border-black py-2 px-6 rounded-xl lg:py-3 hover:scale-105 transition">
            BACK-END :
          </span>
          <div className="flex flex-row gap-6 lg:gap-10 ">
            <div>
              <Image
                width={60}
                height={60}
                src="/icons/python.webp"
                alt="no image"
                className="transition-transform duration-2000 ease-in-out 
                hover-[transform:rotateZ(360deg)]"
              />
            </div>
            <div>
              <Image
                width={45}
                height={45}
                src="/icons/flask.svg"
                alt="no image"
                className="transition-transform duration-2000 ease-in-out 
                hover-[transform:rotateZ(360deg)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
