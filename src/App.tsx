import "./App.css";
import StarsBackground from "./component/background/StarsBackground";
import ShootingStars from "./component/background/ShootingStars";
import Hero from "./component/Hero";

function App() {
  return (
    <>
      <StarsBackground starDensity={0.00005} />

      <ShootingStars />
      <Hero />
    </>
  );
}

export default App;
