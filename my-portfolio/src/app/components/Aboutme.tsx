"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Aboutme() {
  const [showMore, setShowMore] = useState(false);

 const bulletSections = [
  {
    title: "🔹 Web Development",
    points: [
      "Skilled in React.js, Next.js, Node.js, and RESTful APIs.",
      "Real-time apps with Socket.io, JWT auth, and TailwindCSS.",
    ],
  },
  {
    title: "🔹 AI & System Design",
    points: [
      "Built scalable AI platforms like JobGenix and RideX.",
      "Used Google Gemini API, Redis, Docker, and Cloudinary.",
    ],
  },
  {
    title: "🔹 Leadership & Community",
    points: [
      "Led 3+ national hackathons like SprintHacks 3.0, IEEE.",
      "Mentored juniors through coding challenges and events.",
    ],
  },
  {
    title: "🔹 Certifications",
    points: [
      "SQL for Data Analysis – Linkedin",
      "Introduction to Cybersecurity – Cisco",
      "Python Programming Fundamentals – Cisco",
      "Javascript – Linkedin",
      "Power BI, etc",
    ],
  },
];

  return (
    <div className="relative w-full min-h-screen text-xl text-white py-16 px-6 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-5xl md:text-6xl mb-10 text-center pb-5">About Me</h2>

      {/* Card and Image Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl w-full">
        
        {/* Info Card */}
        <div className="w-full lg:w-1/2 h-full bg-gradient-to-br from-[#3f1f3f]/30 via-[#2e2e2e]/30 to-[#1f1f1f]/30 border border-[#5a5a5a] rounded-xl p-8 backdrop-blur-md bg-opacity-10 transition-all duration-300 transform hover:scale-[1.02]">
          <h3 className="text-xl lg:text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Hello, I'm Shreya Gupta
          </h3>
          <p className="text-sm-bold font-medium text-neutral-100">
            I'm a passionate Full Stack Web Developer with a problem-solving mindset and a knack for turning ideas into sleek, scalable, and user-focused digital solutions. My work bridges design precision with backend performance, powered by modern technologies like React, Node.js, MongoDB, and Tailwind CSS.
          </p>

          {/* Toggle Bullet Sections */}
          <div>
            {!showMore ? (
              <button
                onClick={() => setShowMore(true)}
                className="mt-4 text-sm text-pink-400 underline hover:text-pink-300 transition"
              >
                Read more
              </button>
            ) : (
              <>
                <div className="mt-4 space-y-4 text-sm text-neutral-100">
                  {bulletSections.map((section, i) => (
                    <div key={i}>
                      <p className="font-semibold text-white">{section.title}</p>
                      <ul className="list-disc list-inside pl-4 space-y-1 text-neutral-300">
                        {section.points.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setShowMore(false)}
                  className="mt-4 text-sm text-pink-400 underline hover:text-pink-300 transition block"
                >
                  Read less
                </button>
              </>
            )}
          </div>
        </div>

        {/* Circular Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-2 border-pink-500">
            <Image
              src="/assets/image copy 2.png"
              alt="Shreya Gupta"
              width={288}
              height={288}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
