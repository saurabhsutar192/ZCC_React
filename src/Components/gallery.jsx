
import React,{useState} from "react";
import {useSpring , animated, config} from "react-spring";
// import GalleryArr from "./photos"
import { MdClose } from "react-icons/md";
import Swipe from "./SwipeIcon"









function Gallery(prop){


    let dropInAnim=useSpring({
        from:{
          opacity:0,
          transform:'scale(0.8)'
        },
        opacity:1,transform:'scale(1)',
        config:{duration:100},
        
        
      })

    // let [color,setColor]=useState("white")
    let [img,setImg]=useState(false);
    let [imgLoc,setImgLoc]=useState('')

//    prop.navColor(color)

//     if(img==false){

        

//         setTimeout(()=> {

  
//          let number= Math.floor(Math.random()*(GalleryArr.length));

        
       
//         if(number===picNo){
//          setPicNo(number+1)
        
//         //  console.log(`same executed`)
//         }
//         else
//         {
//             setPicNo(number)
            
//             // console.log(picNo)
//         }
            
      
//     }, 5000)

//   }

    

//     function load(){

//         for(let i=0;i<10;++i){
//      document.querySelectorAll(".i1")[i].classList.add("justAnimate")
//         }
     
//      setTimeout(()=>{
//         for(let i=0;i<10;++i){
//             document.querySelectorAll(".i1")[i].classList.remove("justAnimate")
//                }
//      },3000)
       
        
//     }

    
    
    function click(event){
        
        // console.log(event.target.src)
        setImg(!img)
        setImgLoc(event.target.src)
        // console.log(img)
        // console.log(imgLoc)


    }

    function imgDiv(arr){
        return(<animated.img style={dropInAnim} key={arr.id} onClick={(event)=>{click(event)}} className="gImgs" src={arr.loc} alt="" />)
    }

    
    // function goBack(){
    //     return <Swipe class="indIcon galIcon" />
    // }


  

    return (
                <div className={"gallery "+prop.class}>
               {
                   prop.array.map(imgDiv)
                   
               }
                <div className={`imageViewer ${(img)?"show": ""}`}>
                    <img className="viewedImg" src={imgLoc} alt=""/>
                    <div className="cross" onClick={()=>{setImg(!img)} } ><MdClose /></div>
                </div>
                {(prop.isArt)? null : <Swipe class="indIcon galIcon" />}
                
                </div>
            )
}

// function InvertNav(){
//     let [navColor,setNavColor]=useState(false);
//     console.log("loaded")
//     return navColor;
// }


export default Gallery;  






