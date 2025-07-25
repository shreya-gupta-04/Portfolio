"use client";
import React from "react";
import { ShootingStars } from "../components/ui/Shoot";
import { StarsBackground } from "../components/ui/stars";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <StarsBackground />
      <ShootingStars />
    </div>
  );
}
