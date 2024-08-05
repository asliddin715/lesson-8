"use client"
import { TypeAnimation } from "react-type-animation";
import AchievementsSection from "@/components/AchievementaSection";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="">
      <span className="text-red-800 text-blue-400 text-teal-600">
        Hello I am a{" "}
      </span>{" "}
      <TypeAnimation
        sequence={[
          "asliddin", 1000,
          "developer", 1000,
          "gamer", 1000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
      <AchievementsSection />
       <About/>
    </div>
  );
}
