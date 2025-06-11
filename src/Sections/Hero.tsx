import React, { useEffect, useRef } from 'react'
import NavBar from '../Components/NavBar'
import {motion} from "motion/react"
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

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


  useGSAP(() => {
      if(!containerRef || !cardRef || cardsRef.current.length === 0) return;

      console.log("This is cardRef: ", cardRef);
      console.log("This is cardsRef: ", cardsRef);
      
      gsap.to(cardRef.current, {
        scrollTrigger:{
          trigger:containerRef.current,
          start:"bottom bottom",
          scrub:true,
          pin:true
        },
        x:-3000,
        duration:2,
        ease:"power2.inOut"
      })

      cardsRef.current.forEach(card => {
        if(!card) return;
      const positionFromCenter = () => (card.offsetLeft + (card.offsetWidth / 2)) - (window.innerWidth /2);

      // ScrollTrigger.create({
      //   trigger: containerRef.current,
      //   start: () => `left ${positionFromCenter() - 100}`,
      //   end:() => `left ${positionFromCenter() + 100}`,
      //   scrub: true,
      //   onUpdate: (self) => {
      //     const progress = self.progress;
      //     // Use gsap.set instead of gsap.to for instant update
      //     gsap.set(card, {
      //       opacity: 1 - progress,
      //       y: progress * 100,
      //     });
      //     // gsap.to(card, {
      //     //   opacity: 1 - progress,
      //     //   y: progress * 100,
      //     //   ease:"power2.out"
      //     // })
      //   }
      // })

      })

  }, {dependencies:[], scope:containerRef})
  
  return (
    <div className="w-full lg:px-4 h-screen">
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

        <div className="lg:px-6 w-full">
          <h1 className="text-[17px] mb-16 lg:mb-0 font-semibold lg:text-[1.6rem] pl-1 uppercase">
            A Leading Consulting Firm For Sales
          </h1>

          <div className="h-[350px] relative lg:h-auto overflow-x-hidden w-full">
            <ul
              ref={cardRef}
              className="flex h-[250px] min-h-full gap-6 items-center"
            >
              {[
                "http://localhost:5173/1694012779makereignteampagelukeengel.png",
                "/1694012819makereignteampagenataliedecanha.png",
                "/1694073882makereignpagecaseethnicmaskfloating2x.jpg",
                "/1694074773makereigntbcwomanafrohairstylevodacomlogo2x.jpg",
                "/1694170255makereignpagecaseappagencyclientmobile2x.jpg",
                "/1694539877makereignpagecaseclientphotography2x%20(1).png",
              ].map((e, idx) => {
                return (
                  <li
                    key={e}
                    ref={(el) => {
                      cardsRef.current[idx] = el
                    }}
                    className={`min-w-[570px] overflow-hidden relative h-[250px] lg:h-[280px] bg-zinc-400`}
                  >
                    <img
                      className="w-full absolute inset-0 h-full object-cover"
                      src={e}
                      alt={e}
                    />
                    <div className="w-full flex flex-col p-4 justify-end h-full absolute z-50 bg-gradient-to-bl from-transparent via-transparent to-black/60">
                      <p>
                        Lorem ipsum dolor sit, amet
                      </p>
                      <p>
                        tenetur incidunt harum
                      </p>
                    </div>
                    <div className="absolute lg:hidden bottom-0 w-full h-1/2 bg-gradient-to-br from-transparent via-transparent to-black"></div>
                  </li>
                );
              })}
            </ul>
            <div className="fixed bottom-0 right-0 w-1/4 h-full bg-gradient-to-r from-transparent via-transparent to-black"></div>
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