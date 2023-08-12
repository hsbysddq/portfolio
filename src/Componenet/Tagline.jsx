function Tagline() {
  return (
    <div className="pt-24 flex flex-row">
      <div className="basis-1/6"></div>

      <div className="basis-2/3">
        <p className="text-6xl text-[#FFB800] pb-8 font-bold  text-center">
          HELLO <br /> I BUILD THINGS <br /> FOR THE WEBSITE
        </p>

        <p className="text-l text-[#BDBDBD] pb-14  text-center">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>

        <div className="text-center">
          <a href="/" className="text-center">
            <button className="text-[#FFB800] outline outline-offset-2 outline-1 rounded-sm px-6 py-3 text-center ">
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
