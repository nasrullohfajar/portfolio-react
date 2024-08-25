import React from "react";
import ButtonAnimated from "../ui/ButtonAnimated";

const Contact = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-5xl font-bold mb-2">
        <h2 className="mb-2">Interested in bringing your ideas </h2>
        <div>
          <span> to life? </span>
          <span className="bg-gradient-to-r from-[#A685ED] to-[#72BDF7] bg-clip-text text-transparent mt-4">
            Let's make it happen!
          </span>
        </div>
        <h2></h2>
      </div>

      <p>Feel free to reach out if you're interested in working together</p>

      <div className="flex items-center justify-center mt-10 pb-40">
        <ButtonAnimated title="Contact Me Now" iconPosition="right" />
      </div>
    </div>
  );
};

export default Contact;
