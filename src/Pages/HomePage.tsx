import Test from "../Components/Test";
import Hero from "../Sections/Hero";
import {motion} from "motion/react"
//import Hero2 from "../Sections/Hero2";

const HomePage = () => {
  return (
    <div className="max-w-screen min-h-[100vh] relative bg-black">
      <Hero />
      {/* <Hero2 /> */}
      <Test />
      <div className="w-full p-5 flex flex-col justify-end lg:p-16 h-[70vh] absolute bottom-0">
        <div className=" text-4xl lg:h-[7rem] h-auto w-fit lg:text-[7rem] flex font-bold text-white/80">
          Michee{" "}
          <motion.span
            animate={{
              x: true ? [0, -2.2, 2.2, -2.2, 2.2, 0] : 0,
              y: true ? [0, 2.2, -2.2, 2.2, -2.2, 0] : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
              repeat: Infinity,
            }}
            className="text-gray-400 flex"
          >
            {" "}
            2x
          </motion.span>
        </div>

        <div>
          <hr className="w-full h-[.5px] bg-white/30" />
          <span className="lg:text-[16px] text-[10px] my-1 lg:my-5 flex">
            Copyright © Michee2x 2025
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
