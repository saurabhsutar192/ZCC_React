import React from "react";
import Badge from "./badge";
import {useSpring , animated, config} from "react-spring";

function Intro() {

//animations


let introAnim=useSpring(
  {
    from:{opacity:0,transform:'scale(0)'},
    to:{opacity:1,transform:'scale(1)'},
    config:config.gentle
  }
)



  return (
    <div className="page Ipage">
      <div className="spacer"></div>
      <div  className="intro">

        
        <div  className="leftDiv">
        <Badge
        link="/Music"
        className="music"
        text="MUSIC"
        img="introPage/music.png"
        imgClass="badge-music"
        style={introAnim}
      />
      
        <Badge
        link="/Dance"
        className="dance"
        text="DANCE"
        img="introPage/dance.png"
        imgClass="badge-dance"
        style={introAnim}
        />{" "}</div>





      <Badge
        link="/Art"
        className="art"
        text="ART"
        img="introPage/art.png"
        imgClass="badge-art "
        style={introAnim}
      />







      <div  className="rightDiv">
      <Badge
        link="/Drama"
        className="drama"
        text="DRAMA"
        img="introPage/drama.png"
        imgClass="badge-drama"
        txtClass="badge-text"
        style={introAnim}
      />{" "}
      
      <Badge
        link="/Photo"
        className="photo"
        text="PHOTOGRAPHY"
        img="introPage/photo.png"
        imgClass="badge-photo"
        style={introAnim}

      />{" "}</div>
   </div>
    </div>
  );
}

export default Intro;
