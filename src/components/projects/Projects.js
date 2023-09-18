import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
            <ProjectsCard
              title="Portfolio Website"
              category="Front-End Web Development"
              image={workImgSeven}
            />
          <a
            href="https://semicolon.nitsri.ac.in/"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectsCard
              title="Semicolon Club Website"
              category="Front-End Web Development"
              image={workImgOne}
            />
          </a>
          <a
            href="https://github.com/amansinghbisht029/Car-Animation"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectsCard
              title="Moving Car Animation"
              category="Front-End Web Development"
              image={workImgEight}
            />
          </a>
          <a
            href="https://github.com/amansinghbisht029/Job-Portal-Bisht"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectsCard
              title="Job Portal Application"
              category="Back-End Web Development"
              image={workImgFive}
            />
          </a>
        </div>
        <div className="px-6">
          <a
            href="https://bishtbazaar.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectsCard
              title="Bazaar E-Commerce"
              category="Full-Stack Web Development"
              image={workImgTwo}
            />
          </a>
          <a
            href="https://github.com/amansinghbisht029/mrs-bisht"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectsCard
              title="Movie Recommender"
              category="Machine Learning"
              image={workImgFour}
            />
          </a>
          <a
            href="https://amazon-clone-one-navy.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectsCard
              title="Amazon Clone"
              category="Full-Stack Web Development"
              image={workImgThree}
            />
          </a>
          <a
            href="https://github.com/amansinghbisht029/Gaming-Console"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectsCard
              title="Gaming Console"
              category="C Programming"
              image={workImgSix}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
