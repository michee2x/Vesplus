import {MdArrowLeft} from "react-icons/md"

const ButtonTwo = ({text = "Text Go's Here", className}:{text?:string, className?:string}) => {
  return (
    <div className={`w-auto h-auto relative will-change-transform opacity-100 transform-none ${className}`}>
      <a
        className="bg-[rgba(255, 255, 255, 0.05)] rounded-[8px] opacity-100 flex items-center justify-center flex-nowrap gap-[10px] py-[14px] px-[28px] h-[min-content] w-[min-content] relative"
        href="https://framer.link/D4dc7gs"
        target="_blank"
        rel="noopener"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(25% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
            filter: "blur(15px)",
            borderRadius: "8px",
            opacity: 1,
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(20.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
            borderRadius: "8px",
            opacity: 1,
          }}
        ></div>
        <div className=" bg-black opacity-100 rounded-[8px] absolute inset-[2px]"></div>
        <div className="opacity-100 flex items-center justify-center h-[min-content] w-[min-content] relative overflow-hidden flex-nowrap">
          <div className="outline-none flex flex-col text-[rgb(0, 153, 255)] transform-none opacity-100 flex-shrink-0 whitespace-pre relative">
            <p className="">{text}</p>
          </div>
          <div className="relative hidden text-white text-3xl">
            <MdArrowLeft />
          </div>
        </div>
      </a>
    </div>
  );
}

export default ButtonTwo