import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {FaGithub} from "react-icons/fa"
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
    <div className="fixed lg:px-6 p-6 lg:py-0 z-[9000] flex-col lg:flex-row items-center flex justify-between border-b-[.3px] border-white/[0.2] w-screen min-h-16  bg-inherit/[0.5] backdrop-blur-[20px]">
      <div className="w-full lg:w-fit h-auto flex justify-between items-center">
        <span className="text-bold w-fit h-fit overflow-y-hidden text-xl text-white/[0.5] tracking-tighter">
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
            <span id='first-line' className="flex w-1/2 h-[2px] bg-white/[0.8]" />
            <span id='second-line' className="flex w-1/2 h-[2px] bg-white/[0.8]" />
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
        className={`lg:w-fit flex-col pt-16 lg:pt-0 lg:flex-row text-2xl h-screen w-full lg:absolute lg:-translate-x-1/2 lg:left-1/2 text-transparent bg-clip-text gap-6 items-center list-none flex  lg:h-fit bg-gradient-to-r from-white/80 to bg-gray-400 ${
          !showNavBar ? "translate-x-full hidden lg:flex" : "translate-x-0 block"
        }`}
      >
        {["Home", "Components", "Templates", "Docs"].map((e) => {
          return (
            <li className="w-fit h-fit overflow-hidden">
              <span id="nav-items" className="flex lg:hidden text-white">
                {e}
              </span>
              <span className="hidden lg:flex text-[16px]">
                {e}
              </span>
            </li>
          );
        })}
        <FaGithub className="text-3xl flex lg:hidden" />
      </div>

      <FaGithub className="text-3xl hidden lg:flex" />
    </div>
  );
}

export default Nav