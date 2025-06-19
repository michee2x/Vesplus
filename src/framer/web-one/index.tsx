import BlurAtBottom from "./components/BlurAtBottom";
import "./index.css"
import Hero from "./Sections/Hero";
import Nav from "./components/nav";
import SlideText from "./components/SlideText"; 
import { useState } from "react";

export const WebOne = () => {

  const [animationComplete, setAnimationComplete] = useState(false)


  return (
    <div
      style={{ fontFamily: "DM Sans" }}
      className="relative h-screen bg-[#080808] overflow-y-scroll"
    >
      <div className={`w-screen fixed ${animationComplete ? "hidden" : "block"} h-screen flex items-center justify-center bg-black inset-0 z-[10000]`}>
        <SlideText setAnimationComplete={setAnimationComplete} />
      </div>
      {animationComplete && (
        <div className="w-full h-auto">
          <Nav />

          <div className="w-full h-auto">
            <Hero />
            <div className="bg-black/[0.2] w-full h-[200vh]">

            </div>
          </div>

          <BlurAtBottom />
        </div>
      )}
    </div>
  );
};


//file:///C:/Users/user/Downloads/nubien.framer.website/framerusercontent.com/images/30SgNEcdoaIQjP9SX778MdNs1o.png

//file:///C:/Users/user/Downloads/nubien.framer.website/framerusercontent.com/images/jzTMdaQ6X2Js2yDQdPP9o3L3XUA.png

//file:///C:/Users/user/Downloads/nubien.framer.website/framerusercontent.com/images/WjGhVX2grmjQAfMIyIUYq9In0.png

