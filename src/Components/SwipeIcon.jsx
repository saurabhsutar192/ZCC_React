import React from "react";
import {useSpring , animated, config} from "react-spring";
import { useHistory } from "react-router-dom";

function Swipe(prop) {


  let history=useHistory();
  return (
    <animated.a href="/intro" className={"arrowIcon "+prop.class}>
      <img className="swipe" src="/imgs/icons/SWIPE DOWN.svg" alt="" />
    </animated.a>
  );
}

export default Swipe;
