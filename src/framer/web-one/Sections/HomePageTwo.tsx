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
        <GlowingBorder />
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

        <div className="lg:w-fit gap-4 flex flex-col lg:flex-row w-full px-4 h-fit mx-auto mt-16 lg:mt-40">
          <div className="lg:size-[21.3vw] w-full h-40 flex-col gap-4 lg:gap-0 rounded-xl bg-[#ffffff08] place-content-between border-[#ffffff0d] border-[1px] p-10 lg:py-[3.3vw] lg:px-[2.2vw] flex ">
            <h1 className="text-[5vw] font-bold leading-[3.7vw] -tracking-[0.2vw]">
              360
            </h1>
            <h5>HARDWORK + DEDICATION</h5>
            <div className="w-full bg-[#1c1c1c] rounded-xl relative overflow-hidden">
              <div
                className="card-line-progress bg-[#c5fb67] h-[1.11vw] rounded-[24px] metrics"
                style={{
                  transform:
                    "translate3d(-20%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              ></div>
            </div>
          </div>

          <div className="lg:h-[21.3vw] w-full h-40 lg:w-auto items-center rounded-xl bg-[#ffffff08] justify-between border-[#ffffff0d] border-[1px] lg:py-[3.3vw] p-10 lg:px-[2.2vw] flex ">
            <h3 className="tracking-[.07vw] text-[3.33vw]">
              WO
              <br />
              RK
            </h3>
            <h5 className="rotate-90 transform uppercase text-[.89vw] tracking-[1.44vw]">
              HARD
            </h5>
            <h2 className="text-[5vw] rotate-90 transform">24/7</h2>
            <img
              width="Auto"
              height="Auto"
              alt="arrow"
              src="https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/67de676f1c598cfa54564d4e_Arrow.svg"
              loading="eager"
              className="size-[4.44vw] object-cover inline-block"
            />
          </div>

          <div className="lg:size-[21.3vw] w-full h-40 flex-col rounded-xl bg-[#ffffff08] place-content-between border-[#ffffff0d] border-[1px] py-[3.3vw] px-[2.2vw] flex ">
            <div className="flex items-center justify-between">
              <h4
                style={{ WebkitTextStroke: ".07vw white" }}
                className="text-transparent font-bold text-[10vw] lg:text-[2.78vw]"
              >
                FUTURE
              </h4>
              <img
                width="64"
                height="64"
                alt="arrow right icon "
                src="https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/67de676f1c598cfa54564cc9_ArrowRight.svg"
                className="inline-block size-[40px] lg:size-[64px] object-cover"
                loading="eager"
              />
            </div>
            <h5 className="text-[3.5vw] lg:text-[.89vw]">
              Transforming with
              <br />
              creative Design
            </h5>
          </div>
        </div>

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
        <GlowingBorder />
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
