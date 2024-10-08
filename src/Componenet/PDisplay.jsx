import React from "react"

const PDisplay = ({ project }) => {
  return (
    <div className="flex w-10/12 justify-center">
      <div className="w-[44%] h-56 bg-white mb-16 rounded-lg">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="w-[32%] text-white h-56  font-poppins ml-14">
        <h1 className="items-center text-2xl font-semibold">{project.title}</h1>
        <p className="text-sm mt-4 mb-6">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-[#ffb800] outline outline-offset-2 outline-1 rounded-sm px-4 py-2"
        >
          Resume
        </a>
      </div>
    </div>
  )
}

export default PDisplay
