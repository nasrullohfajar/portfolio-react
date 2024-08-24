import "./App.css";
import StarsBackground from "./component/background/StarsBackground";
import ShootingStars from "./component/background/ShootingStars";
import Hero from "./component/layout/Hero";
import About from "./component/layout/About";

function App() {
  return (
    <>
      <StarsBackground starDensity={0.00005} />
      <ShootingStars />

      <Hero />
      <About />
    </>
  );
}

export default App;
