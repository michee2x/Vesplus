import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const images = [
  "https://cdn.prod.website-files.com/681b04c67ed0d3f6f2904e8d/681b04c67ed0d3f6f29051aa_img_Vl7D.webp",
  "https://cdn.prod.website-files.com/681b04c67ed0d3f…2904e8d/68204efded19e45df89c4113_Stylish_man.webp",
  "https://cdn.prod.website-files.com/681b04c67ed0d3f…68204fc13ea22ac67dd00dbb_Matte_white_speaker.webp",
  "https://cdn.prod.website-files.com/681b04c67ed0d3f…8d/682050ec1a0689f38e6106a9_A_stylish_woman2.webp",
  "https://cdn.prod.website-files.com/681b04c67ed0d3f6f2904e8d/681b04c67ed0d3f6f29051b7_img_prCa.webp",
];

const BloomRHero = () => {
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const container = useRef(null)

  useGSAP(() => {
    if (!imagesRef.current.length || !container.current) return;

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:container.current,
        start:"top 20%"
      }
    });

    imagesRef.current.forEach((card, idx) => {
      if (!card) return;
      console.log("idx", idx, card);
      tl.fromTo(
        card,
        { y: "-100rem" },
        { y: "0%", duration: 1.2, ease: "power2.inOut", delay: idx * 0.01 },
        "<"
      );
    });

    tl.add("unfold");

    imagesRef.current.forEach((card, idx) => {
      if (!card) return;
      const rotation = () => {
        return idx - 2;
      };
      tl.to(
        card,
        {
          rotateZ: rotation() * -30,
          zIndex: idx + 1,
        },
        "unfold"
      );
    });

    tl.add("rotate-one")

    imagesRef.current.forEach((card, idx) => {
      if (!card) return;
      const rotation = () => {
        return idx - 2;
      };
      tl.to(
        card,
        {
          rotateZ: rotation() * 31,
          duration: 2,
          ease: "power2.inOut",
        },
        "rotate-one"
      );
    });
  });
  return (
    <div ref={container} className="w-screen relative overflow-hidden h-[120vh] ">
      <main className="w-full pt-[7rem] h-full text-white relative inset-0">
        <h1 className="text-[22vw] uppercase w-fit mx-auto flex items-start leading-[10rem] h-fit relative md:text-[7rem] text-center trackin font-semibold lg:text-[12rem]">
          Zoom
        </h1>
        <div className="absolute tracking-wide uppercase text-center leading-[3vw] lg:leading-[1.3vw] -translate-x-1/2 text-[12px] font-thin left-1/2 bottom-36 lg:bottom-20">
        A Dynamic Agency <br /> dedicated to bringing <br /> innovative ideas to life
        </div>
      </main>

      <div style={{perspective:"100vh", transformOrigin:"50% 100%", flexFlow:"row"}} className="w-full overflow-hidde flex justify-center items-end top-[8vh] absolute inset-0 z-50 h-screen">
        {images.map((_, idx) => {
          return (
            <div
              ref={(el) => {
                imagesRef.current[idx] = el;
              }}
              style={{
                transform:
                  "translate3d(0rem, 0rem, 0px) bg-black scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                transformOrigin: "50% 110%",
              }}
              className="absolute flex items-center justify-center h-full w-fit"
            >
              <img
                src="	https://framerusercontent.com/images/2msvNgNnFnMolGjz0YcOK7V5s.png"
                alt=""
                className="lg:min-w-[8rem] min-w-[4rem] h-[14rem] inline-block align-middle rounded-xl flex-shrink-0 lg:h-[18rem] bg-cover"
                style={{
                  boxShadow: "-1rem 1rem 2rem #0000000f",
                  objectPosition: "50% 50%",
                  overflow: "clip",
                  overflowClipMargin: "content-box",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BloomRHero;




/**
 * https://blacknegative.com/#!/home/ = their bavbar is lovely
 * 
 * http://www.because-recollection.com/ = top notch active animation. a 5.0
 */
