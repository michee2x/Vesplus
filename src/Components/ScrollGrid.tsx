import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const ScrollGrid = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Init Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => 1 - Math.pow(1 - t, 4), // ease-out
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
  

  useGSAP(() => {
    if (!cardsRef.current || !containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200",
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      tl.fromTo(
        card,
        {
          ...rotate(i),
          scale: 0.7,
          z: -300,
          opacity: 0.4,
          transform: "translate3d(0px, 518px, -900px) rotateX(-70deg)",
        },
        {
          rotate: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          z: 0,
          opacity: 1,
          duration: 1,
          ease: "none",
          x: 0,
          y: 0,
        },
        "<" // start all at same time
      );
    });
  }, []);

  const imageUrls = [
    "http://localhost:5173/1694012779makereignteampagelukeengel.png",
    "/1694012819makereignteampagenataliedecanha.png",
    "/1694073882makereignpagecaseethnicmaskfloating2x.jpg",
    "/1694074773makereigntbcwomanafrohairstylevodacomlogo2x.jpg",
    "/1694170255makereignpagecaseappagencyclientmobile2x.jpg",
    "/1694539877makereignpagecaseclientphotography2x%20(1).png",
    "/1694074773makereigntbcwomanafrohairstylevodacomlogo2x.jpg",
    "/1694170255makereignpagecaseappagencyclientmobile2x.jpg",
    "/1694539877makereignpagecaseclientphotography2x%20(1).png",
  ];

  const rotate = (x: number) => {
    if ([0, 3, 6].includes(x)) {
      return {
        rotate: -15,
        zIndex: 0,
        x: "23%",
      };
    } else if ([2, 5, 8].includes(x)) {
      return {
        rotate: 15,
        zIndex: 0,
        x: "-23%",
      };
    } else {
      return {
        rotate: 0,
        zIndex: 1,
        y:-20
      };
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-[200vh] overflow-hidden bg-blue-500 w-screen p-4"
    >
      <div
        className="grid grid-cols-3 gap-2 h-[90vh] w-full"
        style={{ perspective: "1000px" }}
      >
        {imageUrls.map((src, index) => (
          <div
            key={index}
            style={{
              transformStyle: "preserve-3d",
            }}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="bg-white h-full overflow-hidden"
          >
            <img
              src={src}
              alt={`image-${index}`}
              className="w-full h-full object-cover grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollGrid;
