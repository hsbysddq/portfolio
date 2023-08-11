function Navbar() {
  return (
    <nav className="flex justify-between text-white pt-5">
      <div className="logo p-4">
        <a href="/" className="site-tittle flex">
          Hasbi's
        </a>
      </div>

      <div className="list">
        <ul className="flex list-none gap-4">
          <li className="p-4">
            <a href="/">About</a>
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
            <button className="text-xs text-[#64ffda] outline outline-offset-2 outline-1 rounded-sm px-4 py-2">
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
