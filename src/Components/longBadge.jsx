
import React,{useState} from "react";
import {useSpring , animated, config} from "react-spring";
import GalleryArr from "./photos"
import { MdClose } from "react-icons/md";



function LongBadge(prop){

    return (<div  className="LB" >
            <div className="LBdesc">{prop.desc}</div>
            <div className="LBimgDiv"><img className="LBimg" src={"imgs/LBimgs/"+prop.img} alt=""/></div>

    </div>)

}

export default LongBadge;