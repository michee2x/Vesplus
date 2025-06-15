
import React from "react";

interface ImageData {
  src: string;
  title: string;
  desc:string;
}

const images: ImageData[] = [
  {
    src: "https://framerusercontent.com/images/yZoMvO0TESoI9cPhJlOtjaAmD4.jpeg?scale-down-to=2048",
    title: "UI/UX",
    desc: "I love working on cool UI/UX Interfaces",
  },
  {
    src: "https://framerusercontent.com/images/nFFMNvNEwawVJslX5P3JgXi3X14.jpeg",
    title: "ADVANCE PROBLEM SOLVING",
    desc: "Having Been trained to task my mind in understanding the dynamics of the universe at twelve - i have created thinking structures over the time",
  },
  {
    src: "https://framerusercontent.com/images/7FZC1fiWDceTZbwIDDn1Yjuc4fc.png",
    title: "The Music",
    desc: "At the schools, during dev, while reading, playing games, even sleeping - i do listen to music",
  },
  {
    src: "https://framerusercontent.com/images/syk9iVXFELN2JOZaJhZR7LQT1Y.jpg?scale-down-to=1024",
    title: "ART",
    desc: "Working on lot's of advance sketches and paintings as a lad, drawing comics and getting paid at school was insane",
  },
  {
    src: "https://framerusercontent.com/images/nnErOjBA50ZdgYHlb3VxEnmrwU.jpg?scale-down-to=1024",
    title: "WEB DEV",
    desc: "I love writing code and want to help others too. I have worked on a lot of frotends than backend because who doesn't like daylight...",
  },
];

export const CrazyParallax = ({
  wrappers,
  inners,
}: {
  wrappers: React.RefObject<(HTMLDivElement | null)[]>;
  inners: React.RefObject<(HTMLDivElement | null)[]>;
}) => {
  return (
    <div
      style={{
        bottom: 0,
        height: "100vh",
        position: "absolute",
        left: 0,
        overflow: "visible",
        width: "100%",
        willChange: "transform",
        zIndex: 3000,
        background: "transparent",
      }}
    >
      {images.map((e, idx) => {
        return (
          <div
            key={idx}
            className="portfolio-wrapper"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              background: "transparent",
              height: "100%",
              left: 0,
              overflow: "hidden",
              position: "absolute",
              top: 0,
              width: "100%",
              zIndex: 1,
            }}
            ref={(el) => {
              wrappers.current[idx] = el;
            }}
          >
            <div
              className="portfolio"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                alignContent: "center",
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
                height: "100%",
                justifyContent: "center",
                left: 0,
                overflow: "hidden",
                position: "absolute",
                top: 0,
                width: "100%",
                background: "black",
              }}
              ref={(el) => {
                inners.current[idx] = el;
              }}
            >
              <img
                className="portfolio-thumbnail absolute inset-0 grayscale w-full h-full object-cover"
                src={e.src}
                alt="금강펜테리움 더시글로 코벤트워크 검단Ⅰ-thumbnail"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-800/10 to-bg-transparent" />

              <div className="absolute flex flex-col justify-end p-5 lg:p-16 gap-8 inset-0">
                <h1
                  className={`text-[2rem] lg:text-[5rem] tracking-normal lg:leading-[4rem] font-extrabold  max-w-6xl`}
                >
                  {e.title}
                </h1>
                <p
                  className={`text-[18px] font-semibold lg:text-2xl text-white/70 max-w-xl`}
                >
                  {e.desc}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
