import React from "react";
import { FaAppStoreIos, FaRobot } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Competitive Programming"
        subTitle="Actively participated in numerous coding competitions across various platforms, consistently achieving strong rankings."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Web Development"
        subTitle="Completed numerous MERN stack projects, demonstrating my proficiency in large-scale web application development."
      />
      <ServicesCard
        icons={<FaRobot />}
        title="Machine Learning"
        subTitle="Engaged in the fascinating journey of exploring machine learning algorithms."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="CS Fundamentals"
        subTitle="Solid foundation of knowledge in OS, DBMS, Computer Networks, and System Design."
      />
    </div>
  );
};

export default MyServices;
