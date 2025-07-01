import BlurAtBottom from "./components/BlurAtBottom";
import "./index.css"
import Nav from "./components/nav";
import HeroTwo from "./Sections/HomePageTwo";

export const WebOne = () => {

  //const [animationComplete, setAnimationComplete] = useState(false)


  return (
    <div
      style={{ fontFamily: "DM Sans" }}
      className="relative h-screen bg-[#080808]"
    >
      {/* <div
        className={`w-screen hidden fixed ${
          animationComplete ? "hidden" : "block"
        } h-screen flex items-center justify-center bg-black inset-0 z-[10000]`}
      >
        <SlideText setAnimationComplete={setAnimationComplete} />
      </div> */}
        <Nav />

        <div>
          <HeroTwo />
        </div>

        <BlurAtBottom />
    </div>
  );
};


//file:///C:/Users/user/Downloads/nubien.framer.website/framerusercontent.com/images/30SgNEcdoaIQjP9SX778MdNs1o.png

//file:///C:/Users/user/Downloads/nubien.framer.website/framerusercontent.com/images/jzTMdaQ6X2Js2yDQdPP9o3L3XUA.png

//file:///C:/Users/user/Downloads/nubien.framer.website/framerusercontent.com/images/WjGhVX2grmjQAfMIyIUYq9In0.png
//const newImage = `https://picsum.photos/300/200?random=${idCounter.current++}`
// let images = [
//   "src/framer/web-one/images/cardImages/C4251KhejEQDNyHXbcDvts7GE.webp",
//   "src/framer/web-one/images/cardImages/jTNLvWlf6dX0NSDWubcPxvYeBeM.webp",
//   "src/framer/web-one/images/cardImages/FRBEHMhaBN37RCbMOuky8m2dbQY.webp",
//   "src/framer/web-one/images/cardImages/5NUMOWhiWY8YrtODW5o8dZpCto.webp",
//   "src/framer/web-one/images/cardImages/WjGhVX2grmjQAfMIyIUYq9In0.png",
// ];
