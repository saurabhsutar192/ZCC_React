import React from "react";
// import {useSpring , animated, config} from "react-spring";
import Swipe from "./SwipeIcon"

function Regsiter(prop) {
  return (
    <div className="page regPage">
      <div className="spacer"></div>
    {/* <iframe className="Form" src="https://docs.google.com/forms/d/e/1FAIpQLSd8ICTomqf4rTQqEtzebWtWkkf3W_4fd3joFAPaSmGFPdsjcA/viewform?embedded=true"  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
    <iframe title="x" className="Form" src="https://docs.google.com/forms/d/e/1FAIpQLSeguxmNP59BW-2t8YIL6i_pBVl38jLAD_ig5GBcudoNsdJxCA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    <Swipe class="indIcon" />
    </div>
  );
}

export default Regsiter;



{/* <div className="page regPage">
      <div className="spacer"></div>
      <animated.div style={prop.style} className="card regCard">
        <div className="mainTitle">Register</div>
        <form>
          <input type="text" placeholder="NAME" className="userInput" />
          <input type="tel" placeholder="PHONE NO" min="10" max="10" className="userInput" />
          <input type="email" placeholder="E-MAIL" className="userInput" />
          <input type="submit" onClick={()=>{
           
           
          let nameField=document.querySelectorAll(".userInput")
          for(let i=0;i<nameField.length;++i){
          nameField[i].value=""
          }

            alert("Details Registered!")
                    
            }} className="regBtn" value="REGISTER" />
        </form>
      </animated.div>
    </div> */}