import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useNavContext } from '../../../context/navContext';
import { useEffect } from 'react';

const Nav = () => {
  const {showNavBar, setShowNavBar} = useNavContext()
    useGSAP(() => {
        gsap.fromTo("#logo", {y:60}, {y:0, duration:1, delay:1})
    })

    useEffect(() => {
      if(showNavBar){
        gsap.to("#first-line", {
          x:-30,
          opacity:0
        });
        gsap.to("#second-line", {
          x:30,
          opacity:0
        });
        gsap.fromTo(
          "#nav-items",
          {
            y: 60,
          },
          { y: 0, duration: 1.5, ease: "power1.out" }
        );
      } else {
        gsap.to("#first-line", {
          x: 0,
          opacity: 1,
        });
        gsap.to("#second-line", {
          x: 0,
          opacity: 1,
        });
        gsap.fromTo(
          "#nav-items",
          {
            y: 60,
          },
          { y: 0, duration: 1.5, ease: "power1.out" }
        );
      }
    })
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className={`fixed [trans] ${
        !showNavBar
          ? "top-4 w-[90%] py-3 px-6 bg-inherit/[0.5]"
          : "top-0 w-full p-10  bg-inherit"
      } lg:rounded-none ${
        showNavBar ? "rounded-[15px]" : "rounded-full"
      } lg:py-0 z-[20000] flex-col lg:flex-row items-center flex justify-between border-b-[.3px] border-white/[0.2] lg:top-0 lg:w-screen min-h-8 lg:min-h-16 lg:bg-inherit/[0.5] backdrop-blur-[20px]`}
    >
      <div className="w-full lg:w-fit h-auto flex justify-between items-center">
        <span className="text-bold w-fit mix-blend-difference h-fit overflow-y-hidden text-xl text-white/[0.5] tracking-tighter">
          <span id="logo" className="flex">
            mecalo.
          </span>
        </span>
        <span
          onClick={() => setShowNavBar((prev) => !prev)}
          className="flex relative lg:hidden gap-1.5 w-fit h-fit flex-col"
        >
          <span
            className={`flex w-[2em] ${
              showNavBar
                ? "-rotate-45 -translate-y-1/2 top-1/2 absolute"
                : "rotate-0"
            } h-[2px] bg-white/[0.8]`}
          />
          <span className="flex w-[2em] h-[1.2px]">
            <span
              id="first-line"
              className="flex w-1/2 h-[2px] bg-white/[0.8]"
            />
            <span
              id="second-line"
              className="flex w-1/2 h-[2px] bg-white/[0.8]"
            />
          </span>
          <span
            className={`flex transform w-[2em] ${
              showNavBar
                ? "rotate-45 -translate-y-1/2 top-1/2 absolute"
                : "rotate-0"
            } h-[2px] bg-white/[0.8]`}
          />
        </span>
      </div>

      <div
        className={`lg:w-fit relative rounded-none flex-col pt-16 lg:pt-0 lg:flex-row text-2xl h-screen w-full lg:absolute lg:-translate-x-1/2 lg:left-1/2 text-transparent bg-clip-text gap-6 items-center list-none flex  lg:h-fit bg-gradient-to-r from-white/80 to bg-gray-400 ${
          !showNavBar
            ? "translate-x-full hidden lg:flex"
            : "translate-x-0 block"
        }`}
        style={{
          transform: "rotateX(40px)",
          transformStyle: "preserve-3d",
        }}
      >
        {["Home", "Components", "Templates", "Docs"].map((e) => {
          return (
            <li className="w-fit h-fit overflow-hidden">
              <span id="nav-items" className="flex lg:hidden text-white">
                {e}
              </span>
              <span className="hidden lg:flex text-[16px]">{e}</span>
            </li>
          );
        })}
        <span className="w-fit lg:hidden h-fit text-nowrap px-6 py-3 text-[14px] text-white rounded-lg">
          star on github
        </span>
      </div>

      <span className="w-fit h-fit hidden lg:flex text-nowrap px-6 py-3 text-[14px] text-white rounded-lg">
        star on github
      </span>
    </div>
  );
}

export default Nav