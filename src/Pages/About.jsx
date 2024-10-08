import { IoMdArrowDropright } from "react-icons/io"
import style from "./About.module.css"

function About() {
  return (
    <div className="pl-44 pt-24 flex" id="about">
      <div className="w-6/12 text-[#999999] font-poppins">
        <div className="flex">
          <h1 className="text-2xl font-bold mb-12 text-[#ffb800]">About Me</h1>
          <div className="mt-4 ml-8 border-t-[1px] border-[#999999] w-2/3"></div>
        </div>

        <p className="text-lg">
          Hello! My name is Hasby Siddiqi and I enjoy creating things that live
          on the internet. My interest in web development began in 2021 after
          watching a startup series, where I was captivated by the incredible
          people competing in hackathons. It turns out that watching them tackle
          complex challenges inspired me to dive into the world of web
          development myself!
          <br />
          <br /> Fast-forward to today, and I’ve had the privilege of working at
          an advertising agency, a start-up, a huge corporation, and a
          student-led design studio. My main focus these days is building
          accessible, inclusive products and digital experiences at Upstatement
          for a variety of clients. <br />
          <br /> I also recently launched a course that covers everything you
          need to build a web app with the Spotify API using Node & React.
          <br />
          <br /> Here are a few technologies I’ve been working with recently:
        </p>

        <ul className="skills-list pt-8 grid grid-cols-2 gap-1">
          <li className="flex align-center">
            <IoMdArrowDropright className="text-[#ffb800] w-5 h-5 mr-1" />
            Java Script
          </li>
          <li className="flex align-center">
            <IoMdArrowDropright className="text-[#ffb800] w-5 h-5 mr-1" />
            React
          </li>
          <li className="flex align-center">
            <IoMdArrowDropright className="text-[#ffb800] w-5 h-5 mr-1" />
            Node Js
          </li>
          <li className="flex align-center">
            <IoMdArrowDropright className="text-[#ffb800] w-5 h-5 mr-1" />
            TypeScript
          </li>
          <li className="flex align-center">
            <IoMdArrowDropright className="text-[#ffb800] w-5 h-5 mr-1" />
            Next Js
          </li>
          <li className="flex align-center">
            <IoMdArrowDropright className="text-[#ffb800] w-5 h-5 mr-1" />
            Laravel
          </li>
        </ul>
      </div>
      <div className="w-6/12">
        <div className={`${style.card}`}>
          <div className={`${style.circle}`}></div>
          <div className={`${style.circle}`}></div>
          <div className={`${style.inner}`}></div>
        </div>
      </div>
    </div>
  )
}

export default About
