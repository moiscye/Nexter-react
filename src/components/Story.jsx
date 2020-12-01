import React from "react";

import story1 from "../img/story-1.jpeg";
import story2 from "../img/story-2.jpeg";

export default () => {
  return (
    <>
      <div className="story__pictures" id="story">
        <img
          src={story1}
          alt="Couple with a new house"
          className="story__img--1"
        />
        <img src={story2} alt="New house" className="story__img--2" />
      </div>

      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy customers</h3>
        <h2 className="heading-2 heading-2--dark mb-lg">
          &ldquo;The best decision of our lives &rdquo;
        </h2>
        <p className="story__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button className="btn">find your own home</button>
      </div>
    </>
  );
};
