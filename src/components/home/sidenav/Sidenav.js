import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Blog Page</li>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">E-commerce</li>
        <li className="sidenavLi">Chatting Applications</li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">Backend Development</li>
        <li className="sidenavLi">Amazon Clone</li>
      </ul>
      <SidenavTitle title="C" subTitle="ertifications" />
      <ul>
        <li className="sidenavLi">
          The Web Developer Bootcamp 2023, by Colt Steele
        </li>
        <li className="sidenavLi">
          Mastering the System Design Interview, by Frank Kane
        </li>
        <li className="sidenavLi">
          Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023], by Kirill Eremenko.
        </li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+91 6396641560</li>
        <li className="sidenavLi">amansbpcme@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav