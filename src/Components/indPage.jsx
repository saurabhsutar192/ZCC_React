import React, {useState} from "react";
import Swipe from "./SwipeIcon";
import {useSpring , animated, config} from "react-spring";
import LongBadge from "./longBadge";
import Gallery from "./gallery"
import artGall from "./ArtContent"

function IndPage(prop) {

// let indAnim=useSpring({
//   from:{
//     opacity:0,
//     transform:'scaleX(0)'
//   },
//   opacity:1,transform:'scaleX(1)',
//   config:config.gentle
  
// })
// let [content,setContent]=useState()
// let [navColor,setNavColor]=useState("#3d3d3d")


let indCardAnim=useSpring({
  from:{
    opacity: 0,
    transform: 'scaleX(0)' 
  },
  to:{
    opacity:1,
    transform:'scaleX(1)' ,
  }
})

let indImgAnim=useSpring({
  from:{
    opacity:0,
    transform:'scale(0)'
    
  },
  opacity:1,transform:'scale(1)',
  delay:500,
  config:config.gentle
})

let indTextAnim=useSpring({
  from:{
    opacity:0,
    transform:'translateX(200%)'
  },
  opacity:1,transform:'translateX(0)',
  delay:300

})


function displayGall(){
  return <Gallery
          isArt={true}
          array={artGall}
          class=" artGall scroll "/>
}

function displayLongBadge(arr) {
  return <LongBadge 
          key={arr.id}
          desc={arr.desc}
          img={arr.img}/>
  
}


// function contentDecider(){
//   if(prop.isArt){
//     setContent(<h1>HI</h1>)
//   }
//   else{
//     setContent(prop.array.map(displayLongBadge))
    
//   }
//   return content
// }

// console.log(contentDecider())

  return (
    <div dir="rtl" className="page indPage">
      <div className="spacer"></div>
      <animated.div style={indCardAnim} className={"card indCard " + prop.cardClass}>
        <div className="indTitle">
        <animated.div style={indTextAnim} className={"mainTitle " + prop.titleClass}>{prop.title}</animated.div>
        
        <animated.div style={indTextAnim} className="indSubtitle">{prop.subtitle}</animated.div>
        </div>
        <div  className={"indContent scroll " + prop.contentClass} dir="ltr">

       {/* {
         console.log(prop.isArt)} */}
       { prop.isArt ? displayGall() : prop.array.map(displayLongBadge)
        
      }
       
        </div>
        <div  className={"indImg " + prop.imgClass}>
          <animated.img style={indImgAnim} src={"imgs/" + prop.img} alt="sss" />
        </div>

         
      </animated.div>

      <Swipe class="indIcon" />
    </div>
  );
}

export default IndPage;
