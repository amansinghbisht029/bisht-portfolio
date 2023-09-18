import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Namaste🙏! Bisht here🤖</h2>
          <p className="text-base leading-6 ">
            With expertise in Full-Stack Web Development, a passion for Machine
            Learning, and strong problem-solving skills, I'm eager to contribute
            to your endeavors.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            22
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">College:</span>
            NIT Srinagar, J&K
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Intern/Full Time:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Uttarakhand, India
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
