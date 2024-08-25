import React, { useRef } from "react";
import "./App.css";
import StarsBackground from "./component/background/StarsBackground";
import ShootingStars from "./component/background/ShootingStars";
import Hero from "./component/layout/Hero";
import About from "./component/layout/About";
import Project from "./component/layout/Project";

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

      <About ref={aboutRef} />
      <Project />
    </>
  );
}

export default App;
