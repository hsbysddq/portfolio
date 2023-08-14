import resume from "../img/resume.pdf"
import React from "react"

const Project = () => {
  return (
    <div className="pl-44 pt-28 w-10/12" id="project">
      <div className=" text-[#ffb800] font-poppins">
        <h1 className="text-4xl font-bold uppercase text-center pb-12">
          Some Things I have Built
        </h1>

        <div className="mb-16 flex justify-center">
          <div className="bg-[#999999] h-20 w-9/12 rounded-3xl ">
            <div className="grid grid-flow-col w-10/12 mx-16">
              <div className="bg-[#ffb800] rounded-xl h-14 w-14 m-3"></div>
              <div className="bg-[#ffb800] rounded-xl h-14 w-14 m-3"></div>
              <div className="bg-[#ffb800] rounded-xl h-14 w-14 m-3"></div>
              <div className="bg-[#ffb800] rounded-xl h-14 w-14 m-3"></div>
              <div className="bg-[#ffb800] rounded-xl h-14 w-14 m-3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-7/12 h-56 bg-white mb-16 rounded-lg"></div>
        <div className="w-5/12 text-white h-56  font-poppins ml-14">
          <h1 className="items-center text-2xl font-semibold">JUDUL PROJEK</h1>
          <p className="text-sm mt-4 mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            reiciendis, iure fugit cum expedita itaque illo consequuntur animi
            eius error voluptatibus, asperiores necessitatibus possimus modi
            culpa ipsum magnam sapiente libero magni.
          </p>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[#ffb800] outline outline-offset-2 outline-1 rounded-sm px-4 py-2"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
