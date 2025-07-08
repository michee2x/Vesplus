import {motion} from "motion/react"

const Pulsing = ({color}:{color?:string}) => {
  return (
    <div className="w-[min-content] h-[min-content] flex items-center justify-center">
      <div className="opacity-100 h-[12px] w-[12px] relative">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 will-change-auto aspect-square"
          initial={{
            opacity: 0,
            borderRadius: "208.333%",
            height: "48px",
            transformOrigin: "50% 50% 0px",
          }}
          animate={{
            opacity: [0.5, 0],
            height: ["7px", "48px"],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
          }}
          style={{
            backgroundColor: color ? color : "rgb(148, 209, 255)",
            opacity: 0.5,
            transform: "translate(-50%, -50%) scale(0.987414, 0.987414)",
            borderRadius: "194.65%",
            transformOrigin: "50% 50% 0px",
            willChange: "transform",
          }}
        />
        <div
          className="inset-[3px] absolute"
          style={{
            backgroundColor: color ? color : "rgb(148, 209, 255)",
            opacity: 1,
            borderRadius: "92.256px",
            boxShadow: `${
              color ? color : "rgba(168, 209, 255, 0.5)"
            } 0px 0px 20px 0px`,
            willChange: "auto",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Pulsing