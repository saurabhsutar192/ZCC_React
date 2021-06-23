import React, { useState } from "react";
import {useSpring , animated, config} from "react-spring";


function Badge(prop) {

 
  

  
  return (
    <animated.a style={prop.style} href={prop.link}>
      <div className={"badge" + " " + prop.className}>
        <div className="outerCircle">
          <div className="innerCircle">
             <img className={"badge-img "+prop.imgClass} src={"/imgs/" + prop.img} /> 
          </div>
        </div>
        <div className="textArea">
          <span className="badge-text mtext">{prop.text}</span>
        </div>
      </div>
    </animated.a>
  );
}

export default Badge;
