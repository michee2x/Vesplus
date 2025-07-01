import { MdShoppingCart } from "react-icons/md";
import RotatingCards from "../components/RotatingCards";
import Cta3dPerspective from "../components/Cta-3d-Perspective";

const HeroTwo = () => {
  return (
    <div className="max-w-screen min-h-screen flex flex-col  items-center bg-black">
      <div className=" w-fit h-fit flex flex-col z-50 right-5 lg:left-5 -translate-y-1/2 top-1/2 justify-center items-center gap-8 absolute lg:z-[9000] lg:fixed">
        {[
          "https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/67de676f1c598cfa54564ca2_youtube.png",
          "https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/67de676f1c598cfa54564c9e_instagram.png",
          "https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/67de676f1c598cfa54564cb0_tiktok.png",
        ].map((e) => {
          return <img src={e} alt="icon" className="w-5 h-5 invert" />;
        })}
      </div>
      <img
        loading="eager"
        src="https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/6816082703b8cabc97aef253_SideCutout.svg"
        alt="hexagon"
        className="z-40 absolute lg:fixed lg:z-[8000] right-0 lg:rotate-180 lg:left-0 -translate-y-1/2 top-1/2"
      />
      <div className="w-full h-screen flex flex-col items-center">
        {/* NAV BAR */}
        <div className="w-full hidden relative h-[5.7rem] p-3 lg:px-[12.5rem] flexx items-center justify-between">
          <img
            src="https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/6810c614f6022f5a9ffceddd_icon2.svg"
            alt="logo"
            className="w-9 h-9"
          />

          <div className="flex w-fit h-fit gap-10 ">
            {["About", "Services", "Portfolio", "Contact"].map((e) => {
              return (
                <span
                  key={e}
                  className="text-white/[0.5] text-[19px] cursor-pointer hover:text-white transition-all duration-300"
                >
                  {e}
                </span>
              );
            })}
            <MdShoppingCart className="text-xl mt-1" />
          </div>
        </div>
        {/* HERO */}
        <div className="w-full [perspective:100vh] h-[120vh] relative">
          <h1
            className="hero-text mix-blend-difference text-white absolute text-[30vw] bottom-5 right-5 lg:right-0 lg:bottom-16 leading-[8rem] text-overflow lg:text-[20vw] font-semibold z-50 "
            style={{
              opacity: 1,
              transformStyle: "preserve-3d",
              transform:
                "rotateY(20deg) skewX(-10deg) translate3d(0px, 0px, 0px)",
              transformOrigin: "50% 100%",
            }}
          >
            ZOOM
          </h1>
          <div
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0% 100%)" }}
            className="hero-flex flex w-full h-full flex-col justify-center relative"
          >
            <div className="absolute rounded-2xl overflow-hidden inset-0">
              {[
                "https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/6810b0301bbea2e6c06fea54_Hero5.webp",
                "https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/6810b0301bbea2e6c06fea54_Hero5.webp",
                "https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/6810b4edfc88c3b3f52c1761_Hero6.webp",
                "	https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/6810b9a96e755b2b9918ae97_Hero7.webp",
              ].map(() => (
                <img
                  src={
                    "https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/6810b0301bbea2e6c06fea54_Hero5.webp"
                  }
                  alt=""
                  className={`w-full grayscale inline-block will-change-[opacity] duration-500 h-full object-cover absolute`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="w-full h-auto">
        <div className="w-full lg:h-[130vh] overflow-hidden relative">
          <Cta3dPerspective />
          {/* <BloomRHero /> */}
        </div>
        <div className="w-full h-auto">
          <h1 className="lg:mx-40 text-[7vw] lg:text-[4.44vw] px-5">
            <span className="-tracking-[.07vw] pl-24 capitalize [font-weight:200] leading-[1.2]">
              we don’t just design for the <br className="hidden lg:block" />{" "}
              present
            </span>
            <span className="-tracking-[.07vw] text-white/[0.4] capitalize [font-weight:200] leading-[1.2]">
              —we craft experiences for <br className="hidden lg:block" /> the
              future.
            </span>
          </h1>

          <div className="w-full h-fit flex justify-end px-6 lg:pr-28 mt-16">
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

        <div className="w-full flex flex-col items-center p-4 mt-16 lg:mt-40 h-screen">
          <span
            data-text-fill="true"
            className="framer-text inline-block font-bold text-[48px] tracking-tight text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "radial-gradient(99% 86% at 50% 50%, rgb(213, 219, 230) 28.387387387387385%, rgb(4, 7, 13) 100%",
            }}
          >
            <span className="text-">Zoom</span> Is Framework Agnostic{" "}
          </span>
          <h2 className="text-[16px] capitalize font-medium mt-10 text-semibold">
            Try Zoom on almost any of your favorite javascript framework!
          </h2>

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
        </div>
      </main>
    </div>
  );
};

export default HeroTwo;
