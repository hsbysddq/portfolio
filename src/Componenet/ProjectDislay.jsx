import React from "react"

const ProjectDisplay = ({ project }) => {
  return (
    <div className="max-w-md p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <p className="text-gray-600 mb-4">{project.description}</p>
      <a
        href={project.link}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kunjungi Proyek
      </a>
    </div>
  )
}

export default ProjectDisplay
