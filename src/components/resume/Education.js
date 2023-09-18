import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Technical Team Lead"
          subTitle="Semicolon Coding Club"
          des="Organized webinars, contests, events, activities, hackathons
          and developed Semicolon Website."
        />
        <ResumeCard
          badge="Jan 2023 - Feb 2023"
          title="Intern Trainee"
          subTitle="Bharat Electronics Ltd."
          des="Worked on IACCS‑VCCS and MFRS Projects. Also tested 24 Port Non‑PoE L2/L3 Switch."
        />
        <ResumeCard
          badge="Mar 2022 - Jul 2022"
          title="Advance Physics Expert"
          subTitle="Chegg India"
          des="Solved 100+ problems and maintained CF score 85%+."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2020 - Present"
          title="NIT Srinagar"
          subTitle="Srinagar, J&K"
          des="Pursuing my Bachelors in Electronics and Communication Engineering with a current cgpa of 7.776"
        />
        <ResumeCard
          badge="2019 Passout"
          title="DAV Fertilizer Public School"
          subTitle="Babrala, UP"
          des="Higher Secondary: 92.4%. Scored 95 marks in Physics, Chemistry & Maths and 96 marks in CS."
        />
        <ResumeCard
          badge="2017 Passout"
          title="Tata Chem DAV Public School"
          subTitle="Babrala, UP"
          des="Secondary School (CBSE Board) : 10 CGPA"
        />
      </div>
    </div>
  );
};

export default Education;
