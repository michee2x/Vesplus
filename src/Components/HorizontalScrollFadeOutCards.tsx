import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsWrapperRef = useRef<HTMLUListElement | null>(null);
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);

  useGSAP(
    () => {
      const container = containerRef.current;
      const cardsWrapper = cardsWrapperRef.current;
      if (!container || !cardsWrapper) return;

      const totalCards = cardsRef.current.length;

      // Horizontal scroll animation
      const horizontalTween = gsap.to(cardsWrapper, {
        xPercent: -100 * (totalCards - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${cardsWrapper.scrollWidth - window.innerWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Each card's fade and slide animation
      cardsRef.current.forEach((card) => {
        if (!card) return;

        ScrollTrigger.create({
          trigger: card,
          containerAnimation: horizontalTween,
          start: "left left",
          end: "+=200", // controls the hang and slide out distance
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(card, {
              opacity: 1 - progress,
              y: progress * 100,
              ease: "power2.out",
              overwrite: true,
            });
          },
        });
      });
    },
    { dependencies: [] }
  );

  return (
    <section
      ref={containerRef}
      className="w-screen h-screen overflow-hidden bg-neutral-900 text-white"
    >
      <ul
        ref={cardsWrapperRef}
        className="flex h-full items-center"
        style={{ width: "max-content" }}
      >
        {[...Array(6)].map((_, i) => (
          <li
            key={i}
            ref={(el) => {cardsRef.current[i] = el}}
            className="min-w-[80vw] h-[60vh] mx-10 bg-teal-500 rounded-2xl flex items-center justify-center text-4xl font-bold"
          >
            Card {i + 1}
          </li>
        ))}
      </ul>
    </section>
  );
}
