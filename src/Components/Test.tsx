import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, number } from "motion/react";
import Lenis from "@studio-freight/lenis"

gsap.registerPlugin(ScrollTrigger);

type imageDts = {
        imageSrc?: string,
        transformOrigin?: string,
        x?: number | string,
        y?: number | string,
        z?: number | string,
        rotateX?: number,
        opacity?:number,
        scale?:number
      
}[]

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

  // Init Lenis for smooth scrolling
    useEffect(() => {
      const lenis = new Lenis({
        duration: 2,
        easing: (t) => 1 - Math.pow(1 - t, 10), // ease-out
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
      if (!container) return;

      //gsap.set(container, { scale: 0.4 }); // Optional, if removing Tailwind scale

      gsap.to(container, {
        scale: 1,
        duration: 3,
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=500",
          pin: true,
          scrub: true,
        },
      });

      const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=200",
              scrub: 0.5,
              anticipatePin: 1,
            },
          });

          tl.fromTo(container, { opacity:0}, {
            opacity:1,
            ease:"none"
          })

          cardsRef.current.forEach((card, i) => {
            const data = imageData[i]
            if(!data) return;
            if (!card) return;
            tl.fromTo(
              card,{
                scale:data.scale || 0.9,
                y: data.y,
                z: data.z,
                rotateX: data.rotateX,
                opacity: data.opacity,
                x:data.x,
                transformOrigin:data.transformOrigin
              },
              {
                scale: 1,
                y: 0,
                z: 0,
                x:0,
                rotateX: 0,
                opacity: 1,
                duration: 1,
                ease: "none",
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
      className="[perspective:1000px] transform -translate-y-[45rem] gap-1.5 px-1.5 grid grid-cols-3 w-full h-[100vh]"
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
            className="w-[100%] h-[250px] overflow-hidden lg:h-[100%]"
          >
            <img
              src={_.imageSrc}
              alt={`${_.imageSrc}`}
              className="w-full h-full object-cover grayscale"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Test;



