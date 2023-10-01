import resume from "../img/resume.pdf"
import { FiArrowUpRight } from "react-icons/fi"
function Navbar() {
  return (
    <nav className="fixed bg-black w-full text-[#999999] py-4 px-4">
      <div className="logo p-4 font-poppins hover:text-[#ffb800] font-semibold text-md">
        <a
          href="/"
          className="site-tittle flex align-center
        "
        >
          H A S B Y
        </a>
      </div>

      <div className="list hidden">
        <ul className="flex list-none gap-4 font-poppins justify-center">
          <li className="flex p-4 hover:text-[#ffb800]">
            <a href="#about">About</a>
          </li>
          <li className="flex p-4 hover:text-[#ffb800]">
            <a href="#experience">Experience</a>
          </li>
          <li className="flex p-4 hover:text-[#ffb800]">
            <a href="#project">Work</a>
          </li>
          <li className="flex p-4 hover:text-[#ffb800]">
            <a href="mailto:hsby15sddq@gmail.com">Contact</a>
            <FiArrowUpRight className="w5 h-5 ml-2 mt-0.5" />
          </li>
        </ul>
      </div>

      <div className="hidden portfolio font-poppins justify-center p-3">
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-[#ffb800] outline outline-offset-2 outline-1 rounded-sm px-4 py-2"
        >
          Resume
        </a>
      </div>
    </nav>
  )
}

export default Navbar
