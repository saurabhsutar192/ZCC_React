import React from "react";
import Badge from "./badge";
import Swipe from "./SwipeIcon";
import {useSpring , animated, config} from "react-spring";

function MusicIntro(prop) {


let musicBadgeAnim=useSpring({
  from:{
    opacity:0,
    transform:'scale(0)'
  },
  opacity:1,transform:'scale(1)',
  delay:100,
  config:config.gentle
})



  return (
    <div dir="rtl" className={`page MIPage`}>
      <div className="spacer"></div>
      <animated.div style={prop.style} className="card mCard">
          
        
        
          <div className=" mainTitle">Music</div>
        
           <div className="musicBadges">
             <Badge
            link="/recStudio"
            className="rec"
            text="RECORDING"
            img="Music/recStudio.png"
            imgClass="mixer"
            txtClass="badge-text mtext"
            style={musicBadgeAnim}
              />
             <Badge
            link="/jamStudio"
            className="jam"
            text="JAMMING"
            img="Music/jamStudio.png"
            imgClass="guitar"
            txtClass="badge-text mtext"
            style={musicBadgeAnim}
              />
          </div>
            <Swipe class="MISwipe" />
        </animated.div>
        
     
    </div>
  );
}

export default MusicIntro;
