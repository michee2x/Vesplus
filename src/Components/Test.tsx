import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { GoPlus } from "react-icons/go";

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
  const cardsOverlayRef = useRef<(HTMLDivElement | null)[]>([]);

  // Init Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 6.5, // slower deceleration
      easing: (t) => 1 - Math.pow(1 - t, 5), // smoother easing
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
      if (!container || !cardsOverlayRef) return;

      //gsap.set(container, { scale: 0.4 }); // Optional, if removing Tailwind scale

      gsap.to(container, {
        scale: 1,
        duration: 3,
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=7000",
          pin: true,
          scrub: 0.1,
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7000",
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
            duration:88
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
        .to("#inner-first-intro", {
          opacity: 1,
          duration:500,
        }, "+=20")
        .to("#first-intro", {
          opacity: 0,
          duration:150,
        });

      //Overlay card logic

      cardsOverlayRef.current.forEach((card) => {
        if (!card) return;
        tl.to(card, {
          width: 0,
          duration: 174,
        });
      });

      tl.to("#images-container", {
        scale:2.5,
        duration:74
      })
      
      tl.to("#second-intro-text", {
        opacity:1,
        duration:150
      });

      ScrollTrigger.refresh(); // Optional
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-full relative -translate-y-[40rem] h-[700vh]"
    >
      <div className="[perspective:1000px] relative w-full h-[100vh] overflow-hidden">
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
                className="w-[100%] relative h-[250px] overflow-hidden lg:h-[100%]"
              >
                <div className="relative w-full h-64">
                  <img
                    src={_.imageSrc}
                    alt="Split image"
                    className="w-full h-full object-cover"
                  />
                  <div
                    ref={(e) => {
                      cardsOverlayRef.current[idx] = e;
                    }}
                    className="absolute inset-0 w-full transition-transform duration-500 filter grayscale overflow-hidden"
                  >
                    <img
                      src={_.imageSrc}
                      alt="Grayscale half"
                      className="w-[50rem] h-[25rem] object-cover origin-top-left"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="first-intro"
        className="w-screen inset-0 text-[16px] lg:text-2xl font-semibold scale-1 flex gap-8 opacity-0 items-center justify-center h-screen absolute bg-black/95"
      >
        아직 분양 시장은{" "}
        <span id="inner-first-intro" className="text-[#b19876] opacity-0">
          완벽
        </span>
        하지 않습니다
      </div>
      <div
        id="second-intro-text"
        className="w-screen inset-0 p-4 lg:p-0 scale-1 flex gap-8 opacity-0 items-center justify-center h-screen absolute bg-black/95"
      >
        <div className="w-fit height-fit flex-col lg:flex-row flex gap-10">
          <div className="lg:text-[1.45rem] text-[16px]">
            목표는 <br /> 막연히 잘 파는 것이 아닙니다 <br />{" "}
            <span className="text-[#b19876]">완벽한 분양 시장을</span>만드는
            것입니다
          </div>
          <div className="flex flex-col gap-6">
            <div>
              대한민국에서 <br /> 가장 값비싼 물건을 판매하는 일임에도 불구하고{" "}
              <br /> 정확한 체계에 따른 영업을 하는 전문가는 찾아볼 수
              없었습니다 <br />
              <br /> 철저한 교육을 바탕으로 <br /> 양성된 전문가들에 움직이는
              분양 시장을 만들기 위해 <br />
              베스플러스는 분양 영업의 체계화에 나섰고 <br /> 독보적인 분양
              성과로 증명하였습니다
            </div>
            <button className="w-[78%] rounded-full h-[2.5rem] border-white border-[1.2px] p-5 flex items-center justify-center gap-2 text-[22px]">
              <span className="lg:text-[13px] text-[10px] tracking-tight">
                완벽한 분양 시장 만들어 가는 과정 보기
              </span>
              <GoPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
