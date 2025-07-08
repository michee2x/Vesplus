
const images = [
  "https://cdn.prod.website-files.com/6816f3319f2600a7674c0f38/6816f3319f2600a7674c1154_Hero1us2.webp",
  "https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/6816f5066ab75a9e8c554e8b_Work3u.webp",
  "https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/6816f5066ab75a9e8c554e84_Hero2us.webp",
  "https://cdn.prod.website-files.com/674fed735f02f50d3b05d8bc/67505373701547303b4a9864_Work2.png",
  "https://cdn.prod.website-files.com/674fed735f02f50d3b05d8bc/675009a1d9e2f7680c1b90fc_Hero2.png",
  "https://cdn.prod.website-files.com/6816f3319f2600a7674c0f38/6816f3319f2600a7674c1109_img_CQUM.webp",
  "https://cdn.prod.website-files.com/67de676f1c598cfa54564c7a/6816f5066ab75a9e8c554e92_Work1us.webp",
  "https://cdn.prod.website-files.com/6816f3319f2600a7674c0f38/6816f3319f2600a7674c110a_img_XGg7.webp",
];

const Cta3dPerspective = () => {
  return (
    <div
      style={{ perspective: "100vh" }}
      className="w-full z-[4000] flex-col h-[70vh] lg:h-screen flex items-center justify-center relative "
    >
      <div
        className="lg:[transform:rotateX(40deg)_rotateY(0)_rotateZ(-16deg)] [transform:rotateX(40deg)_rotateY(0)_rotateZ(-40deg)]"
        style={{
          transformStyle: "preserve-3d",
          perspective: "100px",
        }}
      >
        <div
          className="will-change-transform flex gap-[1rem] lg:gap-[2rem] items-center list-none"
          style={{
            transformStyle: "preserve-3d",
            transform:
              "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            animation: "scroll 40s linear infinite",
          }}
        >
          {[...images, ...images].map((e, idx) => {
            return (
              <div
                style={{
                  transformOrigin: "50%",
                  perspective: "100vh",
                  position: "relative",
                }}
                key={idx}
                className="z-10"
              >
                <div
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "50%",
                    perspective: "100vh",
                  }}
                  className="w-[10rem] h-[14rem] lg:w-[19.5rem] lg:h-[25.04rem] [perspective:100vh] rounded-2xl"
                >
                  <div
                    style={{
                      transformOrigin: "50%",
                      transformStyle: "preserve-3d",
                      transform: "translate(0)",
                    }}
                    className="w-full overflow-hidden min-h-[14rem] md:min-h-[18rem] lg:min-h-[28.7rem] flex items-center justify-center relative h-full "
                  >
                    <img
                      style={{
                        transformStyle: "preserve-3d",
                        transform: "translate3d(0px, 0px, .1px)",
                        flexFlow: "column",
                      }}
                      loading="eager"
                      src={e}
                      alt=""
                      className="absolute w-full object-cover h-full"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Inline keyframes */}
      <style>
        {`
          @keyframes scroll {
            to {
              transform: translateX(-45%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Cta3dPerspective;
