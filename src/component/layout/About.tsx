import React, { forwardRef } from "react";
import backgroundImage from "../../assets/img/photo.png";

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="flex items-center justify-center gap-x-60 pt-20 lg:pt-32"
    >
      <div
        className="hidden lg:block w-1/3 h-[500px]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="lg:w-2/3 text-left">
        <h1 className="text-center lg:text-left text-4xl lg:text-6xl font-bold mb-10">
          About Me
        </h1>
        <div className="flex flex-col text-md lg:text-2xl gap-y-5">
          <p>
            I am a passionate Front-End Developer who loves paying attention to
            the details and creating web experiences that are both engaging and
            easy to use. I have developed my skills in HTML, CSS, JavaScript,
            and modern frameworks like React.js. I am always looking to learn
            more and keep up with the latest trends in web development.
          </p>
          <p>
            My interest in web development grew from a fascination with how
            design and technology come together. I believe that code should not
            only function well but also make the user experience enjoyable.
          </p>
          <p>
            When I'm not at the computer, I'm usually reading, hanging out with
            my cats, or playing games.
          </p>
        </div>
      </div>
    </div>
  );
});

export default About;
