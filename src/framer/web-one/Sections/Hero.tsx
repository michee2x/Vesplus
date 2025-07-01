import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import GradientImage from "../images/jzTMdaQ6X2Js2yDQdPP9o3L3XUA.png"

const Hero = () => {

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.fromTo(
          "#hero-first-text",
          {
            x: -500,
            filter: "blur(8px)",
          },
          { x: 0, y: 0, filter: "blur(0px)", duration: 0.5 }
        )
          .fromTo(
            "#hero-body-text",
            {
              y: 10,
              filter: "blur(8px)",
              opacity: 0,
            },
            { x: 0, y: 0, filter: "blur(0px)", opacity: 1, duration: 0.9 }
          )
          .fromTo(
            "#hero-button",
            {
              y: 10,
              filter: "blur(8px)",
              opacity: 0,
            },
            { x: 0, y: 0, filter: "blur(0px)", opacity: 1, duration: 0.5 }
          )
          .to("#button-press", {
            width: "100%",
            duration: 2,
            ease: "power3.inOut",
          })
          .to("#button-press-pin", {
            scale: 0.7,
            duration: 0.1,
            ease: "none",
          })
          .to("#button-press-pin", {
            scale: 1,
            duration: 0.1,
            background:
                "linear-gradient(180deg, var(--token-f951c3a8-aa43-4825-aa75-915aa92c20d1, rgb(79, 26, 214)) 0%, rgb(128, 89, 227) 100%)",
            ease: "none",
          })
          .fromTo(
            "#background",
            {
              y: 500,
            },
            { y: 0, duration: 2, ease: "power4.inOut" },
            "<"
          );

    })
  return (
    <section className="w-full hidden relative h-screen">
      <div className="z-10 relative w-full overflow-hidden h-screen flex flex-col items-center justify-center backdrop-blur-[46px] bg-inherit/[0.9] px-6  pb-16">
        <h3
          id="hero-first-text"
          className=" text-[34px] text-white/90 mt-10 lg:text-7xl font-bold h-fit w-fit leading-[36px] text-center -tracking-[1px]"
          data-styles-preset="Q9YGoPiQM"
        >
          Brand It With Macelo!
        </h3>

        <div
          className="mx-auto flex-none my-6 h-[2px] relative w-[230px] lg:w-[280px]"
          style={{
            background:
              "linear-gradient(90.00000000000075deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.50) 50%, rgba(255, 255, 255, 0) 100%)",
          }}
        ></div>

        <p
          id="hero-body-text"
          className="text-[16px] lg:text-2xl lg:max-w-3xl opacity-0 text-center tracking-tighter leading-[26px] text-white/70 font-medium"
        >
          Build your site effortlessly and showcase your work with confidence.
          Ready to stand out? Get started today!
        </p>

        <button
          id="hero-button"
          style={{
            background:
              "radial-gradient(43% 50% at 50% 50%, rgba(15, 9, 18, 0.15) 0%, rgb(12, 9, 18) 100%)",
          }}
          className="flex relative mx-auto border-[.3px] w-[9.5rem] border-white/[0.7] mt-40 rounded-full justify-end h-11 pl-2 pr-3"
        >
          <div id='button-press' className='w-[2em] overflow-hidden relative h-full flex items-center justify-center gap-3'>
            <span
            id='button-press-pin'
              className="flex w-[2em] absolute left-0 h-[2em] rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, rgb(85 84 88) 0%, rgb(193 188 208) 100%)",
              }}
            ></span>
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(153, 153, 153, 0) 350%)",
              }}
              className="framer-text text-nowrap flex-1 text-right text-transparent bg-clip-text"
            >
              Get Started
            </span>
          </div>
        </button>
      </div>

      <div id='background' className="absolute z-[0] bottom-0 w-full h-auto">
        <img
          src={GradientImage}
          className="w-full object-cover h-auto lg:aspect-auto aspect-square"
          alt=""
        />
      </div>
    </section>
  );
}

export default Hero