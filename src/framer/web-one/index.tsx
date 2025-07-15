import BlurAtBottom from "./components/BlurAtBottom";
import "./index.css"
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

        <div>
          <HeroTwo />
        </div>

        <BlurAtBottom />
    </div>
  );
};
