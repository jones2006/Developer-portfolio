"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Intro({ onFinish }: { onFinish: () => void }) {
  const [clicked, setClicked] = useState(false);
  const MotionImage = motion(Image);

  return (
    <div className="fixed inset-0 z-9999 overflow-hidden">
      {/* Background Split Layout */}
      {!clicked && (
        <>
          {/* Top Half */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#DECDFE]" />

          {/* Bottom Half */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white" />

          {/* Center Logo */}
          <div>
            <button
              type="button"
              onClick={() => setClicked(true)}
              aria-label="Start portfolio"
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-transparent border-0 p-0"
            >
              <Image
                src="/icons/Click here.svg"
                alt=""
                aria-hidden="true"
                width={120}
                height={120}
              />
              <Image
                src="/icons/arrow.svg"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
              />
              <MotionImage
                src="/icons/circle.webp"
                alt="logo"
                onClick={() => setClicked(true)}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="w-42 h-42 cursor-pointer"
                width={168}
                height={168}
              />
            </button>
          </div>
        </>
      )}

      {/* After Click → Split Animation */}
      {clicked && (
        <>
          {/* Top Panel Moving Up */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 2, ease: [0.83, 0, 0.17, 1] }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#DECDFE]"
            onAnimationComplete={onFinish}
          />

          {/* Bottom Panel Moving Down */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{ duration: 2, ease: [0.83, 0, 0.17, 1] }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-white"
          />
        </>
      )}
    </div>
  );
}
