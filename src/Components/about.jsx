import React from "react";
import {useSpring , animated, config} from "react-spring";
import Swipe from "./SwipeIcon"


function About(prop) {
  return (
    <div className="page aPage">
      <div className="spacer"></div>
      <animated.div style={prop.style} className="card aCard">
        <div className="mainTitle">About</div>
        <div className="owner">
          <div className="oImg">
            {/* <img src="imgs/saurabh.jpg" alt="" srcset="" /> */}
          </div>
          <div className="ownerDesc">
            DESIGNED & DEVELOPED BY

            <div className="NnN">
            <div className="name">SAURABH</div>
            <div className="pn oPN">9405480824</div></div>
          </div>
        </div>
      </animated.div>
      <Swipe class="indIcon" />
    </div>
  );
}

export default About;
