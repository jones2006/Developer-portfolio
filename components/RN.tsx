"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RN() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeId, setActiveId] = useState<number | null>(null);
  const router = useRouter();
  // const projects = [
  //   {
  //     id: 1,
  //     img: "/project-rn/love flame app.png",
  //     border: "#1E1E1E",
  //     url: "https://github.com/jones2006/Flames-app-mobile-app-",
  //     title: "love flame app",
  //     Description:
  //       "",
  //   },
  //   {
  //     id: 2,
  //     img: "/project-rn/weather app.png",
  //     border: "#A459FF",
  //     url: "https://github.com/jones2006/weather-app",
  //     title: "weather app",
  //     Description:
  //       "",
  //   },
  //   {
  //     id: 3,
  //     img: "/project-rn/multi-tools app.png",
  //     border: "#FFFFFF",
  //     url: "https://github.com/jones2006/Multi-tool_App-",
  //     title: "multi-tools app",
  //     Description:
  //       "",
  //   },
  //   {
  //     id: 4,
  //     img: "/project-rn/signup page.png",
  //     border: "#1E1E1E",
  //     url: "https://github.com/jones2006/login-signup-page-mobile-App-",
  //     title: "signup page",
  //     Description:
  //       "",
  //   },
  //   {
  //     id: 5,
  //     img: "/project-rn/credit app.png",
  //     border: "#455A64",
  //     url: "https://github.com/jones2006/Credit-management-app",
  //     title: "credit management app (for students)",
  //     Description:
  //       "This is my college mini project",
  //   },
  //   {
  //     id: 6,
  //     img: "/project-rn/Ai app.png",
  //     border: "#3269FF",
  //     url: "https://github.com/jones2006/Ai-app",
  //     title: "Ai app",
  //     Description:
  //       "This is my one of the internshala assignment to shortlist app",
  //   },
  //   {
  //     id: 7,
  //     img: "/project-rn/daily planner app.png",
  //     border: "#A459FF",
  //     url: "https://github.com/jones2006/Daily-planner-app",
  //     title: "daily planner app",
  //     Description:
  //       "",
  //   },
  //   {
  //     id: 8,
  //     img: "/project-rn/movie app.png",
  //     border: "#FFFFFF",
  //     url: "https://github.com/jones2006/show-buddy--",
  //     title: "movie app",
  //     Description:
  //       "",
  //   },
  // ];

  const projects = [
    {
      id: 1,
      img: "/project-rn/love flame app.webp",
      border: "#1E1E1E",
      url: "https://github.com/jones2006/Flames-app-mobile-app-",
      title: "love flame app",
      Description:
        "Fun relationship compatibility app built with interactive UI and smooth animations.",
    },
    {
      id: 2,
      img: "/project-rn/weather app.webp",
      border: "#A459FF",
      url: "https://github.com/jones2006/weather-app",
      title: "weather app",
      Description:
        "Real-time weather application with API integration and dynamic UI updates.",
    },
    {
      id: 3,
      img: "/project-rn/multi-tools app.webp",
      border: "#FFFFFF",
      url: "https://github.com/jones2006/Multi-tool_App-",
      title: "multi-tools app",
      Description:
        "Utility app combining multiple everyday tools into one clean mobile interface.",
    },
    {
      id: 4,
      img: "/project-rn/signup page.webp",
      border: "#1E1E1E",
      url: "https://github.com/jones2006/login-signup-page-mobile-App-",
      title: "signup page",
      Description:
        "Modern authentication UI with login and signup flow implementation.",
    },
    {
      id: 5,
      img: "/project-rn/credit app.webp",
      border: "#455A64",
      url: "https://github.com/jones2006/Credit-management-app",
      title: "credit management app (for students)",
      Description:
        "College mini project focused on tracking and managing student credit scores.",
    },
    {
      id: 6,
      img: "/project-rn/Ai app.webp",
      border: "#3269FF",
      url: "https://github.com/jones2006/Ai-app",
      title: "Ai app",
      Description:
        "AI-powered mobile app built as an internship assignment with smart interaction features.",
    },
    {
      id: 7,
      img: "/project-rn/daily planner app.webp",
      border: "#A459FF",
      url: "https://github.com/jones2006/Daily-planner-app",
      title: "daily planner app",
      Description:
        "Task and schedule management app designed for productivity and simplicity.",
    },
    {
      id: 8,
      img: "/project-rn/movie app.webp",
      border: "#FFFFFF",
      url: "https://github.com/jones2006/show-buddy--",
      title: "movie app",
      Description:
        "Movie browsing app with API data fetching and detailed content screens.",
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
            className="w-40 h-12 rounded-full bg-[#F2E961] border-l-4 border-t-4 border-black text-black space font-medium text-base hover:scale-105 transition"
          >
            See More →
          </button>
        </div>
      )}
    </div>
  );
}
