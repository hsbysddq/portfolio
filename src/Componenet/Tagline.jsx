function Tagline() {
  return (
    <div className="pt-24 pb-12 flex flex-row font-poppins basis-full">
      <div className="basis-1/6"></div>

      <div className="basis-2/3">
        <p className="text-6xl text-[#ffb800] pb-8 font-extrabold  text-center">
          HELLO <br /> I BUILD THINGS <br /> FOR THE WEBSITE
        </p>

        <p className="text-l text-[#999999] pb-14  text-center">
          I’m a web developer specializing in creating visually engaging and
          user-friendly websites. <br /> My focus is on building accessible and
          interactive web experiences that prioritize <br /> user needs and
          satisfaction.
        </p>

        <div className="text-center">
          <a href="https://github.com/hsbysddq" className="text-center">
            <button className="text-[#ffb800] outline outline-offset-2 outline-1 rounded-sm px-6 py-3 text-center ">
              Check My Portfolio!
            </button>
          </a>
        </div>
      </div>

      <div className="basis-1/6"></div>
    </div>
  )
}
export default Tagline
