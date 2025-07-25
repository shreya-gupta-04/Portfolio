"use client"
import Aboutme from "./components/Aboutme";
import { DirectionAwareHoverDemo } from "./components/direction";
import { Floating } from "./components/Floating";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import { InfiniteMovingCardsDemo } from "./components/movingcards";
import { NavbarDemo } from "./components/Navbar"
import { ShootingStarsAndStarsBackgroundDemo } from "./components/Shooting";
import {TimelineDemo} from "./components/Timeline-exp"
import { DirectionAwareHover } from "./components/ui/direction-aware-hover";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { StarsBackground } from "./components/ui/stars";
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <StarsBackground/> 
      <ShootingStarsAndStarsBackgroundDemo/>   
  <Floating/>     
  <NavbarDemo />              
  <Hero/>
  <Aboutme/>
  <DirectionAwareHoverDemo/>
  <TimelineDemo /> 
  <InfiniteMovingCardsDemo/>   
  <Footer/>
    </div>
  );
}
