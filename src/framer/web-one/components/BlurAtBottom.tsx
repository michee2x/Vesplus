type BlurElements = {
  maskimage: string;
  blur: string;
}[];

const blurElements2: BlurElements = [
  {
    maskimage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)",
    blur: "blur(0.078125px)",
  },
  {
    maskimage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)",
    blur: "blur(0.15625px)",
  },
  {
    maskimage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%);-webkit-mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)",
    blur: "blur(0.3125px)",
  },
  {
    maskimage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)",
    blur: "blur(0.625px)",
  },
  {
    maskimage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)",
    blur: "blur(1.25px)",
  },
  {
    maskimage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
    blur: "blur(2.5px)",
  },
  {
    maskimage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)",
    blur: "blur(5px)",
  },
  {
    maskimage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)",
    blur: "blur(10px)",
  },
];
const BlurAtBottom = () => {
    return (
      <div
        className="framer-re6eut-container"
        style={{
          bottom: 0,
          flex: "none",
          height: "160px",
          left: 0,
          order: 1004,
          pointerEvents: "none",
          position: "fixed",
          right: 0,
          zIndex: 8,
        }}
      >
        {/* <!--$--> */}
        <div className="absolute inset-0 overflow-hidden">
          {blurElements2.map((e, idx) => {
            return (
              <div
                style={{
                  opacity: 1,
                  position: "absolute",
                  inset: 0,
                  zIndex: idx + 1,
                  maskImage: e.maskimage,
                  borderRadius: "0px",
                  pointerEvents: "none",
                  backdropFilter: e.blur,
                  WebkitMaskImage: e.maskimage,
                }}
              ></div>
            );
          })}
        </div>
        {/* <!--/$--> */}
      </div>
    );
}

export default BlurAtBottom