import React, { useState } from "react"
import PDisplay from "../Componenet/PDisplay"
// import ProjectContent from "./ProjectContent"
// import resume from "../img/resume.pdf"

const Pro = () => {
  const projectData = [
    {
      icon: "🔧", // Sesuaikan dengan ikon Anda
      title: "JUDUL PROJEK",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate reiciendis, iure fugit cum expedita itaque illo consequuntur animi eius error voluptatibus, asperiores necessitatibus possimus modi culpa ipsum magnam sapiente libero magni.",

      image: "link_ke_gambar_proyek1.jpg", // Ganti dengan link gambar Anda
      link: "https://www.proyek1.com",
    },
    {
      icon: "🎨",
      title: "Proyek 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate reiciendis, iure fugit cum expedita itaque illo consequuntur animi eius error voluptatibus, asperiores necessitatibus possimus modi culpa ipsum magnam sapiente libero magni.",
      image: "link_ke_gambar_proyek2.jpg",
      link: "https://www.proyek2.com",
    },
    {
      icon: "📱",
      title: "Proyek 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate reiciendis, iure fugit cum expedita itaque illo consequuntur animi eius error voluptatibus, asperiores necessitatibus possimus modi culpa ipsum magnam sapiente libero magni.",
      image: "link_ke_gambar_proyek3.jpg",
      link: "https://www.proyek3.com",
    },
    {
      icon: "💻",
      title: "Proyek 4",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate reiciendis, iure fugit cum expedita itaque illo consequuntur animi eius error voluptatibus, asperiores necessitatibus possimus modi culpa ipsum magnam sapiente libero magni.",
      image: "link_ke_gambar_proyek4.jpg",
      link: "https://www.proyek4.com",
    },
    {
      icon: "🚀",
      title: "Proyek 5",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate reiciendis, iure fugit cum expedita itaque illo consequuntur animi eius error voluptatibus, asperiores necessitatibus possimus modi culpa ipsum magnam sapiente libero magni.",
      image: "link_ke_gambar_proyek5.jpg",
      link: "https://www.proyek5.com",
    },
  ]

  // Menyimpan proyek yang dipilih
  const [selectedProject, setSelectedProject] = useState(projectData[0])

  return (
    <div className="flex flex-col items-center">
      <div className=" text-[#ffb800] font-poppins">
        <h1 className="text-4xl font-bold uppercase text-center pb-12">
          Some Things I have Built
        </h1>
      </div>
      {/* Bagian Atas: List Ikon */}
      <div className="mb-16">
        <div className="bg-[#999999] h-20 rounded-3xl ">
          <div className="grid grid-flow-col mx-16">
            {projectData.map((project, index) => (
              <button
                key={index}
                className={`text-2xl bg-[#ffb800] rounded-xl h-14 w-14 m-3 ${
                  selectedProject === project
                    ? "text-yellow-500"
                    : "text-gray-700"
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {project.icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Konten Proyek */}
      <div className="flex flex-col items-center">
        <PDisplay project={selectedProject} />
      </div>
    </div>
  )
}

export default Pro
