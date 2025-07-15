import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Spotlight = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#ray-one",
      { x: 64, opacity: 0.5 },
      {
        x: 104,
        duration: 3,
        opacity: 0.45,
        delay: 2,
      }
    );
    gsap.fromTo(
      "#ray-two",
      { x: 0, opacity: 0.5 },
      {
        delay: 5,
        x: 64,
        opacity: 0.45,
        duration: 4.5,
      }
    );
  });
  return (
    <div className="w-screen h-screen flex overflow-hidden relative items-center justify-center">
      <div
        style={{
          opacity: ".5",
          mask: "radial-gradient(17% 25% at 56.699999999999996% 50%,#000000 0%,rgba(0,0,0,0) 100%) add",
          WebkitMask:
            "radial-gradient(17% 25% at 56.699999999999996% 50%,#000000 0%,rgba(0,0,0,0) 100%) add",
        }}
        className="pointer-events-none absolute left-[calc(50.00000000000002% - 770px / 2)] opacity-50 h-[384px] w-[770px] top-0"
      >
        <div
          className="w-full h-full absolute inset-0"
          style={{
            position: "absolute",
            borderRadius: "inherit",
            backgroundImage:
              "url(https:framerusercontent.com/images/cy2fRivuU1BDV272WrM11nAEzE.svg)",
            backgroundRepeat: "repeat",
            backgroundPosition: "left top",
            border: 0,
            backgroundSize: "3.00px auto",
          }}
        ></div>
      </div>

      <div
        id="ray-one"
        className="rounded-full h-[650px] opacity-30 overflow-hidden w-[96px] mix-blend-lighten absolute top-[-227px] left-[calc(73.25000000000003% - 96px / 2)]"
        style={{
          willChange: "transform",
          opacity: 0.5,
          transform: "translateX(64px) rotate(32deg)",
          transition: "transform 0.3s ease-in-out",
          backgroundColor: "rgba(129, 140, 248, .03)",
          filter: "blur(32px)",
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(99, 102, 241)",
            inset: "-96px 16px 0",
            mask: "radial-gradient(50% 46% at 50% 50%,#000000 0%,rgba(0,0,0,0) 100%) add",
            WebkitMask:
              "radial-gradient(50% 46% at 50% 50%,#000000 0%,rgba(0,0,0,0) 100%) add",
          }}
          className="absolute pointer-events-none overflow-visible"
        ></div>
        <div
          style={{
            backgroundColor: "rgb(165, 180, 252)",
            mask: "radial-gradient(50% 46% at 50% 50%,#000000 0%,rgba(0,0,0,0) 100%) add",
            inset: "0 16px 200px",
            WebkitMask:
              "radial-gradient(50% 46% at 50% 50%,#000000 0%,rgba(0,0,0,0) 100%) add",
          }}
          className="absolute pointer-events-none"
          data-framer-name="Dots"
        ></div>
      </div>

      <div
        id="ray-two"
        className="-left-[80px] -top-[198px] rounded-full h-[400px] opacity-30 overflow-hidden w-[96px] mix-blend-lighten absolute"
        style={{
          willChange: "transform",
          opacity: 0.5,
          transform: "rotate(-32deg)",
          transition: "transform 0.3s ease-in-out",
          backgroundColor: "rgba(129, 140, 248, .03)",
          filter: "blur(32px)",
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(99, 102, 241)",
            inset: "-96px 16px 0",
            mask: "radial-gradient(50% 46% at 50% 50%,#000000 0%,rgba(0,0,0,0) 100%) add",
            WebkitMask:
              "radial-gradient(50% 46% at 50% 50%,#000000 0%,rgba(0,0,0,0) 100%) add",
          }}
          className="absolute pointer-events-none overflow-visible"
        ></div>
        <div
          style={{
            backgroundColor: "rgb(165, 180, 252)",
            mask: "radial-gradient(50% 46% at 50% 50%,#000000 0%,rgba(0,0,0,0) 100%) add",
            inset: "0 16px 200px",
            WebkitMask:
              "radial-gradient(50% 46% at 50% 50%,#000000 0%,rgba(0,0,0,0) 100%) add",
          }}
          className="absolute pointer-events-none"
          data-framer-name="Dots"
        ></div>
      </div>
    </div>
  );
};

export default Spotlight