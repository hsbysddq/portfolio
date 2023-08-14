function Experience() {
  return (
    <div className="pl-56 pt-24 flex" id="experience">
      <div className="w-10/12 text-[#999999] font-poppins">
        <div className="flex">
          <h1 className="text-2xl font-bold mb-12 text-[#ffb800]">
            Where I’ve Worked
          </h1>
          <div className="mt-4 ml-8 border-t-[1px] border-[#999999] w-5/12"></div>
        </div>

        <div className="flex">
          <div className="tab-list w-2/12">
            <button className="text-[#ffb800] bg-transparent border-l-[2px] border-[#ffb800] px-6 py-3">
              Academy
            </button>

            <button className="text-white bg-transparent border-l-[2px] border-white px-6 py-3">
              Dicoding
            </button>

            <button className="text-white bg-transparent border-l-[2px] border-white px-6 py-3">
              Binar
            </button>

            <button className="text-white bg-transparent border-l-[2px] border-white px-6 py-3">
              Hackarank
            </button>

            <button className="text-white bg-transparent border-l-[2px] border-white px-6 py-3">
              Academy
            </button>
          </div>

          <div className="w-10/12 ml-14 ">
            <p className="text-lg">
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
              <br />
              <br /> Fast-forward to today, and I’ve had the privilege of
              working at an advertising agency, a start-up, a huge corporation,
              and a student-led design studio. My main focus these days is
              building accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients. <br />
              <br /> I also recently launched a course that covers everything
              you need to build a web app with the Spotify API using Node &
              React.
              <br />
              <br /> Here are a few technologies I’ve been working with
              recently:
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
