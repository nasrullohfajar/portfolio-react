import ButtonAnimated from "../ui/ButtonAnimated";
import { HiDownload } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";

interface HeroProps {
  scrollToAbout: () => void;
}

const Hero = ({ scrollToAbout }: HeroProps) => {
  const download = () => {
    fetch("resume-nasrullohfajar.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume-nasrullohfajar.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="flex flex-col h-screen lg:items-start justify-center gap-10">
      <h2 className="text-lg lg:text-2xl">HELLO WORLD!</h2>

      <div className="lg:hidden text-3xl font-bold lg:text-left lg:text-7xl lg:leading-[70px]">
        <h1>
          I'm Nasrulloh Fajar Muharam a<span> </span>
          <span className="bg-gradient-to-r from-[#A685ED] to-[#72BDF7] bg-clip-text text-transparent">
            Front End Developer
          </span>
        </h1>
      </div>

      <div className="hidden lg:block text-4xl font-bold lg:text-left lg:text-7xl lg:leading-[70px]">
        <h1>I'm Nasrulloh Fajar Muharam</h1>
        <h1>
          <span>a </span>
          <span className="bg-gradient-to-r from-[#A685ED] to-[#72BDF7] bg-clip-text text-transparent">
            Front End Developer
          </span>
        </h1>
      </div>

      <h3>
        Transforming design vision into digital reality with a focus on detail
        and artistry
      </h3>

      <div className="flex flex-col lg:flex-row justify-center gap-5 mt-3">
        <ButtonAnimated
          title="See More About Me"
          icon={<FaPaperPlane />}
          iconPosition="right"
          handleClick={scrollToAbout}
        />
        <ButtonAnimated
          title="My Resume"
          icon={<HiDownload size={20} />}
          iconPosition="right"
          handleClick={download}
        />
      </div>
    </div>
  );
};

export default Hero;
