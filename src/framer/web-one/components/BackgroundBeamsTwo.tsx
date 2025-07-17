import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useMemo, useRef, useState } from "react";

export default function BackgroundBeamsTwo() {
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const cardsTwo = useRef<(HTMLDivElement | null)[]>([]);
  const [centerCardPrevPositon, setcenterCardPrevPositon] = useState("left");

  const [screenWidth, setScreenWidth] = useState(1024); //default to desktop screen width

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  // const images = [
  //   "https://framerusercontent.com/images/OqmqB0E9qAS1VdvYZEFiBEOYyQ.jpeg?scale-down-to=512",
  //   "https://framerusercontent.com/images/lvGVLEmxOkomFjy2EsSMpiOn8A.jpg?scale-down-to=2048",
  //   "https://framerusercontent.com/images/z4lmYYx4PG1X0rHcR8vtMrYKbek.png",
  //   "https://framerusercontent.com/images/hEVNR5OGbspHZV7GaZfKNk8B3fs.png?scale-down-to=1024",
  //   "https://framerusercontent.com/images/jcw2MsUlW3EJgHYvMmM4IJVAY.jpg?scale-down-to=1024",
  //   "https://framerusercontent.com/images/bS5yI534QrgZ6plEFuXPt84TkA.png",
  // ];

  //Responsive transform values

  const { parts, partsTwo } = useMemo(() => {
    const isMobile = screenWidth < 768;

    const space = !isMobile ? 20 : 10;
    const depth = !isMobile ? 10 : 10;
    return {
      parts: [
        {
          transform: `translate3d(0px, 0px, 0px)`,
          opacity: 1,
        },
        {
          transform: `translate3d(-${space * 10}px, 0px, -${depth * 10}px)`,
          opacity: 1,
        },
        {
          transform: `translate3d(-${space * 20}px, 0px, -${depth * 20}px)`,
          opacity: 1,
        },
        {
          transform: `translate3d(-${space * 30}px, 0px, -${depth * 30}px)`,
          opacity: 1,
        },
        {
          transform: `translate3d(-${space * 40}px, 0px, -${depth * 40}px)`,
          opacity: 0,
        },
        {
          transform: `translate3d(${space * 15}px, 0px, 0px)`,
          opacity: 1,
        },
      ],
      partsTwo: [
        {
          transform: `translate3d(${isMobile ? "200px" : "0px"}, 0px, 0px)`,
          opacity: 1,
        },
        {
          transform: `translate3d(${space * 10}px, 0px, -${depth * 10}px)`,
          opacity: 1,
        },
        {
          transform: `translate3d(${space * 20}px, 0px, -${depth * 20}px)`,
          opacity: 1,
        },
        {
          transform: `translate3d(${space * 30}px, 0px, -${depth * 30}px)`,
          opacity: 1,
        },
        {
          transform: `translate3d(${space * 40}px, 0px, -${depth * 40}px)`,
          opacity: 0,
        },
        { transform: `translate3d(-${space * 15}px, 0px, 0px)`, opacity: 1 },
      ],
    };
  }, [screenWidth]);

  const [movement, setMovement] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    if (!cards.current) return;
    const interval = setInterval(() => {
      setMovement((prev) => {
        console.log("movement : ", prev);
        return prev.map((n) => (n % 6) + 1);
      });
    }, 900);

    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {

      if(centerCardPrevPositon === "left") {
        gsap.fromTo(
          "#center-card",
          { x: -200, rotationY: 40 },
          {
            x: 0,
            rotationY: 0,
            duration: 0.5,
            ease: "power2.inOut",
            transformOrigin: "center center", // Ensures rotation happens around the center
          }
        );
      }

      if(centerCardPrevPositon === "right"){
        gsap.fromTo(
          "#center-card",
          { x: 200, rotationY: -40 },
          {
            x: 0,
            rotationY: 0,
            duration: 0.5,
            ease: "power2.inOut",
            transformOrigin: "center center", // Ensures rotation happens around the center
          }
        );
      }

      setcenterCardPrevPositon(prev => {
        if(prev === "left"){
          return "right"
        } else {
          return "left"
        }
      })
    },
    { dependencies: [movement] }
  );

  return (
    <div
      style={{
        perspective: "500px",
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-auto flex overflow-hidden"
    >
      <div
        style={{ transformStyle: "preserve-3d" }}
        className="w-1/2 h-full overflow-hidden relative flex items-center"
      >
        <div
          className="contain relative flex items-center h-[15rem] lg:h-[20rem] w-full"
          style={{
            perspectiveOrigin: "100% 50%",
            perspective: "500px",
            transformStyle: "preserve-3d",
          }}
        >
          {parts.map((e, idx) => {
            const transformValue = parts[movement[idx]];
            return (
              <div
                ref={(el) => {
                  cards.current[idx] = el;
                }}
                key={`${e?.transform}`}
                className={`right-0 w-[9rem] rounded-lg lg:w-[16rem] duration-300 absolute will-change-[opacity]`}
                style={{
                  backgroundImage: `url("/kpr/card-left-0${
                    idx + 1
                  }.webp")`,
                  transform: transformValue?.transform,
                  transformStyle: "preserve-3d",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  aspectRatio: "219/255",
                  backgroundPosition: "50%",
                  opacity: transformValue?.opacity,
                  transition: "transform 0.3s ease-out, opacity 0.5s ease-out",
                }}
              ></div>
            );
          })}
        </div>
      </div>

      <div
        style={{ transformStyle: "preserve-3d" }}
        className="w-1/2 h-full overflow-hidden relative flex items-center"
      >
        <div
          className="contain relative flex items-center h-[15rem] lg:h-[20rem] w-full"
          style={{
            perspectiveOrigin: "0% 50%",
            perspective: "500px",
            transformStyle: "preserve-3d",
          }}
        >
          {partsTwo.map((e, idx) => {
            const transformValue = partsTwo[movement[idx]];
            return (
              <div
                key={e.transform}
                ref={(el) => {
                  cardsTwo.current[idx] = el;
                }}
                className={`left-0 w-[9rem] rounded-lg lg:w-[16rem] duration-300 absolute will-change-transform `}
                style={{
                  backgroundImage: `url("/kpr/card-right-0${idx + 1}.webp")`,
                  transform: transformValue?.transform,
                  transformStyle: "preserve-3d",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  aspectRatio: "219/255",
                  backgroundPosition: "50%",
                  opacity: transformValue?.opacity,
                  transition: "transform 0.3s ease-out, opacity 0.5s ease-out",
                }}
              ></div>
            );
          })}
        </div>
      </div>

      <div
        id="center-card"
        className={`left-1/2 rounded-lg lg:hidden -translate-x-1/2 scale-[1.1] -translate-y-1/2 top-1/2 w-[8rem] lg:w-[16rem] duration-300 absolute will-change-[opacity]`}
        style={{
          backgroundImage: `url("src/framer/web-one/images/card-${centerCardPrevPositon}-0${movement[0]}.webp")`,
          transformStyle: "preserve-3d",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          aspectRatio: "219/255",
          backgroundPosition: "50%",
          transition: "transform 0.3s ease-out, opacity 0.5s ease-out",
          transformOrigin:"center center"
        }}
      ></div>
    </div>
  );
}
