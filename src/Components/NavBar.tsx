import { useState } from 'react'
import {IoMdMenu} from "react-icons/io"
import {LiaTimesSolid} from "react-icons/lia"

const NavBar = () => {
    const [showSideBar, setShowSideBar] = useState(false)
  return (
    <div className="w-screen z-[4000] fixed flex flex-col lg:flex-row justify-between lg:items-start items-center lg:px-6 py-2 lg:py-4 h-auto">
      <div className="flex z-10 px-3 justify-between items-center w-full lg:w-fit h-auto">
        <img src="https://i.imgur.com/G7oYvV1.png" className='w-10 h-10 object-cover rounded-full' alt="" />
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
      </ul>
    </div>
  );
}

export default NavBar