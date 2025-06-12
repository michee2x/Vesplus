import { useRef } from 'react'
import NavBar from '../Components/NavBar'
import {motion} from "motion/react"
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({
  ignoreMobileResize: false,
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
});

const StaggeredText = ({text, className, delay = 0}:{text:string, className?:string, delay?:number}) => {
  return (
    <h1
      className={`flex gap-1.5 lg:gap-6 w-auto h-fit overflow-hidden ${className}`}
    >
      {text.split(" ").map((word, idx) => {
        return (
          <motion.li id={`${idx}`} className="flex">
            {word.split("").map((text, id) => {
              return (
                <motion.div
                  id={`${id}`}
                  initial={{ y: 90 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: ((0.1 * id + idx * 0.5) * 0.3) + delay,
                  }}
                >
                  {text}
                </motion.div>
              );
            })}
          </motion.li>
        );
      })}
    </h1>
  );
}

const Hero = () => {
  const cardRef = useRef<HTMLUListElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const cardsWrapperRef = useRef<HTMLUListElement | null>(null);


  useGSAP(() => {
    const container = containerRef.current;
    const cardsWrapper = cardsWrapperRef.current;
    const cards = cardsRef.current;

    if (!container || !cardsWrapper) return;

    const totalCards = cards.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${totalCards * window.innerWidth * 0.5}`, // scroll distance
        scrub: true,
        pin: true,
      },
    });

    cards.forEach((_, i) => {
      tl.to(
        cardsWrapper,
        {
          xPercent: (-100 * (i + 1)) / totalCards,
          ease: "ease.inOut",
          duration: 1,
        },
        "+=0.7"
      ); // hang before moving
    });

    // Now each card animation when it hits the left
    cards.forEach((card, i) => {
      if (!card) return;

      ScrollTrigger.create({
        trigger: card,
        containerAnimation: tl,
        start: "left left",
        end: "+=600",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress < 0.3) {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              ease: "none",
              overwrite: true,
            });
          } else {
            const slideProgress = (progress - 0.3) / 0.7;
            gsap.to(card, {
              opacity: 1 - slideProgress,
              y: slideProgress * 400,
              ease: "power1.inOut",
              overwrite: true,
            });
          }
        },
      });
    });
  });
  
  
  
  return (
    <div className="max-w-screen lg:px-4 h-screen">
      <NavBar />

      <div
        ref={containerRef}
        className="flex px-3 w-full pt-28 lg:pt-14 h-full flex-col place-content-between"
      >
        <div className="herotext w-fit h-auto text-[5vw] uppercase font-bold">
          <StaggeredText
            text="We Craete the Perfect"
            className="text-white leading-[9vw] lg:leading-[6.6vw] lg:text-[5vw] text-[7vw]"
          />
          <StaggeredText
            text="Real Estate Market"
            className="text-[#b19876] leading-[9vw] lg:leading-[6.6vw] text-[8.5vw] lg:text-[6.1vw]"
            delay={0.5}
          />
        </div>

        <div className="lg:px-6 mb-8 w-full">
          <h1 className="text-[17px] mb-5 lg:mb-0 font-semibold lg:text-[1.6rem] pl-1 uppercase">
            A Leading Consulting Firm For Sales
          </h1>

          <div className="h-[450px] overflow-hidden relative lg:h-auto w-full">
            <ul
              ref={cardsWrapperRef}
              className="flex h-full gap-2 items-center"
              style={{ width: "max-content" }}
            >
              {[
                "http://localhost:5173/1694012779makereignteampagelukeengel.png",
                "/1694012819makereignteampagenataliedecanha.png",
                "/1694073882makereignpagecaseethnicmaskfloating2x.jpg",
                "/1694074773makereigntbcwomanafrohairstylevodacomlogo2x.jpg",
                "/1694170255makereignpagecaseappagencyclientmobile2x.jpg",
                "/1694539877makereignpagecaseclientphotography2x%20(1).png",
              ].map((e, i) => (
                <li
                  key={i}
                  ref={(el) => {
                    cardsRef.current[i] = el;
                  }}
                  className="min-w-[120vw] lg:min-w-[40vw] relative h-[35vh] lg:h-[40vh] bg-teal-500 rounded-2xl flex items-center justify-center text-4xl font-bold"
                >
                  <img
                    className="w-full absolute inset-0 h-full object-cover"
                    src={e}
                    alt={e}
                  />
                </li>
              ))}
            </ul>
            <div className="absolute lg:hidden bottom-5 w-fit h-auto uppercase">
              (Scroll For More)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero