import React from 'react'
import fig1 from "./Pics/imgp1.png";
import fig2 from "./Pics/imgp2.jpg";
import fig3 from "./Pics/imgp3.jpg";
import fig4 from "./Pics/imgp4.jpg";
import fig5 from "./Pics/imgp5.jpg";
import fig6 from "./Pics/imgp6.jpg";
import fig7 from "./Pics/imgp7.jpg";
import fig8 from "./Pics/imgp8.jpg";
import fig9 from "./Pics/imgp9.jpg";
import Title from "../home/Title";
const Hobbies = () => {
  return (
    <div className="w-full">
      <Title title="List" subTitle="Of Hobbies" />
      <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-10">
        <div className="w-full lgl:w-1/2 ">
          <img
            src={fig1}
            style={{ width: "100%" }}
            alt=""
            class="hover:scale-125 transition duration-500 cursor-pointer"
          />
          <br></br>
          <img
            src={fig2}
            style={{ width: "100%" }}
            alt=""
            class="hover:scale-125 transition duration-500 cursor-pointer"
          />
          <br></br>
          <img
            src={fig3}
            style={{ width: "100%" }}
            alt=""
            class="hover:scale-125 transition duration-500 cursor-pointer"
          />
        </div>
        <div className="w-full lgl:w-1/2">
          <img
            src={fig4}
            style={{ width: "100%" }}
            alt=""
            class="hover:scale-125 transition duration-500 cursor-pointer"
          />
          <br></br>
          <img
            src={fig5}
            style={{ width: "100%" }}
            alt=""
            class="hover:scale-125 transition duration-500 cursor-pointer"
          />
          <br></br>
          <img
            src={fig6}
            style={{ width: "100%" }}
            alt=""
            class="hover:scale-125 transition duration-500 cursor-pointer"
          />
        </div>
        <div className="w-full lgl:w-1/2">
          <img
            src={fig7}
            style={{ width: "100%" }}
            alt=""
            class="hover:scale-125 transition duration-500 cursor-pointer"
          />
          <br></br>
          <img
            src={fig8}
            style={{ width: "100%" }}
            alt=""
            class="hover:scale-125 transition duration-500 cursor-pointer"
          />
          <br></br>
          <img
            src={fig9}
            style={{ width: "100%" }}
            alt=""
            class="hover:scale-125 transition duration-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Hobbies