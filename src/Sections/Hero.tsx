import { useRef } from 'react'
import NavBar from '../Components/NavBar'
import {motion} from "motion/react"
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import StaggeredText from '../Components/StaggeredText'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({
  ignoreMobileResize: false,
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
});

const Hero = () => {
  const cardRef = useRef<HTMLUListElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const cardsWrapperRef = useRef<HTMLUListElement | null>(null);
  const heading1Ref = useRef<HTMLHeadingElement>(null);
  const heading2Ref = useRef<HTMLHeadingElement>(null);
  const heroSectionRef = useRef<HTMLDivElement | null>(null);


  useGSAP(() => {
    const container = containerRef.current;
    const cardsWrapper = cardsWrapperRef.current;
    const cards = cardsRef.current;
    const chars1 = heading1Ref.current?.querySelectorAll(".char");
    const chars2 = heading2Ref.current?.querySelectorAll(".char");

    if (!container || !cardsWrapper || !chars1 || !chars2 || !heroSectionRef) return;


    if (chars1) {
      gsap.fromTo(
        chars1,
        { y: 160, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.04,
          delay:0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading1Ref.current,
            start: "top 80%",
          },
        }
      );
    }

    if (chars2) {
      gsap.fromTo(
        chars2,
        { y: 160, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.06,
          delay:0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading2Ref.current,
            start: "top 80%",
          },
        }
      );
    }

    const totalCards = cards.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${totalCards * window.innerWidth * 0.5}`, // scroll distance
        scrub: true,
        pin: true,
        anticipatePin: 1,
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

    const finalCardDuration = 1; // Same as the card tween duration

    tl.fromTo(
      chars1,
      { y: 0, opacity: 1 },
      {
        y: 160,
        opacity: 0,
        duration: finalCardDuration,
        stagger: 0.02,
        ease: "power3.out",
      },
      `-=1` // ensure it ends with the last card scroll
    ).to(
      heroSectionRef.current,
      {
        opacity: 0,
        duration: finalCardDuration,
        ease: "power3.out",
      },
      `-=1`
    );

    

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
              ease: "none",
              overwrite: true,
            });
          }
        },
      });
    });
  });
  
  
  
  return (
    <div ref={heroSectionRef} className="max-w-screen lg:px-4 min-h-screen">
      <NavBar />

      <div
        ref={containerRef}
        className="flex px-3 w-full pt-28 lg:pt-14 h-full flex-col place-content-between"
      >
        <div className="herotext  w-fit h-auto text-[5vw] uppercase font-bold">
          <StaggeredText
            text="We Craete the Perfect"
            className="text-white leading-[9vw] lg:leading-[6.6vw] lg:text-[5vw] text-[7vw]"
            ref={heading1Ref}
          />
          <StaggeredText
            text="Real Estate Market"
            className="text-[#b19876] leading-[9vw] lg:leading-[6.6vw] text-[8.5vw] lg:text-[6.1vw]"
            ref={heading2Ref}
          />
        </div>

        <div className=" mt-[6rem] w-full">
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