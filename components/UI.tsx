"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UI() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeId, setActiveId] = useState<number | null>(null);
  const router = useRouter();
  const projects = [
    {
      id: 1,
      img: "/projects-ui/kiosk ui.png",
      border: "#F2E961",
      url: "https://www.figma.com/community/file/1497969269675579774/kiosk-ui-ux-case-study",
      title: "kiosk ui Case study",
      Description:
        "Self-service kiosk UI designed for fast and intuitive user interaction.",
    },
    {
      id: 2,
      img: "/projects-ui/women app ui.png",
      border: "#F92A2A",
      url: "https://www.figma.com/community/file/1496090582789127252/women-safety-app-case-study",
      title: "women safety app case study",
      Description:
        "Safety-focused mobile app with emergency alert and live tracking features.",
    },
    {
      id: 3,
      img: "/projects-ui/music app ui.png",
      border: "#E8292C",
      url: "https://www.figma.com/community/file/1574439883256356311/music-streaming-app-ui",
      title: "music app ui",
      Description:
        "Modern music streaming app with clean navigation and immersive UI.",
    },
    {
      id: 4,
      img: "/projects-ui/drone ui.png",
      border: "#3269FF",
      url: "https://www.figma.com/community/file/1515989669455988517/drone-websiteui-design",
      title: "Drone site ui",
      Description:
        "High-impact drone product website with bold visuals and sleek layout.",
    },
    {
      id: 5,
      img: "/projects-ui/love flame ui.png",
      border: "#FF4787",
      url: "https://www.figma.com/community/file/1523330784965191772/flames-app",
      title: "flames app ui",
      Description:
        "Fun relationship compatibility app with vibrant and engaging UI.",
    },
    {
      id: 6,
      img: "/projects-ui/notes app ui.png",
      border: "#FFFFFF",
      url: "https://www.figma.com/community/file/1533804652686700707/notes-app",
      title: "notes app ui",
      Description:
        "Minimal note-taking app focused on productivity and clarity.",
    },
    {
      id: 7,
      img: "/projects-ui/daily planner ui.png",
      border: "#3269FF",
      url: "https://www.figma.com/community/file/1546047848577768114/daily-planner-app",
      title: "daily planner app ui (To-do)",
      Description:
        "Task management app with clean dashboard and intuitive workflow.",
    },
    {
      id: 8,
      img: "/projects-ui/travel ui.png",
      border: "#FA7436",
      url: "https://www.figma.com/community/file/1497893158448604474/travel-website-landing-page-ui-ux-case-study-and-design",
      title: "travel & tour landing page",
      Description:
        "Modern travel landing page designed for high visual engagement.",
    },
    {
      id: 9,
      img: "/projects-ui/tvk app ui.png",
      border: "#F6CA36",
      url: "https://www.figma.com/community/file/1560913926321757212/my-tvk-app-redesign",
      title: "tvk app ui (Redesign)",
      Description:
        "Redesigned mobile app with improved usability and modern UI system.",
    },
    {
      id: 10,
      img: "/projects-ui/movie app ui.png",
      border: "#7F28C8",
      url: "https://www.figma.com/community/file/1467196040256448930/show-buddy",
      title: "movie details app ui",
      Description:
        "Movie discovery app UI with clean layout and rich content sections.",
    },
  ];
  return (
    <div className="w-full py-4">
      {/* MOBILE VIEW */}
      <div className="flex gap-4 overflow-x-auto px-6 md:hidden scrollbar-hide">
        {projects.slice(0, visibleCount).map((project) => (
          <div key={project.id} className="min-w-[256px] h-44">
            <div
              onClick={() => {
                if (activeId === project.id) {
                  router.push(project.url);
                } else {
                  setActiveId(project.id);
                }
              }}
              className="relative overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Project Image */}
              <Image
                width={256}
                height={176}
                src={project.img}
                alt="project"
                style={{ borderColor: project.border }}
                className="w-full h-44 object-cover border-l-4 border-b-4"
              />

              {/* Tap Reveal Overlay */}
              <div
                className={`absolute inset-0 bg-black/60 text-white flex flex-col justify-end p-4 transition-transform duration-500 ease-in-out ${
                  activeId === project.id ? "translate-y-0" : "translate-y-full"
                } `}
              >
                <h3 className="text-base font-bold">{project.title}</h3>
                <p className="text-xs mt-1 opacity-80">{project.Description}</p>

                {/* Indication Section */}
                {activeId === project.id && (
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs opacity-70 animate-pulse">
                      Tap again to view
                    </span>

                    <div className="w-8 h-8 rounded-full bg-[#F2E961] border-2 border-black flex items-center justify-center animate-bounce text-black font-bold">
                      →
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {visibleCount < projects.length && (
          <button
            onClick={() => setVisibleCount(projects.length)}
            className="min-w-32 h-32 rounded-full bg-[#F2E961] border-l-4 border-t-4 border-black text-black font-medium mt-4 space"
          >
            See More →
          </button>
        )}
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:grid grid-cols-3 gap-6 px-20">
        {projects.slice(0, visibleCount).map((project) => (
          <div key={project.id} className="w-full">
            <a href={project.url} target="_blank">
              <div className="relative group overflow-hidden rounded-lg">
                {/* Project Image */}
                <Image
                  width={350}
                  height={250}
                  src={project.img}
                  alt="project"
                  style={{ borderColor: project.border }}
                  className="w-full h-60 object-cover border-l-4 border-b-4 transition duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-end p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out ">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm mt-2 opacity-80">
                    {project.Description}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* DESKTOP SEE MORE BUTTON */}
      {visibleCount < projects.length && (
        <div className="hidden md:flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount(projects.length)}
            className="w-40 h-12 rounded-full bg-[#F2E961] border-l-4 border-t-4 border-black text-black space font-medium text-lg hover:scale-105 transition"
          >
            See More →
          </button>
        </div>
      )}
    </div>
  );
}
