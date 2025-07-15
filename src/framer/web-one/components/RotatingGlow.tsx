import React from 'react'
import {motion} from "motion/react"

const RotatingGlow = () => {
  return (
    <div className="w-screen flex items-center justify-center h-screen">
      <motion.img
        src="/GlowImageTwo.png"
        alt=""
        className="size-[13rem] object-cover"
        animate={{
          rotateZ: 360,
          scale: 1.1,
        }}
        transition={{
          duration: 2.5,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}

export default RotatingGlow