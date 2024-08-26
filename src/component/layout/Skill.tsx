import MovingCard from "../ui/MovingCard";
import imgCss from "../../assets/icon/css.png";
import imgHtml from "../../assets/icon/html.png";
import imgJs from "../../assets/icon/js.png";
import imgReact from "../../assets/icon/react.png";
import imgVite from "../../assets/icon/vite.png";
import imgTailwind from "../../assets/icon/tailwind.png";

const testimonials = [
  {
    icon: imgCss,
    name: "CSS",
  },
  {
    icon: imgHtml,
    name: "HTML",
  },
  {
    icon: imgJs,
    name: "Javascript",
  },
  {
    icon: imgReact,
    name: "React",
  },
  {
    icon: imgVite,
    name: "Vite",
  },
  {
    icon: imgTailwind,
    name: "Tailwind",
  },
];

const Skill = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl lg:text-6xl font-bold mb-12 lg:mb-32">
        Tech Stack
      </h1>
      <div className="flex items-center justify-center">
        <MovingCard items={testimonials} direction="right" speed="slow" />
      </div>
    </div>
  );
};

export default Skill;
