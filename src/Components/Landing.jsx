import React from "react";
// import Swipe from "./SwipeIcon";
import {useSpring , animated, config} from "react-spring";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";






function Landing() {

//animations


//MainImg
    let imgAnimLandscape=useSpring(
    {from:{opacity:0, transform:'scale(3) translate(0%,-5%)'},
      to:[{opacity:1,transform:'scale(1) translate(60%,-5%)'},{marginLeft:0,transform:'scale(1) translate(0,-5%)'}],
     

    })

    let imgAnimPortrait=useSpring(
      {from:{opacity:0, transform:'scale(3)'},
      to:{opacity:1,transform:'scale(1)'},
      config:config.gentle
    });



//Zcc text
    let textAnimLandscape=useSpring(
      {from:{opacity:0,transform:'translate(-10%)'},
      to:{opacity:1,transform:'translate(0%)'},
      delay:750,
      
    })

    let textAnimPortrait=useSpring(
      {from:{opacity:0},
      to:{opacity:1},
      config:{duration:1000}
    })

//swipe Icon



// let swipeAnim = useSpring(
//   {
  
//   from:{opacity:0,transform:'translateY(15%)'},
//   to:[{opacity:1,transform:'translateY(-15%)'},{transform:'translateY(0%)'},{transform:'translateY(-15%)'},{transform:'translateY(0%)'},{transform:'translateY(-15%)'},{transform:'translateY(0%)'}],
//   delay:1000,
//   config:{duration:200}


// });




  function animDecider(){
    if(window.innerWidth>window.innerHeight)//landscape
    {
     
      return `Landscape`;
      
    }
    else//portrait
    {
      
      return `Portrait`;
    }
  }

 


  return (
    <div className="page lPage">

      <div  className="landing">

        <div className="InT">
          <div  className="image">
            <animated.img style={eval(`imgAnim${animDecider()}`)} src="/imgs/Landing/ZCCillustration2.png" />
          </div>
            <animated.div style={eval(`textAnim${animDecider()}`)} dir="rtl" className="title">
          
                <span className="zeal">ZEAL</span>
                <span className="cultural">CULTURAL</span>
                <span className="centre">CENTRE</span>
              <div className="ldButtons">
                <a href="/Register">
                  <div className="reg-btn">REGISTER</div>
                </a>
                <a href="/Intro">
                  <div className="int-btn">EXPLORE</div>
                </a>
              </div>


            </animated.div>
        </div>
        {/* <Swipe style={swipeAnim} class="iconDiv" /> */}
     </div>
      
      
    </div>
    
    
  );
}

export default Landing;
