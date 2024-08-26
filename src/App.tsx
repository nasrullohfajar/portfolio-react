import { useRef } from "react";
import "./App.css";
import StarsBackground from "./component/background/StarsBackground";
import ShootingStars from "./component/background/ShootingStars";
import Hero from "./component/layout/Hero";
import About from "./component/layout/About";
import Project from "./component/layout/Project";
import Skill from "./component/layout/Skill";
import Contact from "./component/layout/Contact";
import Footer from "./component/layout/Footer";

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

      <div className="flex flex-col gap-20 lg:gap-48">
        <About ref={aboutRef} />
        <Project />
        <Skill />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
