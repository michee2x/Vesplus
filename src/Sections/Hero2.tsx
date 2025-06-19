import {motion} from "motion/react"

// components/HeroSection.tsx

export default function HeroSection() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
        {/* Badge */}
        <div className="bg-[#111] text-sm px-4 py-2 rounded-full mb-6 flex items-center gap-2 shadow-inner border border-white/10">
          <motion.span
          initial={{}}
            animate={{
              boxShadow: [
                "rgb(189, 189, 189) 0px 0px 14px 1px",
                "none",
              ],
            }}
            transition={{
              ease: "linear",
              duration:3,
              times:[0.9, 0.1],
              repeat: Infinity,
              repeatType:"loop",
            }}
            className="w-2 h-2 will-change-auto shadow- shadow-white shadow-2xl rounded-full bg-white"
          />
          Crafting Unique Brand Identities
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-medium leading-tight">
          Branding that you <br /> need Indeed
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-300 max-w-xl text-sm md:text-base">
          Elevate your brand with custom identity and package design. Showcase
          your story through bold visuals and strategic design solutions.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="bg-white text-black px-6 py-3 rounded-xl text-sm font-medium transition duration-300 hover:brightness-110 shadow-[0_0_20px_#ffffff30] border border-white/10">
            Get Started Now
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-xl text-sm font-medium transition duration-300 hover:brightness-110 shadow-[0_0_20px_#ffffff30] border border-white/10">
            See Projects
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex items-center gap-2 text-xs text-gray-400">
          <span>Scroll down</span>
          <div className="w-5 h-9 border-2 border-gray-400 rounded-full flex items-start justify-center relative">
            <div className="w-1 h-1 bg-gray-400 rounded-full mt-1 animate-bounce" />
          </div>
          <span>to see projects</span>
        </div>
      </section>
    );
  }
  