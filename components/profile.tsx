import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 lg:flex-row-reverse">
      <div className="relative bottom-4">
        <Image
          width={520}
          height={520}
          src="/icons/profile.webp"
          alt="Jones profile picture"
          priority
        />
        <Image
          width={100}
          height={100}
          src="/icons/circle.webp"
          alt="Circle image"
          className="absolute right-5 bottom-0 mt-4 animate-spin [animation-duration:8s] z-0 cursor-pointer hover:scale-105 transition"
        />
      </div>
      {/* content */}
      <div className="lg:flex-col lg:w-[50%] flex flex-col gap-3 items-center justify-center">
        <div className="bg-[#DECDFE] p-2 border-black w-[96%] border-4 border-b-8 rounded-2xl flex flex-col items-center justify-center text-black lg:w-[80%] lg:items-start lg:border-b-[12px] lg:gap-2 lg:h-48 md:items-start ">
          <p className="text-left space font-bold text-black text-[0.85rem] px-2 py-2 lg:text-2xl lg:px-10 md:text-2xl md:px-10 md:py-6">
            Hi, I’m Jones — a{" "}
            <span className="text-[#5F4FE6]">UI/UX Designer</span> and {""}
            <span className="text-[#F14E1E]">App Developer</span>
            {""} who loves building bold, functional, and user-focused digital
            products.
          </p>
        </div>

        <div className="bg-[#23A095] p-2 border-black w-[96%] border-4 border-b-8 rounded-2xl flex flex-col items-center justify-center text-black lg:w-[80%] lg:items-start lg:border-b-[12px] lg:gap-2 lg:h-48 md:items-start">
          <p className="text-left space font-bold text-black text-sm px-2 py-2 lg:text-2xl lg:px-10 md:text-2xl md:px-10 md:py-6">
            I enjoy turning ideas into real, usable interfaces by combining
            strong design thinking with clean, scalable code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
