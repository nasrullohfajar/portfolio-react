import React from "react";

function Hero() {
  return (
    <div className="flex flex-col h-screen items-start justify-center gap-10">
      <h2 className="text-2xl">HELLO WORLD!</h2>

      <div className="text-left text-7xl font-bold line leading-[70px]">
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
    </div>
  );
}

export default Hero;
