
import React,{useState} from "react";
import {useSpring , animated, config} from "react-spring";
import GalleryArr from "./photos"
import { MdClose } from "react-icons/md";









function Gallery(prop){

    let [picNo,setPicNo]=useState('');
    let [img,setImg]=useState(false);
    let [imgLoc,setImgLoc]=useState('')

    if(img==false){

        

        setTimeout(()=> {

  
         let number= Math.floor(Math.random()*(GalleryArr.length));

        
       
        if(number===picNo){
         setPicNo(number+1)
        
        //  console.log(`same executed`)
        }
        else
        {
            setPicNo(number)
            
            // console.log(picNo)
        }
            
      
    }, 5000)

  }

    

    function load(){

        for(let i=0;i<10;++i){
     document.querySelectorAll(".i1")[i].classList.add("justAnimate")
        }
     
     setTimeout(()=>{
        for(let i=0;i<10;++i){
            document.querySelectorAll(".i1")[i].classList.remove("justAnimate")
               }
     },3000)
       
        
    }


    
    function click(event){
        
        console.log(event.target.src)
        setImg(!img)
        setImgLoc(event.target.src)
        console.log(img)
        console.log(imgLoc)


    }



    // function displayImage(event){

    //     function ImgCont(){
    //         return(<div className="currentDiv"><img className="currentImage" src={event.target} alt=""/> </div>)
    //     }

    //     ReactDOM.render(<ImgCont />,document.getElementById("innerRoot"))
    // }

  

    return (<div className="gallery">
                <div className="gLeft" >
                    <div className="l1"><img onClick={(event)=>{click(event)}} className="i1 " onLoad={()=>{load()}} src={"/imgs/Gallery/"+GalleryArr[(picNo+1)%GalleryArr.length].loc} alt=""/></div>
                    <div className="l2"><img onClick={(event)=>{click(event)}} className="i1 " onLoad={()=>{load()}} src={"/imgs/Gallery/"+GalleryArr[(picNo+2)%GalleryArr.length].loc} alt=""/></div>
                    <div className="l3"><img onClick={(event)=>{click(event)}} className="i1 " onLoad={()=>{load()}} src={"/imgs/Gallery/"+GalleryArr[(picNo+3)%GalleryArr.length].loc} alt=""/></div>
                    <div className="l4"><img onClick={(event)=>{click(event)}} className="i1 " onLoad={()=>{load()}} src={"/imgs/Gallery/"+GalleryArr[(picNo+4)%GalleryArr.length].loc} alt=""/></div>
                    <div className="l5"><img onClick={(event)=>{click(event)}} className="i1 " onLoad={()=>{load()}} src={"/imgs/Gallery/"+GalleryArr[(picNo+5)%GalleryArr.length].loc} alt=""/></div>
                </div>
                <div className="gRight" >
                    <div className="r1"><img onClick={(event)=>{click(event)}} className="i1 " onLoad={()=>{load()}} src={"/imgs/Gallery/"+GalleryArr[(picNo+6)%GalleryArr.length].loc} alt=""/></div>
                    <div className="r2"><img onClick={(event)=>{click(event)}} className="i1 " onLoad={()=>{load()}} src={"/imgs/Gallery/"+GalleryArr[(picNo+7)%GalleryArr.length].loc} alt=""/></div>
                    <div className="r3"><img onClick={(event)=>{click(event)}} className="i1 " onLoad={()=>{load()}} src={"/imgs/Gallery/"+GalleryArr[(picNo+8)%GalleryArr.length].loc} alt=""/></div>
                    <div className="r4"><img onClick={(event)=>{click(event)}} className="i1 " onLoad={()=>{load()}} src={"/imgs/Gallery/"+GalleryArr[(picNo+9)%GalleryArr.length].loc} alt=""/></div>
                    <div className="r5"><img onClick={(event)=>{click(event)}} className="i1 " onLoad={()=>{load()}} src={"/imgs/Gallery/"+GalleryArr[(picNo+10)%GalleryArr.length].loc} alt=""/></div>
                </div>
                <div className={`imageViewer ${(img)?"show": ""}`}>
                    <img className="viewedImg" src={imgLoc} alt=""/>
                    <div className="cross" onClick={()=>{setImg(!img)} } ><MdClose /></div>
                </div>
            </div>)
}



export default Gallery;  