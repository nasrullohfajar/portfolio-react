import React, { useRef } from "react";
import "./App.css";
import StarsBackground from "./component/background/StarsBackground";
import ShootingStars from "./component/background/ShootingStars";
import Hero from "./component/layout/Hero";
import About from "./component/layout/About";
import Project from "./component/layout/Project";
import Skill from "./component/layout/Skill";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);

  console.log(aboutRef);

  return (
    <>
      <StarsBackground starDensity={0.00005} />
      <ShootingStars />

      <Hero
        scrollToAbout={() =>
          aboutRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <div className="flex flex-col gap-56">
        <About ref={aboutRef} />
        <Project />
        <Skill />
      </div>
    </>
  );
}

export default App;
