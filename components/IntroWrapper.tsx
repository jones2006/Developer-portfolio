"use client";

import { useEffect, useState } from "react";
import Intro from "./Intro";
import { useRouter } from "next/navigation";

export default function IntroWrapper({ children }: any) {
  const [showIntro, setShowIntro] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // refresh detect
    const navEntries = performance.getEntriesByType("navigation") as any;

    if (navEntries[0]?.type === "reload") {
      sessionStorage.removeItem("introSeen");
      router.replace("/");
    }
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
        <div className="fixed inset-0 z-9999">
          <Intro onFinish={handleFinish} />
        </div>
      )}
    </>
  );
}
