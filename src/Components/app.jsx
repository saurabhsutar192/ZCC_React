import React,{useState} from "react";
import Navbar from "./navBar";
import {useSpring , animated, config} from "react-spring";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing";
import Intro from "./intro";
import MusicIntro from "./musicIntro";
import IndPage from "./indPage";
import Register from "./Register";
import Contact from "./contacts";
import About from "./about";
import Gallery  from "./gallery.jsx"
import LongBadge from "./longBadge"
import PhotoArray from "./PhotoContent"
import DramaArray from "./DramaContent"
import RecArray from "./RecContent"
import JamArray from "./JamContent"
import DanceArray from "./DanceContent"
import artGall from "./ArtContent"
import GalleryArr from "./photos"

function App() {

  // let [navColor,setNavColor]=useState("#3d3d3d")


  // console.log(navColor)

  let dropInAnim=useSpring({
    from:{
      opacity:0,
      transform:'scale(0)'
    },
    opacity:1,transform:'scale(1)',
    config:config.gentle
  })



  return (
    <div className="app">
      <Navbar/>
      <Router>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/Intro">
          <Intro />
        </Route>
        <Route path="/Music">
          <MusicIntro style={dropInAnim} />
        </Route>
        <Route path="/Art">
          <IndPage
            title="Art"
            cardClass="artCard"
            
            imgClass="artClass"
            titleClass="artTitle"
            contentClass="artContent"
            img="PageImgs/pArt.png"
            array={artGall}
            style={dropInAnim}
            isArt={true}
          />
        </Route>
        <Route path="/Dance">
          <IndPage
            title="Dance"
            cardClass="danceCard"
            
            imgClass="danceClass"
            titleClass="danceTitle"
            contentClass="danceContent"
            img="PageImgs/pDance.png"
            array={DanceArray}
            style={dropInAnim}
            isArt={false}
          />
        </Route>
        <Route path="/Drama">
          <IndPage
            title="Drama"
            cardClass="dramaCard"
            
            imgClass="dramaClass"
            titleClass="dramaTitle"
            contentClass="dramaContent"
            img="PageImgs/pDrama.png"
            array={DramaArray}
            style={dropInAnim}
            isArt={false}
          />
        </Route>
        <Route path="/Photo">
          <IndPage
            title="Photography"
            cardClass="photoCard"
            
            imgClass="photoClass"
            titleClass="photoTitle"
            contentClass="photoContent"
            img="PageImgs/pPhoto.png"
            array={PhotoArray}
            style={dropInAnim}
            isArt={false}
          />
        </Route>
        <Route path="/recStudio">
          <IndPage
            title="Recording"
            cardClass="recCard"
            subtitle="STUDIO"
            
            imgClass="recClass"
            titleClass="recTitle"
            contentClass="recContent"
            img="PageImgs/pKeyBoard.png"
            array={RecArray}
            style={dropInAnim}
            isArt={false}
          />
        </Route>
        <Route path="/jamStudio">
          <IndPage
            title="Jamming"
            cardClass="jamCard"
            subtitle="STUDIO"
            
            imgClass="jamClass"
            titleClass="jamTitle"
            contentClass="jamContent"
            img="PageImgs/pKeyBoard.png"
            array={JamArray}
            style={dropInAnim}
            isArt={false}
          />
        </Route>
        <Route path="/Register">
          <Register style={dropInAnim} />
        </Route>
        <Route path="/Contact">
          <Contact style={dropInAnim}/>
        </Route>
        <Route path="/AboutUs">
          <About style={dropInAnim}/>
        </Route>

        <Route path="/Gallery">
        <div className="page">
            <div className="spacer"></div>
                  <Gallery 
                    array={GalleryArr}
                    class=" mainGall"
                    isArt={false}
                    anim={dropInAnim}/>
         </div>
        </Route>

      </Router>
      
      
    </div>
  );
}
export default App;
