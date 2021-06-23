import React from "react";
import contactArr from "./contactArray";
import {useSpring , animated, config} from "react-spring";
import Swipe from "./SwipeIcon"



function displayContacts(arr) {
  return (
    <div className={"conts " + arr.class}>
      <div className="SnN">
          <div className="section">{arr.section}</div>
      
            <div className="name">{arr.name}</div>
       </div>
       <div className="pn">{arr.pn}</div>
      
    </div>
  );
}

function Contact(prop) {
  return (
    <div className="page conPage">
      <div className="spacer"></div>
      <animated.div style={prop.style} className="card conCard  ">
        <div className="mainTitle">Contact</div>
        <div className="contacts">{contactArr.map(displayContacts)}</div>
      </animated.div>
      <Swipe class="indIcon" />
    </div>
  );
}

export default Contact;
