"use client";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";
import { Code, ExternalLink } from "lucide-react";
export function DirectionAwareHoverDemo() {
  const projects = [
    {
      imageUrl: "/assets/RideX.jpeg",
      title: "RideX",
      description:
        "A real-time ride booking system with live location tracking, driver-passenger assignment, and seamless booking experience. Built with React, Node.js, Socket.io, and Google Maps API, it supports real-time updates and scalable ride coordination.",
      codeLink: "https://github.com/shreya-gupta-04/RideX.git",
      externallink: "https://your-live-demo-link.com", 
    },
    {
      imageUrl: "/assets/JobGenix.jpeg",
      title: "JobGenix",
      description:
        "A job portal built with React, Node.js, and MongoDB featuring secure authentication, file uploads, and user dashboards. It includes an admin panel to manage job posts, applicants, and application status with search and filtering functionality.",
      codeLink: "https://github.com/shreya-gupta-04/JobGenix.git",
      externallink: "https://your-live-demo-link.com", // replace with actual link
    },
    {
      imageUrl: "/assets/Seon.jpeg",
      title: "Seon",
      description:
        "An intelligent chat app integrating Google Gemini API for smart replies and Redis for fast message caching. Optimized to handle over 1500 concurrent users with 20ms latency, it offers a seamless and interactive messaging experience.",
      codeLink: "https://github.com/shreya-gupta-04/Seon.git",
      externallink: "https://your-live-demo-link.com", // replace with actual link
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start gap-10 pt-10 pb-20">
      {/* Section Heading */}
      <h2 className="text-5xl md:text-6xl text-gray-300 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 px-2 md:px-4 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full bg-[#111] rounded-xl overflow-hidden shadow-md border border-white/10"
          >
            <DirectionAwareHover imageUrl={project.imageUrl}>
              {/* Action Icons */}
              <div className="flex items-center gap-2 text-white absolute bottom-4 left-4 z-40">
                {/* GitHub Link */}
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
                >
                  <Code className="w-5 h-5 text-white" />
                </a>

                {/* Live Demo Link */}
                {/* <a
                  href={project.externallink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a> */}
              </div>
            </DirectionAwareHover>

            {/* Project Text */}
            <div className="p-4 space-y-1">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}