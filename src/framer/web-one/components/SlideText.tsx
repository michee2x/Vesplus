import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const SlideText = ({
  texts = ["The Branding you need..", "The Theme That Works", "Macelo"],
  setAnimationComplete,
}: {
  texts?: string[];
  setAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const logos = useRef<(HTMLSpanElement | null)[]>([]);
  const logoContainer = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    if (logos.current.length === 0 || !logoContainer) return;
    const tl = gsap.timeline({
      onComplete:() => {
        gsap.delayedCall(3, () => {
          setAnimationComplete(true);
        })
      }
    });

    logos.current.forEach((logo, idx) => {
      if (!logo) return;

      tl.to("#logo-card", {
        yPercent: (-100 * idx) / logos.current.length,
        duration: 1,
        ease: "power3.inOut",
        delay: 0.7 * idx,
      });
    });
  });
  return (
    <span ref={logoContainer} className="flex h-10 w-fit overflow-y-hidden">
      <span
        id="logo-card"
        style={{ height: "max-content" }}
        className="text-bold w-fit  text-xl text-white/[0.5] tracking-tighter"
      >
        {texts.map((e, idx) => {
          return (
            <span
              ref={(e) => {
                logos.current[idx] = e;
              }}
              id="welcome-logo"
              className="flex mx-auto w-fit h-10 items-center justify-center text-xl"
            >
              {e}
            </span>
          );
        })}
      </span>
    </span>
  );
};

export default SlideText