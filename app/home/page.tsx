"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";
// import Intro from "@/components/Intro";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

let introPlayed = false;

const Home = () => {
  // const [showIntro, setShowIntro] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   if (!introPlayed) {
  //     setShowIntro(true);
  //     // introPlayed = true;
  //   }
  // }, []);
  return (
    <>
      {/* {showIntro && (
        <Intro
          onFinish={() => {
            introPlayed = true;
            setShowIntro(false);
          }}
        />
      )} */}
      <div className="w-full min-h-screen bg-white">
        <Navbar />
        <section className="w-full flex flex-col items-center justify-center gap-4 pb-4 pt-28">
          <div className=" w-[90%] border-[6px] border-black bg-[#DECDFE] rounded-[3rem] flex flex-col items-center justify-around pb-8 gap-5 lg:w-[94%] lg:flex-row-reverse lg:px-32">
            <div className="relative ">
              <Image
                width={520}
                height={520}
                src="/icons/profile.webp"
                alt="no image"
                className="mr-4"
              />
              <Image
                width={100}
                height={100}
                src="/icons/circle.webp"
                alt="no image"
                className="absolute right-5 bottom-0 mt-4 animate-spin [animation-duration:8s] z-0 cursor-pointer hover:scale-105 transition"
              />
            </div>
            <div className="flex flex-col gap-6 items-center justify-center lg:max-w-[620px] lg:items-start lg:pt-20 lg:justify-evenly">
              <div className="flex flex-row gap-2 items-center pl-3 lg:pl-0">
                <Image
                  width={220}
                  height={220}
                  alt="no svg"
                  src="/icons/text.svg"
                  className="lg:w-72"
                />
                <span className="text-2xl lg:text-4xl">😎</span>
              </div>

              <span className="text-black text-base space px-4 w-[94%] text-center lg:text-3xl lg:px-0 lg:text-left lg:w-[80%]">
                UI/UX DESIGNER & APP DEVELOPER I DESIGN BOLD INTERFACES & BUILD
                REAL PRODUCTS
              </span>
              <button className="bg-[#F2E961] border-b-4 border-r-2 border-black w-36 h-12 rounded-2xl hover:scale-105 transition">
                <Link
                  href="/Contact"
                  className="ibm font-bold text-sm text-black"
                >
                  SAY HELLO 👋”
                </Link>
              </button>
            </div>
          </div>
          <div className="bg-[#F2C65E] w-[90%] h-[5.5rem] border-[6px] border-black rounded-full flex flex-row items-center justify-between px-6 lg:w-[94%] lg:h-28 lg:px-14">
            <Image
              width={120}
              height={120}
              src="/icons/about.webp"
              alt="no image"
              className="lg:w-44 lg:h-16"
            />
            <button
              className="rounded-full w-14 h-14 bg-[#F2E961] border-4 border-black flex items-center justify-center cursor-pointer lg:w-20 lg:h-20 hover:scale-105 transition"
              onClick={() => router.push("/About")}
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
    </>
  );
};
export default Home;
