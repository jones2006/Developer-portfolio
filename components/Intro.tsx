"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Intro({ onFinish }: { onFinish: () => void }) {
  const [clicked, setClicked] = useState(false);

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
          <div
            className="absolute inset-0 flex flex-col gap-2 items-center justify-center  cursor-pointer"
            onClick={() => setClicked(true)}
            // @ts-ignore
            onTap={() => setClicked(true)}
          >
            <Image
              src="/icons/Click here.svg"
              alt="Click here indicator"
              width={120}
              height={120}
            />
            <Image
              src="/icons/arrow.svg"
              alt="Arrow pointing downward"
              width={20}
              height={20}
            />
            <motion.img
              src="/icons/circle.webp"
              alt="logo"
              onClick={() => setClicked(true)}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="w-42 h-42 cursor-pointer"
            />
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
