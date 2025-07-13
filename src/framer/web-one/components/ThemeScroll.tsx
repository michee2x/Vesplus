import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import Pulsing from "./Pulsing";

const ScreenOne = () => {
  return (
    <div
      className="w-full h-full p-4 bg-gray-200 flex lg:flex-row flex-col lg:items-center lg:justify-center relative"
    >
      <div className="lg:w-[30%] flex flex-col gap-4 h-auto lg:h-full">
        <span className="flex shadow-2xl text-white lg:py-3 w-[min-content] font-normal text-nowrap rounded-full text-[11px] lg:text-[14px] px-2 py-1 gap-3 lg:px-4 bg-zinc-700 items-center justify-center">
          <Pulsing color="rgb(255, 255, 255)" />
          do more than branding
        </span>

        <div className="w-fit shadow-xl shadow-black/[0.4] gap-2 grid place-items-center grid-cols-2 rounded-xl p-2 h-auto bg-zinc-700">
          {[1, 2, 3, 4].map((er, idx) => {
            return (
              <div
                key={`${idx * er}`}
                className="size-20 lg:size-32 relative overflow-hidden rounded-xl bg-red-500"
              >
                <img
                  src="src\framer\web-one\images\cardImages\FRBEHMhaBN37RCbMOuky8m2dbQY.webp"
                  alt=""
                  className="w-full h-full absolute object-cover object-center"
                />
                <span className="flex p-2 relative w-full h-full bg-gradient-to-b from-transparent to-black text-[12px] lg:text-[25px] font-semibold items-end">
                  Velvet
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:w-[36%] mt-6 lg:mt-0 flex-col gap-2 flex h-full">
        <div className="flex-1 flex lg:p-3 flex-col w-full h-full">
          <span            className="text-zinc-700 flex w-fit h-fit tracking-tighter font-bold text-6xl lg:text-7xl"
          >
            BRANDING
          </span>
          <p className="text-[14px] mt-6 w-[80%] lg:w-full lg:text-[16px] h-auto text-zinc-700 lg:mt-3 font-thin">
            Cutting-edge designs with seamless performance
          </p>
          <div className="flex mt-3">
            {[...Array(5)].map((e, idx) => {
              return (
                <div key={`${e * idx}`} className="w-10 flex-shrink-0 h-10 -mr-2 overflow-hidden rounded-full border-zinc-800 border-[1.2px] !p-0">
                  <img
                    src="src\framer\web-one\images\cardImages\FRBEHMhaBN37RCbMOuky8m2dbQY.webp"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              );
            })}
          </div>
          <button className="w-fit h-fit px-4 rounded-lg text-white  bg-zinc-700 flex items-center justify-center text-[14px] lg:text-[16px] gap-3 text-nowrap font-thin cursor-pointer mt-10">
            Explore Themes
            <img
              width="64"
              height="64"
              alt="arrow right icon "
              src="https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/67de676f1c598cfa54564cc9_ArrowRight.svg"
              className="inline-block size-[30px] lg:size-[40px] object-cover"
              loading="eager"
            />
          </button>
        </div>
      </div>
      <div className="w-1/3 hidden lg:flex items-start h-auto p-4">
        <div className="w-full rotate-45 transform p-3 h-[80%] bg-white border-[2px] border-zinc-950 rounded-xl">
          <span className="flex shadow-xl shadow-black/[0.6] rounded-full w-fit h-fit px-6 py-2 bg-zinc-800 text-white items-center justify-center">
            {" "}
            Most Popular Themes{" "}
          </span>

          <div className="grid py-5 gap-y-4 grid-cols-3">
            {[...Array(6)].map((e, idx) => {
              return (
                <span
                  key={`${idx * e}`}
                  className="flex w-fit h-auto flex-col gap-1"
                >
                  <span className="flex size-20 rounded-xl bg-blue-500" />
                  <span className="text-black text-center">Primary</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
const ScreenTwo = () => {
  return (
    <div
      className="w-full bg-red-600 h-full p-4 flex lg:flex-row flex-col lg:items-center lg:justify-center relative"
    >
      <div className="lg:w-[30%] flex flex-col gap-4 h-auto lg:h-full">
        <span className="flex shadow-2xl text-white lg:py-3 w-[min-content] font-normal text-nowrap rounded-full text-[11px] lg:text-[14px] px-2 py-1 gap-3 lg:px-4 bg-zinc-950 items-center justify-center">
          <Pulsing color="rgb(255, 255, 255)" />
          do more than branding
        </span>

        <div className="w-fit shadow-xl shadow-black/[0.4] gap-2 grid place-items-center grid-cols-2 rounded-xl p-2 h-auto bg-gray-300">
          {[1, 2, 3, 4].map((e, idx) => {
            return (
              <div
                key={`${idx * e}`}
                className="size-20 lg:size-32 relative overflow-hidden rounded-xl bg-red-500"
              >
                <img
                  src="src\framer\web-one\images\cardImages\FRBEHMhaBN37RCbMOuky8m2dbQY.webp"
                  alt=""
                  className="w-full h-full absolute object-cover object-center"
                />
                <span className="flex p-2 relative w-full h-full bg-gradient-to-b from-transparent to-black text-[12px] lg:text-[25px] font-semibold items-end">
                  Velvet
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:w-[36%] mt-6 lg:mt-0 flex-col gap-2 flex h-full">
        <div className="flex-1 flex lg:p-3 flex-col w-full h-full">
          <span
            className="text-zinc-950 flex w-fit h-fit tracking-tighter font-bold text-6xl lg:text-7xl"
          >
            BRANDING
          </span>
          <p className="text-[14px] mt-6 w-[80%] lg:w-full lg:text-[16px] h-auto text-white lg:mt-3 font-thin">
            Cutting-edge designs with seamless performance
          </p>
          <div className="flex mt-3">
            {[...Array(5)].map((e, idx) => {
              return (
                <div className="w-10 flex-shrink-0 h-10 -mr-2 overflow-hidden rounded-full border-zinc-800 border-[1.2px] !p-0">
                  <img
                    key={`${idx * e}`}
                    src="src\framer\web-one\images\cardImages\FRBEHMhaBN37RCbMOuky8m2dbQY.webp"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              );
            })}
          </div>
          <button className="w-fit h-fit px-4 rounded-lg text-black  bg-gray-300/[0.9] flex items-center justify-center text-[14px] lg:text-[16px] gap-3 text-nowrap font-thin cursor-pointer mt-10">
            Explore Themes
            <img
              width="64"
              height="64"
              alt="arrow right icon "
              src="https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/67de676f1c598cfa54564cc9_ArrowRight.svg"
              className="inline-block invert size-[30px] lg:size-[40px] object-cover"
              loading="eager"
            />
          </button>
        </div>
      </div>
      <div className="w-1/3 hidden lg:flex items-start h-auto p-4">
        <div className="w-full rotate-45 transform p-3 h-[80%] bg-white border-[2px] border-zinc-950 rounded-xl">
          <span className="flex shadow-xl shadow-black/[0.6] rounded-full w-fit h-fit px-6 py-2 bg-zinc-800 text-white items-center justify-center">
            {" "}
            Most Popular Themes{" "}
          </span>

          <div className="grid py-5 gap-y-4 grid-cols-3">
            {[...Array(6)].map((e, idx) => {
              return (
                <span
                  key={`${idx * e}`}
                  className="flex w-fit h-auto flex-col gap-1"
                >
                  <span className="flex size-20 rounded-xl bg-blue-500" />
                  <span className="text-black text-center">Primary</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
const ScreenThree = () => {
  return (
    <div
      className="w-full h-full p-4 bg-zinc-800 flex lg:flex-row flex-col lg:items-center lg:justify-center relative"
    >
      <div className="lg:w-[30%] flex flex-col gap-4 h-auto lg:h-full">
        <span className="flex shadow-2xl text-white lg:py-3 w-[min-content] font-normal text-nowrap rounded-full text-[11px] lg:text-[14px] px-2 py-1 gap-3 lg:px-4  items-center justify-center">
          <Pulsing color="rgb(255, 255, 255)" />
          do more than branding
        </span>

        <div className="w-fit shadow-xl shadow-black/[0.4] gap-2 grid place-items-center grid-cols-2 rounded-xl p-2 h-auto bg-purple-700">
          {[1, 2, 3, 4].map((e, idx) => {
            return (
              <div
                key={`${idx * e}`}
                className="size-20 lg:size-32 relative overflow-hidden rounded-xl bg-red-500"
              >
                <img
                  src="src\framer\web-one\images\cardImages\FRBEHMhaBN37RCbMOuky8m2dbQY.webp"
                  alt=""
                  className="w-full h-full absolute object-cover object-center"
                />
                <span className="flex p-2 relative w-full h-full bg-gradient-to-b from-transparent to-black text-[12px] lg:text-[25px] font-semibold items-end">
                  Velvet
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:w-[36%] mt-6 lg:mt-0 flex-col gap-2 flex h-full">
        <div className="flex-1 flex lg:p-3 flex-col w-full h-full">
          <span
            className="text-white flex w-fit h-fit tracking-tighter font-bold text-6xl lg:text-7xl"
          >
            BRANDING
          </span>
          <p className="text-[14px] mt-6 w-[80%] lg:w-full lg:text-[16px] h-auto text-white lg:mt-3 font-thin">
            Cutting-edge designs with seamless performance
          </p>
          <div className="flex mt-3">
            {[...Array(5)].map((e, idx) => {
              return (
                <div className="w-10 flex-shrink-0 h-10 -mr-2 overflow-hidden rounded-full border-zinc-800 border-[1.2px] !p-0">
                  <img
                    key={`${idx * e}`}
                    src="src\framer\web-one\images\cardImages\FRBEHMhaBN37RCbMOuky8m2dbQY.webp"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              );
            })}
          </div>
          <button className="w-fit h-fit px-4 rounded-lg text-black  bg-gray-300/[0.9] flex items-center justify-center text-[14px] lg:text-[16px] gap-3 text-nowrap font-thin cursor-pointer mt-10">
            Explore Themes
            <img
              width="64"
              height="64"
              alt="arrow right icon "
              src="https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/67de676f1c598cfa54564cc9_ArrowRight.svg"
              className="inline-block invert size-[30px] lg:size-[40px] object-cover"
              loading="eager"
            />
          </button>
        </div>
      </div>
      <div className="w-1/3 hidden lg:flex items-start h-auto p-4">
        <div className="w-full rotate-45 transform p-3 h-[80%] bg-white border-[2px] border-zinc-950 rounded-xl">
          <span className="flex shadow-xl shadow-black/[0.6] rounded-full w-fit h-fit px-6 py-2 bg-zinc-800 text-white items-center justify-center">
            {" "}
            Most Popular Themes{" "}
          </span>

          <div className="grid py-5 gap-y-4 grid-cols-3">
            {[...Array(6)].map((e, idx) => {
              return (
                <span
                  key={`${idx * e}`}
                  className="flex w-fit h-auto flex-col gap-1"
                >
                  <span className="flex size-20 rounded-xl bg-blue-500" />
                  <span className="text-black text-center">Primary</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
const ScreenFour = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(146% 80% at 59.6% 33.1%, #000000 47.42345641539978%, rgb(21, 31, 140) 68%, rgba(114, 137, 232, .81) 100%)",
      }}
      className="w-full h-full p-4 flex lg:flex-row flex-col lg:items-center lg:justify-center relative"
    >
      <div className="lg:w-[30%] flex flex-col gap-4 h-auto lg:h-full">
        <span className="flex shadow-2xl text-white lg:py-3 w-[min-content] font-normal text-nowrap rounded-full text-[11px] lg:text-[14px] px-2 py-1 gap-3 lg:px-4 bg-blue-700 items-center justify-center">
          <Pulsing color="rgb(255, 255, 255)" />
          do more than branding
        </span>

        <div className="w-fit shadow-xl shadow-black/[0.4] gap-2 grid place-items-center grid-cols-2 rounded-xl p-2 h-auto bg-purple-700">
          {[1, 2, 3, 4].map((e, idx) => {
            return (
              <div
                key={`${idx * e}`}
                className="size-20 lg:size-32 relative overflow-hidden rounded-xl bg-red-500"
              >
                <img
                  src="src\framer\web-one\images\cardImages\FRBEHMhaBN37RCbMOuky8m2dbQY.webp"
                  alt=""
                  className="w-full h-full absolute object-cover object-center"
                />
                <span className="flex p-2 relative w-full h-full bg-gradient-to-b from-transparent to-black text-[12px] lg:text-[25px] font-semibold items-end">
                  Velvet
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:w-[36%] mt-6 lg:mt-0 flex-col gap-2 flex h-full">
        <div className="flex-1 flex lg:p-3 flex-col w-full h-full">
          <span
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(40, 53, 148, 0.5) 24%, rgba(255, 255, 255, 0) 88.4685%)",
            }}
            className="text-transparent bg-clip-text flex w-fit h-fit tracking-tighter font-bold text-6xl lg:text-7xl"
          >
            BRANDING
          </span>
          <p className="text-[14px] mt-6 w-[80%] lg:w-full lg:text-[16px] h-auto text-white lg:mt-3 font-thin">
            Cutting-edge designs with seamless performance
          </p>
          <div className="flex mt-3">
            {[...Array(5)].map((e, idx) => {
              return (
                <div className="w-10 flex-shrink-0 h-10 -mr-2 overflow-hidden rounded-full border-zinc-800 border-[1.2px] !p-0">
                  <img
                    key={`${idx * e}`}
                    src="src\framer\web-one\images\cardImages\FRBEHMhaBN37RCbMOuky8m2dbQY.webp"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              );
            })}
          </div>
          <button className="w-fit h-fit px-4 rounded-lg text-black  bg-gray-300/[0.9] flex items-center justify-center text-[14px] lg:text-[16px] gap-3 text-nowrap font-thin cursor-pointer mt-10">
            Explore Themes
            <img
              width="64"
              height="64"
              alt="arrow right icon "
              src="https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/67de676f1c598cfa54564cc9_ArrowRight.svg"
              className="inline-block invert size-[30px] lg:size-[40px] object-cover"
              loading="eager"
            />
          </button>
        </div>
      </div>
      <div className="w-1/3 hidden lg:flex items-start h-auto p-4">
        <div className="w-full rotate-45 transform p-3 h-[80%] bg-white border-[2px] border-zinc-950 rounded-xl">
          <span className="flex shadow-xl shadow-black/[0.6] rounded-full w-fit h-fit px-6 py-2 bg-zinc-800 text-white items-center justify-center">
            {" "}
            Most Popular Themes{" "}
          </span>

          <div className="grid py-5 gap-y-4 grid-cols-3">
            {[...Array(6)].map((e, idx) => {
              return (
                <span
                  key={`${idx * e}`}
                  className="flex w-fit h-auto flex-col gap-1"
                >
                  <span className="flex size-20 rounded-xl bg-blue-500" />
                  <span className="text-black text-center">Primary</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
const ScreenFive = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(146% 80% at 59.6% 33.1%, #000000 47.42345641539978%, rgb(21, 31, 140) 68%, rgba(114, 137, 232, .81) 100%)",
      }}
      className="w-full h-full p-4 flex lg:flex-row flex-col lg:items-center lg:justify-center relative"
    >
      <div className="lg:w-[30%] flex flex-col gap-4 h-auto lg:h-full">
        <span className="flex shadow-2xl text-white lg:py-3 w-[min-content] font-normal text-nowrap rounded-full text-[11px] lg:text-[14px] px-2 py-1 gap-3 lg:px-4 bg-blue-700 items-center justify-center">
          <Pulsing color="rgb(255, 255, 255)" />
          do more than branding
        </span>

        <div className="w-fit shadow-xl shadow-black/[0.4] gap-2 grid place-items-center grid-cols-2 rounded-xl p-2 h-auto bg-purple-700">
          {[1, 2, 3, 4].map((e, idx) => {
            return (
              <div
                key={`${idx * e}`}
                className="size-20 lg:size-32 relative overflow-hidden rounded-xl bg-red-500"
              >
                <img
                  src="src\framer\web-one\images\cardImages\FRBEHMhaBN37RCbMOuky8m2dbQY.webp"
                  alt=""
                  className="w-full h-full absolute object-cover object-center"
                />
                <span className="flex p-2 relative w-full h-full bg-gradient-to-b from-transparent to-black text-[12px] lg:text-[25px] font-semibold items-end">
                  Velvet
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:w-[36%] mt-6 lg:mt-0 flex-col gap-2 flex h-full">
        <div className="flex-1 flex lg:p-3 flex-col w-full h-full">
          <span style={{backgroundImage:"linear-gradient(0deg, rgba(40, 53, 148, 0.5) 24%, rgba(255, 255, 255, 0) 88.4685%)"}} className="text-transparent bg-clip-text flex w-fit h-fit tracking-tighter font-bold text-6xl lg:text-7xl">
            BRANDING
          </span>
          <p className="text-[14px] mt-6 w-[80%] lg:w-full lg:text-[16px] h-auto text-white lg:mt-3 font-thin">
            Cutting-edge designs with seamless performance
          </p>
          <div className="flex mt-3">
            {[...Array(5)].map((e, idx) => {
              return (
                <div className="w-10 flex-shrink-0 h-10 -mr-2 overflow-hidden rounded-full border-zinc-800 border-[1.2px] !p-0">
                  <img
                    key={`${idx * e}`}
                    src="src\framer\web-one\images\cardImages\FRBEHMhaBN37RCbMOuky8m2dbQY.webp"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              );
            })}
          </div>
          <button className="w-fit h-fit px-4 rounded-lg text-black  bg-gray-300/[0.9] flex items-center justify-center text-[14px] lg:text-[16px] gap-3 text-nowrap font-thin cursor-pointer mt-10">
            Explore Themes
            <img
              width="64"
              height="64"
              alt="arrow right icon "
              src="https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/67de676f1c598cfa54564cc9_ArrowRight.svg"
              className="inline-block invert size-[30px] lg:size-[40px] object-cover"
              loading="eager"
            />
          </button>
        </div>
      </div>
      <div className="w-1/3 hidden lg:flex items-start h-auto p-4">
        <div className="w-full rotate-45 transform p-3 h-[80%] bg-white border-[2px] border-zinc-950 rounded-xl">
          <span className="flex shadow-xl shadow-black/[0.6] rounded-full w-fit h-fit px-6 py-2 bg-zinc-800 text-white items-center justify-center">
            {" "}
            Most Popular Themes{" "}
          </span>

          <div className="grid py-5 gap-y-4 grid-cols-3">
            {[...Array(6)].map((e, idx) => {
              return (
                <span
                  key={`${idx * e}`}
                  className="flex w-fit h-auto flex-col gap-1"
                >
                  <span className="flex size-20 rounded-xl bg-blue-500" />
                  <span className="text-black text-center">Primary</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ThemeScroll = () => {
  const themeContainer = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: themeContainer,
    offset: ["end end", "start start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-400, 250]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={themeContainer} className="w-screen py-4 h-[600vh]">
      <div
        
        className="sticky lg:top-[4rem] mx-auto grid w-[95%] h-[85vh] max-w-[85rem] overflow-hidden rounded-2xl top-20"
      >
        <div className="col-start-1 w-full h-screen relative row-start-1 flex [transform:translate3d(0,0,0)] items-start">
          <div
            className="col-start-1 w-screen h-screen absolute inset-0 row-start-1 flex [transform:translate3d(0,0,0)] items-center justify-center"
            style={{
              opacity: 1,
              clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            }}
          >
            <ScreenFive />
          </div>
          {[ScreenOne, ScreenTwo, ScreenThree, ScreenFour].map(
            (Screen, idx) => {
              const value = 3 - idx;
              const adjustedRotate = useTransform(
                rotate,
                (r) => r + value * 100
              );
              const clipPath = useTransform(
                adjustedRotate,
                (r) => `polygon(${r}% 0%, 0% 0%, 0% 100%, ${x.get()}% 100%)`
              );
              console.log("adjusted rotate: ", clipPath);
              return (
                <motion.div
                  id={`theme-${idx}`}
                  className="col-start-1 hidde w-screen h-screen absolute inset-0 row-start-1 flex items-center justify-center"
                  style={{
                    clipPath: clipPath,
                  }}
                >
                  <Screen />
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeScroll;


document.querySelector(
  "body > div.page-wrapper > div.main-wrapper > section.section.is-home-hero > div.rive__hero > div > canvas"
);