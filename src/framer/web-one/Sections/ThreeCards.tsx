import {motion} from "motion/react"
import RotatingBorder from "../components/buttons/rotatingBorder";

export const ClippedComponent = () => {
  return (
    <div className="w-[28rem] -left-12 h-auto relative aspect-[.8]">
      <div
        className="w-full h-full"
        style={{
          visibility: "visible",
          opacity: 1,
          position: "absolute",
          top: "0px",
          transform:
            "translate3d(0px, 0px, 0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scale(1)",
        }}
      >
        <div className="absolute h-full w-full -right-8 top-0">
          <img
            className="object-contain transition-[opacity .5s] absolute left-0 top-0 w-full h-full object-center"
            alt="careers-2-image"
            src="/SeaArtImages/f378cf73d5fa35de49c26d88880ec4ee_cu5l8nle878c73bv6hqg_image__1_-removebg-preview.png"
            loading="lazy"
            data-v-1465f2c9=""
            width="1286"
            height="1582"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            }}
          />
        </div>
        <div
          className="frame__mask absolute inset-0 w-full h-full"
          style={{
            clipPath: "polygon(0 0, 75% 23%, 100% 100%, 0% 100%)",
          }}
        >
          <div
            className="frame__content -right-8 w-full h-full"
            style={{
              visibility: "visible",
              opacity: 1,
              position: "absolute",
              top: "0px",
              transform:
                "translate3d(0px, 0px, 0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scale(1)",
            }}
          >
            <img
              className="image loaded object-contain object-center w-full h-full absolute inset-0"
              alt="careers-1-image"
              src="/SeaArtImages/f378cf73d5fa35de49c26d88880ec4ee_cu5l8nle878c73bv6hqg_image.png"
              loading="lazy"
              data-v-1465f2c9=""
              width="1286"
              height="1582"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


//https://zentry.com/export/images/home/careers/custom-careers-desktop-1@lg.webp
const ThreeCards = () => {
  return (
    <div className="h-[80vh] flex items-end overflow-hidden w-[98vw] lg:w-[85vw] flex-col lg:flex-row mx-auto mt-16 lg:mt-40">
      <RotatingBorder clockwise={true}>
        <div className="relative w-full overflow-hidden p-1 h-full z-10 flex items-end">
          <ClippedComponent />

          <div className="absolute w-full flex flex-col items-end gap-6 pt-6 pr-6 lg:w-[60%] h-1/2 right-0 top-0">
            <motion.h1
              // animate={{
              //   x: [0, -4, 4, -4, 4, 0],
              //   y: [0, 2, -2, 2, -2, 0],
              // }}
              // transition={{
              //   duration: 0.2,
              //   repeat: Infinity,
              //   repeatType: "loop",
              // }}
              className="lg:text-8xl text-5xl text-nowrap font-bold text-white/[0.9]"
            >
              LIGHT SPEED
            </motion.h1>
            <h1 className="lg:text-xl px-5 text-[14px] w-auto text-right text-white/[0.5] ">
              {" "}
              <span className="flex items-start gap-2">
                <motion.span animate={{opacity:[1, 0]}} transition={{duration:2, repeat:Infinity, times:[0.2, 0.5]}} className="size-1 flex-shrink-0 mt-2 flex bg-white" />{" "}
                Precision-crafted motion
              </span>
              <span>
                {" "}
                components that move fast — so your site never slows down.
              </span>
            </h1>
          </div>

          <div className="absolute w-1/2 h-1/2 bg-blue-700 right-0 bottom-0 hidden lg:block"></div>
        </div>
      </RotatingBorder>
    </div>
  );
};

export default ThreeCards;
