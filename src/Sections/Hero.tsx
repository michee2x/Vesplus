import { useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import StaggeredText from '../Components/StaggeredText'
import {motion} from "motion/react"

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({
  ignoreMobileResize: false,
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
});

const Hero = () => {
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
    cards.forEach((card) => {
      if (!card) return;

      ScrollTrigger.create({
        trigger: card,
        containerAnimation: tl,
        start: "left left",
        end: "+=300",
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
      <div
        ref={containerRef}
        className="flex px-3 w-full pt-28 lg:pt-14 max-h-screen flex-col lg:place-content-between"
      >
        <div className="herotext  w-fit h-auto text-[5vw] uppercase font-bold">
          <StaggeredText
            text="Fuck Simple!"
            className="text-white mt-4 leading-[9vw] lg:leading-[6.6vw] lg:text-[5vw] text-[7vw]"
            ref={heading1Ref}
          />
          <StaggeredText
            text="I Want Magic..."
            className="text-white/70 leading-[9vw] lg:leading-[6.6vw] text-[8.5vw] lg:text-[6.1vw]"
            ref={heading2Ref}
          />
        </div>

        <div className=" mt-[6rem] w-full">
          <h1 className="text-[17px] mb-5 lg:mb-0 font-semibold lg:text-[1.4rem] pl-1 uppercase">
            Advanced animated Sections Unvieled
          </h1>

          <div className="h-[480px] overflow-hidden relative lg:h-auto w-full">
            <ul
              ref={cardsWrapperRef}
              className="flex h-full gap-2 items-center"
              style={{ width: "max-content" }}
            >
              {[
                "https://images.unsplash.com/photo-1634703080363-98f94e5a1076?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNjaWZpJTIwZ3V5fGVufDB8fDB8fHwy",
                "https://images.unsplash.com/photo-1655777124904-0b1ac542841b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fFNjaWZpJTIwZ3V5fGVufDB8fDB8fHwy",
                "https://images.unsplash.com/photo-1737648055522-549f619dd904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fFNjaWZpJTIwYXJ0aWZhY3R8ZW58MHx8MHx8fDI%3D",
                "https://images.unsplash.com/photo-1576934052291-cc1f5cc9b9cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fFNjaWZpJTIwY2Fyc3xlbnwwfHwwfHx8Mg%3D%3D",
                "https://images.unsplash.com/photo-1702499903230-867455db1752?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2NpZmklMjBwaG9uZXxlbnwwfHwwfHx8Mg%3D%3D",
                "https://images.unsplash.com/photo-1583307709855-88a955597645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHNjaWZpJTIwd2lsZGxpZmV8ZW58MHx8MHx8fDI%3D",
              ].map((e, i) => (
                <li
                  key={i}
                  ref={(el) => {
                    cardsRef.current[i] = el;
                  }}
                  className="min-w-[120vw] lg:min-w-[40vw] relative h-[35vh] lg:h-[40vh] rounded-2xl flex items-center justify-center text-4xl font-bold"
                >
                  <motion.img
                    animate={{
                      x: true ? [0, -2.2, 2.2, -2.2, 2.2, 0] : 0,
                      y: true ? [0, 2.2, -2.2, 2.2, -2.2, 0] : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    className="w-full absolute inset-0 h-full object-cover"
                    src={e}
                    alt={e}
                  />
                </li>
              ))}
            </ul>
            <div className="absolute lg:hidden bottom-10 w-fit h-auto uppercase">
              (Scroll For More)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero