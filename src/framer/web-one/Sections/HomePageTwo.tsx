import RotatingCards from "../components/RotatingCards";
import Cta3dPerspective from "../components/Cta-3d-Perspective";
import Nav from "../components/nav";
import ButtonTwo from "../components/buttons/ButtonTwo";
import ThemeScroll from "../components/ThemeScroll";
import MouseDot from "../components/MouseDot";
import Pulsing from "../components/Pulsing";
import Hero from "../components/Hero";
import GlowingBorder from "../components/GlowingBorder";
import RotatingGlow from "../components/RotatingGlow";
import ThreeCards from "./ThreeCards";

const HeroTwo = () => {
  return (
    <div className="max-w-screen min-h-screen flex flex-col  items-center bg-black">
      <Nav />
      <div className="w-full min-h-screen flex flex-col items-center">
        {/* HERO */}
        <Hero />
        <RotatingGlow />
      </div>

      <main className="w-full h-auto">
        {/* ---------------------GLOWINGBORDERSECTION------------------
        ---------------------GLOWINGBORDERSECTION------------------
        ---------------------GLOWINGBORDERSECTION------------------ */}
        <GlowingBorder>
          <div className="w-full h-full">
            <img
              src="https://framerusercontent.com/images/lvGVLEmxOkomFjy2EsSMpiOn8A.jpg?scale-down-to=2048"
              alt=""
              className="w-full absolute inset-0 h-full object-cover"
            />
            <div className="relative h-full px-6 z-10">
              <div className="font-medium absolute top-1/2 -translate-y-1/2 text-[1.6rem]">
                <div className="flex flex-col flex-shrink-0">
                  <h1 style={{ color: "rgb(255, 255, 255)" }}>
                    Shaping bold brands
                  </h1>
                </div>
                <div className="flex-col opacity-[0.8] flex-shrink-0">
                  <h2 className="" style={{ color: "rgb(255,255,255)" }}>
                    for the digital age.
                  </h2>
                </div>
              </div>
              <div className="absolute flex justify-between bottom-16">
                {[
                  "https://framerusercontent.com/images/OqmqB0E9qAS1VdvYZEFiBEOYyQ.jpeg?scale-down-to=512",
                  "https://framerusercontent.com/images/lvGVLEmxOkomFjy2EsSMpiOn8A.jpg?scale-down-to=2048",
                  "https://framerusercontent.com/images/z4lmYYx4PG1X0rHcR8vtMrYKbek.png",
                ].map((e) => {
                  return (
                    <img
                      key={e}
                      src={e}
                      alt=""
                      className="size-20 border-[1.3px] border-white/40 object-cover"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </GlowingBorder>
        {/* ---------------------GLOWINGBORDERSECTION------------------
        ---------------------GLOWINGBORDERSECTION------------------
        ---------------------GLOWINGBORDERSECTION------------------ */}
        <div className="w-full mt-10 lg:mt-20 h-auto">
          <h1 className="lg:mx-40 text-[7vw] lg:text-[4.44vw] px-5">
            <span className="-tracking-[.07vw] pl-24 capitalize [font-weight:200] leading-[1.2]">
              we don’t just create components <br className="hidden lg:block" />
            </span>
            <span className="-tracking-[.07vw] text-white/[0.4] capitalize [font-weight:200] leading-[1.2]">
              —we envoke lasting experiences...
            </span>
          </h1>

          <div className="w-full h-fit flex justify-end px-6 lg:pr-28 mt-10 lg:mt-16">
            <p className="max-w-xl text-white/[0.4] relative right-0">
              <span className="pl-16">
                Specializing in creating visually captivating designs that{" "}
                <br className="hidden lg:block" />
                leave a lasting impression by transforming your ideas into
                stunning <br className="hidden lg:block" /> visuals. Crafting
                unique and immersive brand narratives that{" "}
                <br className="hidden lg:block" />
                captivate audiences across digital platforms.
              </span>
            </p>
          </div>
        </div>
        {/* -------------------------THREE CARDS SECTION-----------------------
        -------------------------THREE CARDS SECTION-----------------------
        -------------------------THREE CARDS SECTION----------------------- */}
        <ThreeCards />
        {/* -------------------------THREE CARDS SECTION-----------------------
        -------------------------THREE CARDS SECTION-----------------------
        -------------------------THREE CARDS SECTION----------------------- */}
        <RotatingCards />
        <div className="w-full flex flex-col justify-center rounded-2xl items-center py-32 px-4 mt-7 lg:mt-40 min-h-screen">
          <div className="flex gap-2 items-center">
            <Pulsing />
            <h2 className="text-[12px] lg:text-[14px] uppercase text-gray-300 font-medium">
              Zoom is Framework Agnostic
            </h2>
          </div>
          <span
            data-text-fill="true"
            className="max-w-[90vw] lg:max-w-[60vw] mt-8 h-[min-content] text-center inline-block font-bold text-[30px] lg:text-[68px] tracking-tight text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "radial-gradient(99% 86% at 50% 50%, rgb(213, 219, 230) 28.387387387387385%, rgb(4, 7, 13) 100%",
            }}
          >
            Try Zoom on almost any of your favorite javascript framework!
          </span>

          <div className="pointer-events-none mt-16 mx-auto flex max-w-xl flex-wrap justify-center gap-10 px-6">
            {[
              {
                src: "https://img.daisyui.com/images/logos/svelte.svg",
                alt: "daisyUI svelte",
              },
              {
                src: "https://img.daisyui.com/images/logos/vue.svg",
                alt: "daisyUI vue",
              },
              {
                src: "https://img.daisyui.com/images/logos/react.svg",
                alt: "daisyUI react",
              },
              {
                src: "https://img.daisyui.com/images/logos/solidjs.svg",
                alt: "daisyUI solidjs",
              },
              {
                src: "https://img.daisyui.com/images/logos/rails.svg",
                alt: "daisyUI rails",
              },
              {
                src: "https://img.daisyui.com/images/logos/preact.svg",
                alt: "daisyUI preact",
              },
              {
                src: "https://img.daisyui.com/images/logos/angular.svg",
                alt: "daisyUI angular",
              },
              {
                src: "https://img.daisyui.com/images/logos/astro.svg",
                alt: "daisyUI astro",
              },
              {
                src: "https://img.daisyui.com/images/logos/qwik.svg",
                alt: "daisyUI qwik",
              },
              {
                src: "https://img.daisyui.com/images/logos/nextjs.svg",
                alt: "daisyUI nextjs",
              },
              {
                src: "https://img.daisyui.com/images/logos/nuxtjs.svg",
                alt: "daisyUI nuxtjs",
              },
              {
                src: "https://img.daisyui.com/images/logos/laravel.svg",
                alt: "daisyUI laravel",
              },
              {
                src: "https://img.daisyui.com/images/logos/phoenix.svg",
                alt: "daisyUI phoenix",
              },
              {
                src: "https://img.daisyui.com/images/logos/vite.svg",
                alt: "daisyUI vite",
              },
            ].map((e, idx) => {
              return (
                <img
                  id={`logo-${idx}`}
                  loading="lazy"
                  width="96"
                  height="96"
                  className="aspect-square h-10 w-10"
                  src={e.src}
                  alt={e.alt}
                />
              );
            })}
          </div>

          <ButtonTwo className="mt-16" text="Explore Component Variations" />
        </div>
        <ThemeScroll />
        <MouseDot />
        <div className="w-full hidden lg:h-[130vh] overflow-hidden relative">
          <Cta3dPerspective />
          {/* <BloomRHero /> */}
        </div>
      </main>
    </div>
  );
};

export default HeroTwo;
