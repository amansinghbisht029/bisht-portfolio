import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";
import { AiOutlineBug } from "react-icons/ai";
import { TiMessageTyping } from "react-icons/ti";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="15+ Awards Won" />
      <FunFactCard icon={<VscGraphLine />} des="20+ Finished Projects" />
      <FunFactCard icon={<AiOutlineBug />} des="100+ Hours Of Coding" />
      <FunFactCard icon={<TiMessageTyping />} des="100+ WPM Typing Speed" />
    </div>
  );
};

export default FunFact;
