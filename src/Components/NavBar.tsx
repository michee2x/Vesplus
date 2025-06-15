import { useEffect, useRef, useState } from 'react'
import {IoMdMenu} from "react-icons/io"
import {LiaTimesSolid} from "react-icons/lia"

const NavBar = () => {
    const [showSideBar, setShowSideBar] = useState(false)
    const audioElement = useRef<HTMLAudioElement | null>(null);
    const [isAudioPlaying, setIsAudioPlaying] = useState(true);
    const [isIndicatorActive, setIndicatorActive] = useState(true);

    const toggleAudioIndicator = () => {
          setIsAudioPlaying(prev => !prev);
          setIndicatorActive(prev => !prev);

    }

    useEffect(() => {
      const handleScroll = () => {
        const audio = audioElement.current;
        if (!audio) return;

        audio
          .play()
          .then(() => {
            console.log("Audio playing!");
          })
          .catch((err) => {
            console.warn("Autoplay blocked:", err);
          });

        // Remove listener after first scroll
        window.removeEventListener("scroll", handleScroll);
      };

      // Add listener on mount
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    


    useEffect(()=> {
      if(!audioElement.current) return;
        if(isAudioPlaying){
          audioElement.current.play()
        } else {
          audioElement.current.pause()
        }
    }, [isAudioPlaying])
  return (
    <div className="w-screen z-[4000] fixed flex flex-col lg:flex-row justify-between lg:items-start items-center lg:px-6 py-2 lg:py-4 h-auto">
      <div className="flex z-10 px-3 justify-between items-center w-full lg:w-fit h-auto">
        <img
          src="https://i.imgur.com/G7oYvV1.png"
          className="w-10 h-10 object-cover rounded-full"
          alt=""
        />
        <span
          onClick={() => setShowSideBar((prev) => !prev)}
          className="text-3xl  lg:hidden text-zinc-100"
        >
          {showSideBar ? <LiaTimesSolid /> : <IoMdMenu />}
        </span>
      </div>
      <ul
        className={`lg:w-fit lg:relative bg-black lg:bg-transparent right-0 left-0 bottom-0 w-screen h-screen fixed flex-col lg:flex-row top-0 flex font-semibold mr-6 lg:h-auto justify-center text-[9vw] lg:text-[14px] items-end gap-[1.8rem] lg:gap-[2.8rem] transition-transform duration-500 ease-in-out px-10 ${
          showSideBar ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        } lg:items-center`}
      >
        <li>About</li>
        <li>Portfolios</li>
        <li>Careers</li>
        <li>PR Centers</li>
        <li>Contact</li>
        <button
          onClick={toggleAudioIndicator}
          className="flex gap-1 items-end h-10"
        >
          <audio
            className="hidden"
            ref={audioElement}
            src="/BDASH%20P&Pm%20Soundtrack%20(WOD)%20-%20LovesMusic.mp3"
            autoPlay
            muted
            loop
            preload="auto"
          ></audio>

          {[1, 2, 3, 4].map((bar) => {
            // Generate random delay and duration for each bar
            const randomDelay = (Math.random() * 0.5).toFixed(2); // 0s to 0.5s
            const randomDuration = (0.8 + Math.random()).toFixed(2); // 0.8s to 1.8s

            return (
              <div
                key={bar}
                className={`indicator-line transition-all ${
                  isIndicatorActive ? "opacity-100" : "h-[40%]"
                }`}
                style={{
                  animationDelay: `${randomDelay}s`,
                  animationDuration: `${randomDuration}s`,
                }}
              ></div>
            );
          })}
        </button>
      </ul>
    </div>
  );
}

export default NavBar