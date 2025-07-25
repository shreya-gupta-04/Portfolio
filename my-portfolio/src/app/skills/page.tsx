"use client";

import React from "react";
import { InfiniteMovingCardsDemo } from "../components/movingcards";
import { NavbarDemo } from "../components/Navbar";
import { Floating } from "../components/Floating";
import { StarsBackground } from "../components/ui/stars";
import { ShootingStarsAndStarsBackgroundDemo } from "../components/Shooting";

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Floating background elements */}
      <StarsBackground/>
      <ShootingStarsAndStarsBackgroundDemo/>
      <Floating />
      {/* Main content with navbar */}
      <div className="relative z-10">
        <NavbarDemo />
        <div className="flex items-center justify-center pt-20">
          <InfiniteMovingCardsDemo />
        </div>
      </div>
    </div>
  );
}