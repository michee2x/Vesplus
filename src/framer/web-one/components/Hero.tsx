import BackgroundBeamsTwo from "./BackgroundBeamsTwo";

const Hero = () => {
  return (
    <div className="w-full flex pt-28 mb-10 justify-center h-auto">
      <div className="w-full h-full flex items-center flex-col justify-center flex-shrink-0">
        {/* Button */}
        <div className="relative mb-5">
          <div
            className="flex flex-nowrap gap-[4px] px-[16px] py-[4px] h-[min-content] w-[min-content] relative items-center justify-center overflow-hidden will-change-transform"
            style={{
              backdropFilter: "blur(0.7px)",
              backgroundColor: "rgba(129, 140, 248, 0.1)",
              borderRadius: "999px",
              boxShadow: "inset 0px 1px 0px 0px rgba(165, 180, 252, 0.3)",
            }}
          >
            <div className="h-[16px] w-[16px] flex items-center justify-center relative">
              <div style={{ display: "contents" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  color="var(--token-a9319385-39cd-4344-a16b-ae0b3e4114e7, rgb(244, 244, 245))"
                  style={{
                    userSelect: "none",
                    width: "100%",
                    height: "100%",
                    display: "inline-block",
                    fill: "rgb(244, 244, 245)",
                    color: "rgb(244, 244, 245)",
                    flexShrink: "0",
                  }}
                >
                  <g color="rgb(244, 244, 245)">
                    <path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div
              className="text-white flex flex-col whitespace-pre w-auto h-auto flex-shrink-0"
              data-framer-name="Description"
              data-framer-component-type="RichTextContainer"
            >
              <h6 className="text-[14px] text-center">
                Supercharged Motion UI
              </h6>
            </div>
          </div>
        </div>
        <h1
          className="framer-text text-[30px] max-w-[30rem] lg:max-w-[55rem] lg:text-[66px] tracking-[-.04em] leading-[34px] lg:leading-[65px] framer-styles-preset-1wzs7n7"
          style={{ textAlign: "center", color: "rgb(250, 250, 250)" }}
        >
          <span className="framer-text">Components for Modern</span>
          <br />
          <span style={{ color: "rgb(165, 180, 252)" }} className="framer-text">
            Web Apps
          </span>
        </h1>

        <div className="my-5 text-[18px] max-w-[350px] lg:max-w-[480px] flex-col flex flex-shrink-0">
          <p
            className=""
            data-styles-preset="SvR8nmzHP"
            style={{ textAlign: "center", color: "rgb(161, 161, 170)" }}
          >
            Copy-paste responsive, animated components built with Tailwind and
            Framer Motion
          </p>
        </div>

        <div className="h-auto w-full">
          <BackgroundBeamsTwo />
        </div>

        <div className="w-auto flex flex-col items-center justify-center lg:gap-6 lg:flex-row lg:mt-12 h-auto">
          <span
            style={{ backgroundColor: "rgb(0, 153, 255)" }}
            className="w-fit h-fit text-nowrap px-6 py-3 text-[14px] text-white rounded-lg"
          >
            Browse Components
          </span>
          <span className="w-fit h-fit text-nowrap px-6 py-3 text-[14px] text-white rounded-lg">
            star on github
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
