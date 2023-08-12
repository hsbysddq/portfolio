import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="bg-black  flex justify-between text-[#999999] pt-3 pb-3 px-14">
      <div className="logo p-4">
        <Link to="/">Hasbi's</Link>
        {/* <a href="/" className="site-tittle flex font-poppins">
          Hasbi's
        </a> */}
      </div>

      <div className="list">
        <ul className="flex list-none gap-4 font-poppins">
          <li className="p-4">
            <a href="#about">About</a>
          </li>
          <li className="p-4">
            <a href="/">Experience</a>
          </li>
          <li className="p-4">
            <a href="/">Work</a>
          </li>
          <li className="p-4">
            <a href="/">Contact</a>
          </li>
          <li className="p-3">
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
