"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useScroll, useTransform, motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export default function RotatingCards() {
const container = useRef<HTMLDivElement | null>(null);
const cardContainer = useRef<HTMLDivElement | null>(null);
const { scrollYProgress } = useScroll({
  target: container,
  offset: ["end end", "start start"],
});

const YDeg = useTransform(
  scrollYProgress,
  [0, 1],
  [0, 300]
);
  return (
    <div
      ref={container}
      className="h-[400vh] max-w-screen relative mt-16 lg:mt-40"
    >
      <div
        style={{ perspective: "100vh", transformOrigin: "50%" }}
        className="flex w-screen sticky overflow-hidden top-0 items-center justify-center h-screen"
      >
        <motion.div
          ref={cardContainer}
          className="will-change-transform relative flex items-center justify-center"
          style={{
            rotateX: 0,
            rotateY: YDeg,
            transformStyle: "preserve-3d",
            transformOrigin: "50%",
          }}
        >
          {cards.map((e) => {
            return (
              <div
                key={e.image}
                style={{
                  transform: e.transform,
                  transformStyle: "preserve-3d",
                  transformOrigin: e.transformOrigin,
                }}
                className="overflow-hidden flex items-center justify-center size-[320px] absolute"
              >
                <img
                  src={e.image}
                  alt=""
                  className="lg:w-[75%] w-[65%] rounded-2xl h-[320px] object-cover"
                  style={{ transformStyle: "preserve-3d" }}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

const cards = [
  {
    image:
      "https://cdn.prod.website-files.com/67de676f1c598cfa54564cc1/6811c75aae7b58af831e32c9_Work4us.webp",
    transform: "translate3d(0, 0, 277px)",
    transformOrigin: "50%",
  },
  {
    image:
      "https://cdn.prod.website-files.com/67de676f1c598cfa54564cc1/6811c78dfb1a4cc55ab401f5_Work1us.webp",
    transform: "translate(-160px) rotateX(0) rotateY(-60deg) rotateZ(0)",
    transformOrigin: "0%",
  },
  {
    image:
      "https://cdn.prod.website-files.com/67de676f1c598cfa54564cc1/6811c79d03eadde5121b235b_Hero1us2.webp",
    transform:
      "translate3d(0, 0, -277px) rotateX(0) rotateY(-120deg) rotateZ(0)",
    transformOrigin: "0%",
  },
  {
    image:
      "https://cdn.prod.website-files.com/67de676f1c598cfa54564cc1/6811c9389a8d857a0500c0d1_Gravity.webp",
    transform: "rotateX(0) rotateY(180deg) rotateZ(0) translate3d(0, 0, 277px)",
    transformOrigin: "50%",
  },
  {
    image:
      "https://cdn.prod.website-files.com/67de676f1c598cfa54564cc1/6811c8cac92136775a2c920a_Avant.webp",
    transform:
      "translate3d(0, 0, -277px) rotateX(0) rotateY(120deg) rotateZ(0)",
    transformOrigin: "100%",
  },
  {
    image:
      "https://cdn.prod.website-files.com/67de676f1c598cfa54564cc1/6811c9cbd52be108a63ddd91_Seasons.webp",
    transform: "translate(160px) rotateX(0) rotateY(60deg) rotateZ(0)",
    transformOrigin: "100%",
  },
];
