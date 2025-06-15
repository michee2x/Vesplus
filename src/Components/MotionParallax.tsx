"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CrazyParallax = () => {
  const containerRef = useRef(null);
  const items = [1, 2, 3, 4];

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        paddingTop: "200vh", // allow enough scroll space
        paddingBottom: "200vh",
      }}
    >
      {/* First Card (static) */}
      <div className="portfolio-wrapper">
        <div className="portfolio">
          <img
            className="portfolio-thumbnail"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.vesplus.co.kr/portfolios/April2025/qEXJETd1dE7mrIi2FIiz.jpg"
            alt="First-thumbnail"
          />
        </div>
      </div>

      {/* Scroll-animated Cards */}
      {items.map((item, i) => {
        const wrapperRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: wrapperRef,
          offset: ["start 80%", "start 50%"], // triggers between 80% and 50% of viewport
        });

        const wrapperY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
        const innerY = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

        return (
          <motion.div
            key={i}
            ref={wrapperRef}
            className="portfolio-wrapper"
            style={{
              y: wrapperY,
              margin: "100px 0",
              willChange: "transform",
            }}
          >
            <motion.div
              className="portfolio"
              style={{
                y: innerY,
                willChange: "transform",
              }}
            >
              <img
                className="portfolio-thumbnail"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.vesplus.co.kr/portfolios/April2025/b4KxRoJ4zWG4Cew7wknD.jpg"
                alt={`Card ${item}`}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};
