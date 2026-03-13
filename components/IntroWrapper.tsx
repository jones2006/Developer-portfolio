"use client";

import { useEffect, useState } from "react";
import Intro from "./Intro";

export default function IntroWrapper({ children }: any) {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("introSeen");

    if (!seen) {
      setShowIntro(true);
    }
  }, []);

  const handleFinish = () => {
    sessionStorage.setItem("introSeen", "true");
    setShowIntro(false);
  };

  return (
    <>
      {children}

      {showIntro && (
        <div className="fixed inset-0 z-[9999]">
          <Intro onFinish={handleFinish} />
        </div>
      )}
    </>
  );
}
