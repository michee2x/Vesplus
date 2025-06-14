import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { GoPlus } from "react-icons/go";
import StaggeredText from "./StaggeredText";
import { motion } from "motion/react";
import { CrazyParallax } from "./PortfolioScrollEffect";

gsap.registerPlugin(ScrollTrigger);

type imageDts = {
  imageSrc?: string;
  transformOrigin?: string;
  x?: number | string;
  y?: number | string;
  z?: number | string;
  rotateX?: number;
  opacity?: number;
  scale?: number;
}[];

const imageData: imageDts = [
  {
    imageSrc: "http://localhost:5173/1694012779makereignteampagelukeengel.png",
    transformOrigin: "50% 0%",
    x: 60,
    y: 70,
    z: -818.271,
    rotateX: -63.6433,
    opacity: 0.1,
  },
  {
    imageSrc: "/1694012819makereignteampagenataliedecanha.png",
    transformOrigin: "50% 0%",
    x: 0,
    y: 50,
    z: -900,
    rotateX: -63,
    opacity: 0.2,
  },
  {
    imageSrc: "/1694073882makereignpagecaseethnicmaskfloating2x.jpg",
    transformOrigin: "50% 0%",
    x: -50,
    y: 20,
    z: -900,
    rotateX: -52,
    opacity: 0.3,
  },
  {
    imageSrc: "/1694074773makereigntbcwomanafrohairstylevodacomlogo2x.jpg",
    transformOrigin: "50% 0%",
    x: -70,
    y: -70,
    z: -900,
    rotateX: -54.6433,
    scale: 1.3,
    opacity: 0.5,
  },
  {
    imageSrc: "/1694170255makereignpagecaseappagencyclientmobile2x.jpg",
    transformOrigin: "50% 0%",
    x: 0,
    y: 0,
    z: -900,
    rotateX: -60,
    scale: 1.2,
    opacity: 0.4,
  },
  {
    imageSrc: "/1694539877makereignpagecaseclientphotography2x%20(1).png",
    transformOrigin: "50% 0%",
    x: 80,
    y: 10,
    z: -900,
    rotateX: -60,
    scale: 1.2,
    opacity: 0.4,
  },
  {
    imageSrc: "/1694074773makereigntbcwomanafrohairstylevodacomlogo2x.jpg",
    transformOrigin: "50% 0%",
    x: 0,
    y: 0,
    z: -900,
    rotateX: -90,
    opacity: 0,
  },
  {
    imageSrc: "/1694170255makereignpagecaseappagencyclientmobile2x.jpg",
    transformOrigin: "50% 0%",
    x: 0,
    y: 0,
    z: -900,
    rotateX: -70,
  },
  {
    imageSrc: "/1694539877makereignpagecaseclientphotography2x%20(1).png",
    transformOrigin: "50% 0%",
    x: 0,
    y: 0,
    z: -900,
    rotateX: -85,
    opacity: 0.2,
  },
];

const Test = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsOverlayRef = useRef<(HTMLImageElement | null)[]>([]);
  const cardsUnderlayRef = useRef<(HTMLImageElement | null)[]>([]);
  const heading1Ref = useRef<HTMLHeadingElement | null>(null);
  const tagCardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const imageCardRef = useRef<HTMLDivElement | null>(null);
  const wrappers = useRef<(HTMLDivElement | null)[]>([]);
  const inners = useRef<(HTMLDivElement | null)[]>([]);

  // Init Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 4, // slower deceleration
      easing: (t) => 1 - Math.pow(1 - t, 6.5), // smoother easing
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(
    () => {
      const container = containerRef.current;
      const chars1 = containerRef.current?.querySelectorAll(".char");

      if (
        !container ||
        !cardsOverlayRef ||
        !chars1 ||
        chars1.length === 0 ||
        !tagCardsRef
      )
        return;
      //gsap.set(container, { scale: 0.4 }); // Optional, if removing Tailwind scale
      console.log("This is the chars: ", chars1);
      gsap.to(container, {
        scale: 1,
        duration: 3,
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=8000",
          pin: true,
          scrub: 0.1,
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=8000",
          scrub: 0.1,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        container,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "none",
        }
      );

      cardsRef.current.forEach((card, i) => {
        const data = imageData[i];
        if (!data) return;
        if (!card) return;
        tl.fromTo(
          card,
          {
            scale: data.scale || 0.9,
            y: data.y,
            z: data.z,
            rotateX: data.rotateX,
            opacity: data.opacity,
            x: data.x,
            transformOrigin: data.transformOrigin,
            duration: 88,
          },
          {
            scale: 1,
            y: 0,
            z: 0,
            x: 0,
            rotateX: 0,
            opacity: 1,
            duration: 184,
            ease: "none",
          },
          "<"
        );
      });

      tl.to("#first-intro", {
        opacity: 1,
        duration: 150,
      })
        .to(
          "#inner-first-intro",
          {
            opacity: 1,
            duration: 500,
          },
          "+=3"
        )
        .to("#first-intro", {
          opacity: 0,
          duration: 150,
        });

      //Overlay card logic

      cardsOverlayRef.current.forEach((card, index) => {
        tl.fromTo(
          card,
          {
            clipPath: "inset(0 100% 0 0)", // Start: fully hidden from right
          },
          {
            clipPath: "inset(0 0% 0 0)", // End: fully revealed
            duration: 150,
            ease: "power2.out",
          }
        ).fromTo(
          cardsUnderlayRef.current[index],
          {
            clipPath: "inset(0 0% 0 0%)", // Start: fully hidden from right
          },
          {
            clipPath: "inset(0 0 0 100%)", // End: fully revealed
            duration: 150,
            ease: "power2.out",
          },
          "<"
        );
      });

      tl.to("#images-container", {
        scale: 2.5,
        duration: 74,
      });

      tl.to("#second-intro-text", {
        opacity: 1,
        duration: 150,
      });

      chars1.forEach((char) => {
        tl.fromTo(
          char,
          {
            y: 60,
            opacity: 0,
            filter: "blur(8px)",
            position: "absolute",
            fontSize: "8rem",
            x: 5,
          },
          {
            y: 0,
            opacity: 1,
            duration: 5,
            stagger: 0.1,
            filter: "blur(0px)",
            ease: "none",
            fontSize: "inherit",
            position: "relative",
          }
        );
      });

      tl.to("#images-container", {
        scale: 1,
        duration: 74,
      }).to("#second-intro-text", {
        opacity: 0,
        duration: 150,
      });

      tl.to(".images", {
        opacity: 0,
        duration: 250,
      });

      /**
       * This section is to move the different cards to the center of the parent element
       */

      //const container = cardsRef.current[0]?.offsetParent; // Common container of all cards
      const targetCard = cardsRef.current[4];

      if (!targetCard) return;

      const targetX = targetCard.offsetLeft;
      const targetY = targetCard.offsetTop;

      // 2. Add a label to start the cards' center animation
      tl.add("centerCardsStart");

      cardsRef.current.forEach((card, idx) => {
        if (!card || idx === 4) return;

        const cardX = card.offsetLeft;
        const cardY = card.offsetTop;

        const deltaX = targetX - cardX;
        const deltaY = targetY - cardY;

        tl.to(
          card,
          {
            zIndex: idx * 10,
            x: deltaX,
            y: deltaY,
            duration: 200 + 10 * idx,
            ease: "power2.inOut",
          },
          "centerCardsStart" // all start at same label
        );
      });
      tl.add("reduce-cards-size");
      cardsRef.current.forEach((card) => {
        if (!card) return;
        tl.to(
          card,
          {
            width: tagCardsRef.current[4]?.getBoundingClientRect().width,
            height: tagCardsRef.current[4]?.getBoundingClientRect().height,
            opacity: 0,
            duration: 50,
          },
          "reduce-cards-size"
        );
      });

      tl.to("#tagged-cards-container", {
        opacity: 1,
      });

      tl.add("tagged-card-animation");

      /**
       * move in from the center
       */

      tagCardsRef.current.forEach((card) => {
        if (!imageCardRef.current) return;

        const containerRect = imageCardRef.current.getBoundingClientRect();
        const targetX = containerRect.left + containerRect.width / 2;
        const targetY = containerRect.top + containerRect.height / 2;
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;

        const deltaX = targetX - cardCenterX;
        const deltaY = targetY - cardCenterY;

        tl.fromTo(
          card,
          {
            x: deltaX,
            y: deltaY,
          },
          {
            x: 0,
            y: 0,
            duration: 200,
            ease: "power3.out",
          },
          "tagged-card-animation"
        );
      });

      tl.to(".tagged-card", {
        color: "white",
        duration: 100,
      });

      wrappers.current.forEach((card, index) => {
        tl.fromTo(
          card,
          {
            transform: "translate(0%, 100%) translate3d(0px, 0px, 0px)",
          },
          {
            transform: "translate(0%, 0%) translate3d(0px, 0px, 0px)",
            duration: 200,
            ease: "power2.out",
          }
        ).fromTo(
          inners.current[index],
          {
            transform: "translate(0%, -100%) translate3d(0px, 0px, 0px)",
          },
          {
            transform: "translate(0%, 0%) translate3d(0px, 0px, 0px)",
            duration: 200,
            ease: "power2.out",
          },
          "<"
        );
      });

      ScrollTrigger.refresh(); // Optional
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-full -translate-y-[30rem] relative min-h-[100vh]"
    >
      <div
        ref={imageCardRef}
        className="[perspective:1000px] relative w-full h-[100vh] overflow-hidden"
      >
        <div
          id="images-container"
          className="[perspective:1000px] scale-1 relative w-full gap-1 px-1.5 grid grid-cols-3 h-[100vh] "
        >
          {imageData.map((_, idx) => {
            return (
              <div
                ref={(e) => {
                  cardsRef.current[idx] = e;
                }}
                style={{
                  transformOrigin: _.transformOrigin,
                  opacity: 1,
                }}
                className="w-[100%] border-[.1px] border-white/60 relative h-[250px] overflow-hidden lg:h-[100%]"
              >
                <div className="w-full h-full relative">
                  {/* Grayscale left half */}
                  <img
                    src="https://images.unsplash.com/photo-1634703080363-98f94e5a1076?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNjaWZpJTIwZ3V5fGVufDB8fDB8fHwy"
                    alt="Grayscale Half"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    ref={(e) => {
                      cardsOverlayRef.current[idx] = e;
                    }}
                    style={{
                      filter: "grayscale(100%)",
                      transition: "transform 0.5s ease",
                      zIndex: 10,
                    }}
                  />

                  {/* Color right half */}
                  <img
                    src="https://images.unsplash.com/photo-1634703080363-98f94e5a1076?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNjaWZpJTIwZ3V5fGVufDB8fDB8fHwy"
                    alt="Color Half"
                    ref={(e) => {
                      cardsUnderlayRef.current[idx] = e;
                    }}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{
                      transition: "transform 0.5s ease",
                      zIndex: 20,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        id="tagged-cards-container"
        className="w-full h-full absolute opacity-0 inset-0"
      >
        <h1 className="lg:text-xl text-[12px] tagged-card text-transparent text-center mt-[3rem] lg:mt-[12rem] font-bold">
          베스플러스는 독자적인 체계를 통해 <br /> 대한민국 최고의 분양대행사로
          자리매김하고 있습니다
        </h1>

        <div className="w-full list-none gap-6 lg:gap-3 mt-6 lg:mt-10 px-3 h-auto flex-col lg:flex-row flex justify-evenly items-center">
          {[1, 2, 3, 4].map((e, idx) => {
            return (
              <li
                ref={(e) => {
                  tagCardsRef.current[idx] = e;
                }}
                key={e}
                className="lg:w-1/4  w-[85%] flex flex-col bg-zinc-950 place-content-between tagged-card p-2 lg:p-6 font-semibold text-transparent h-[8rem] lg:h-[10rem] border-[.5px] border-white/90 "
              >
                <h2 className="lg:mb-1">분양대행</h2>
                <span className="w-full justify-end flex-1 lg:gap-3 flex items-end flex-col lg:h-auto">
                  <h1 className="lg:text-3xl text-[18px] font-bold">21건</h1>
                  <span className="text-right text-[10px] lg:text-[12px]">
                    체계화된 분양 대행 시스템을 기반으로 <br /> 지속적인 성과를
                    쌓고 있습니다
                  </span>
                </span>
              </li>
            );
          })}
        </div>
      </div>

      <CrazyParallax wrappers={wrappers} inners={inners} />

      <div
        id="first-intro"
        className="w-screen inset-0 text-[16px] lg:text-2xl font-semibold scale-1 flex gap-8 opacity-0 items-center justify-center h-screen absolute bg-black/95"
      >
        Into the world{" "}
        <span id="inner-first-intro" className="text-[#b19876] opacity-0">
          crafted
        </span>
        for your assesibiliy
      </div>
      <div
        id="second-intro-text"
        className="w-screen inset-0 p-4 lg:p-0 scale-1 flex gap-8 opacity-0 items-center justify-center h-screen absolute bg-black/95"
      >
        <div className="flex-col lg:flex-row flex gap-10">
          <div className="lg:text-[1.45rem] text-[16px]">
            {/* 목표는 <br /> 막연히 잘 파는 것이 아닙니다 <br />{" "}
            <span className="text-[#b19876]">완벽한 분양 시장을</span>만드는
            것입니다 */}
            <StaggeredText text="Crafted" className="" ref={heading1Ref} />
            <StaggeredText
              text="for the eye, perfected"
              className=""
              ref={heading1Ref}
            />
            <StaggeredText
              text="for the touch"
              className="text-[#b19876]"
              ref={heading1Ref}
            />
            <StaggeredText text="— this is UI reimagined." ref={heading1Ref} />
          </div>
          <div className="flex flex-col gap-6">
            <div className="leading-tight">
              <StaggeredText
                text="Not just a user interface"
                className=""
                ref={heading1Ref}
              />{" "}
              <br />{" "}
              <StaggeredText
                text="— an experience choreographed to perfection."
                className=""
                ref={heading1Ref}
              />{" "}
              <br />{" "}
              <StaggeredText
                text="Where motion meets emotion, and design becomes destiny."
                className=""
                ref={heading1Ref}
              />{" "}
              <br />{" "}
              <StaggeredText
                text="An interface so seamless"
                className=" mt-10"
                ref={heading1Ref}
              />
              <br />{" "}
              <StaggeredText
                text="it disappears — leaving only the feeling behind."
                className=""
                ref={heading1Ref}
              />
            </div>
            <motion.button
              animate={{
                x: true ? [0, -5, 5, -5, 5, 0] : 0,
              }}
              transition={{
                duration: 0.5,
                ease: "linear",
                repeat: Infinity,
              }}
              className="w-[250px] mt-4 lg:w-[300px] rounded-full h-[2.5rem] border-white border-[1.2px] p-5 flex items-center justify-center gap-2 text-[22px]"
            >
              <span className="lg:text-[13px] text-[10px] tracking-tight">
                완벽한 분양 시장 만들어 가는 과정 보기
              </span>
              <GoPlus />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
