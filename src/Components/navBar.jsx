import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import {useSpring , animated, config} from "react-spring";
//  import { InvertNav } from "./gallery"

function Navbar(prop) {

  let navAnim = useSpring({
    from:{opacity:0,transform:'translateY(-100%)'},
    to:{opacity:1,transform:'translateY(0%)'},
    delay:1000})


    function reverser(string){

      let array=string.split("")
      let reverseArray=array.reverse()
      let reverseString=reverseArray.join("")

      return reverseString

    }

 
  return (
    <animated.div style={(reverser(window.location.href).charAt(0)==="/"? navAnim :null) } className={"nDiv"}>

    <div  className={"navbar "}>
      <a href="/">
        <img className="logo" src="/imgs/NavBar/logo.svg" alt="ZCC"></img>
      </a>
    {console.log("nav rendered")}

      <div dir="rtl" onClick={()=>{
        let menuBtn= document.querySelector(".navText")

        menuBtn.classList.toggle("clicked")

        

      }} className="menu">
        <MenuIcon fontSize="large"/>
      </div>
      <ul className={"navText"}>
        <a href="/Register">
          <li style={{color:prop.color}} >REGISTER</li>
        </a>
        <a href="/Contact">
          <li style={{color:prop.color}} >CONTACT</li>
        </a>
        <a href="/Gallery">
          <li style={{color:prop.color}} >PHOTOS</li>
        </a>
        <a href="/AboutUs">
          <li style={{color:prop.color}} >ABOUT</li>
        </a>
        
      </ul>
      </div>
    </animated.div>
  );
}



export default React.memo(Navbar);
