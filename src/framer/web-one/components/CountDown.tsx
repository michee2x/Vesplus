"use client";

import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

export default function CountDown() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // triggers only once
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, 100, { duration: 5 });
      return () => controls.stop();
    }
  }, [isInView]); // dependency triggers effect when element enters view

  return (
    <motion.pre ref={ref}>
      {rounded}
    </motion.pre>
  );
}
