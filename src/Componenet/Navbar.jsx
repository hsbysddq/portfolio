import { Link } from "react-router-dom"
import { FiArrowUpRight } from "react-icons/fi"
function Navbar() {
  return (
    <nav className="bg-black  flex justify-between text-[#999999] pt-3 pb-3 px-14">
      <div className="logo p-4 hover:text-[#ffb800]">
        <Link to="/">Hasbi's</Link>
        {/* <a href="/" className="site-tittle flex font-poppins">
          Hasbi's
        </a> */}
      </div>

      <div className="list">
        <ul className="flex list-none gap-4 font-poppins">
          <li className="flex p-4 hover:text-[#ffb800]">
            <a href="#about">About</a>
            <FiArrowUpRight className="w5 h-5 ml-2 mt-0.5" />
          </li>
          <li className="flex p-4 hover:text-[#ffb800]">
            <a href="/">Experience</a>
            <FiArrowUpRight className="w5 h-5 ml-2 mt-0.5" />
          </li>
          <li className="flex p-4 hover:text-[#ffb800]">
            <a href="/">Work</a>
            <FiArrowUpRight className="w5 h-5 ml-2 mt-0.5" />
          </li>
          <li className="flex p-4 hover:text-[#ffb800]">
            <a href="/">Contact</a>
            <FiArrowUpRight className="w5 h-5 ml-2 mt-0.5" />
          </li>
          <li className="flex p-3">
            <button className="text-xs text-[#ffb800] outline outline-offset-2 outline-1 rounded-sm px-4 py-2">
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
