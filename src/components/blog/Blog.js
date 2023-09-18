import React from "react";
import Title from "../home/Title";
import {
  blogImgOne,
  blogImgTwo,
  blogImgThree,
  blogImgFour,
  blogImgFive,
  blogImgSix,
  blogImgSeven,
  blogImgEight
} from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Favourite" subTitle="Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <a
            href="https://dev.to/thevinitgupta/discover-bun-a-faster-modern-javascript-runtime-5fob"
            target="_blank"
            rel="noreferrer"
          >
            <BlogCard
              image={blogImgOne}
              title="September 10, 2023"
              subTitle="Discover Bun - A Faster, Modern JavaScript Runtime"
              category="JavaScript"
            />
          </a>
          <a
            href="https://towardsdev.com/microservice-roadmap-1171608f7516?source=rss----a648dc4ecb66---4"
            target="_blank"
            rel="noreferrer"
          >
            <BlogCard
              image={blogImgTwo}
              title="September 1, 2021"
              subTitle="Microservice Roadmap"
              category="Software Engineering"
            />
          </a>
          <a
            href="https://www.jointaro.com/blog/how-i-became-an-800k-engineer/"
            target="_blank"
            rel="noreferrer"
          >
            <BlogCard
              image={blogImgThree}
              title="September 12, 2023"
              subTitle="How I Became An $800K Meta Staff Engineer"
              category="Software Engineering"
            />
          </a>
          <a
            href="https://www.freecodecamp.org/news/fundamentals-of-finance-economics-for-businesses/"
            target="_blank"
            rel="noreferrer"
          >
            <BlogCard
              image={blogImgFour}
              title="September 12, 2023"
              subTitle="Fundamentals of Finance & Economics for Businesses"
              category="Finance"
            />
          </a>
        </div>
        <div className="px-6">
          <a
            href="https://www.freecodecamp.org/news/communication-design-patterns-for-backend-development/"
            target="_blank"
            rel="noreferrer"
          >
            <BlogCard
              image={blogImgFive}
              title="September 12, 2023"
              subTitle="Communication Design Patterns for Backend Development"
              category="Backend Development"
            />
          </a>
          <a
            href="https://www.developer.com/languages/automation-testing-tools/"
            target="_blank"
            rel="noreferrer"
          >
            <BlogCard
              image={blogImgSix}
              title="September 15, 2023"
              subTitle="3 Best Automation Testing Tools for 2023"
              category="Testing"
            />
          </a>
          <a
            href="https://uxplanet.org/design-systems-a-beginners-guide-be7c15dda12d"
            target="_blank"
            rel="noreferrer"
          >
            <BlogCard
              image={blogImgSeven}
              title="August 5, 2023"
              subTitle="Design Systems: A Beginner’s Guide"
              category="System Design"
            />
          </a>
          <a
            href="https://www.geeksforgeeks.org/top-10-algorithms-every-machine-learning-engineer-should-know/"
            target="_blank"
            rel="noreferrer"
          >
            <BlogCard
              image={blogImgEight}
              title="June 14, 2022"
              subTitle="Top 10 Algorithms every Machine Learning Engineer should know"
              category="Machine Learning"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
