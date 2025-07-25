"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="min-screen h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-black/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-5xl md:text-6xl text-gray-300 mb-10 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
        Skills
      </h2>

      {/* Background track for the cards */}
      <div className="w-full max-w-7xl px-4 py-4 bg-neutral-700/30 rounded-xl shadow-md relative z-0">
        <InfiniteMovingCards items={testimonials} direction="right" speed="fast" />
      </div>
    </div>
  );
}

const testimonials = [
  {
    image:"/assets/html.png",
    label: "HTML",
  },
{
    image:"/assets/css-3.png",
    label: "CSS",
  },
  {
    image:"/assets/js.png",
    label: "Javascript",
  },

  {
    image:"/assets/typescript.png",
    label: "Typescript",
  },
  {
    image:"/assets/React.png",
    label: "React",
  },
  {
    image:"/assets/nextjs.png",
    label: "Next JS",
  },

  {
    image:"/assets/bootstrap.png",
    label: "Bootstrap",
  },
  {
    image:"/assets/Tailwind CSS.png",
    label: "Tailwind",
  },
  {
    image:"/assets/MongoDB.png",
    label: "MongoDB",
  },

  {
    image:"/assets/php.png",
    label: "PHP",
  },
  {
    image:"/assets/Apache.png",
    label: "Apache",
  },
  {
    image:"/assets/ngnix.png",
    label: "Nginx",
  },
  {
    image:"/assets/Material UI.png",
    label: "Material UI",
  },
  {
    image:"/assets/AWS.png",
    label: "AWS",
  },
  {
    image:"/assets/Postman.png",
    label: "Postman",
  },
  {
    image:"/assets/nodejs.png",
    label: "Node JS",
  },
  {
    image:"/assets/expressjs.png",
    label: "Express",
  },
  {
    image:"/assets/PostgresSQL.png",
    label: "Postgre SQL",
  },
  {
    image:"/assets/python.png",
    label: "Python",
  },
  {
    image:"/assets/cpp.png",
    label: "C++",
  },
  {
    image:"/assets/redux.png",
    label: "Redux",
  },
  {
    image:"/assets/Git.png",
    label: "Git",
  },
  {
    image:"/assets/GitHub.png",
    label: "Github",
  },
  {
    image:"/assets/api.png",
    label: "API",
  },
  {
    image:"/assets/Firebase.png",
    label: "Firebase",
  },
  {
    image:"/assets/MYSQL.png",
    label: "MySQL",
  },

];
