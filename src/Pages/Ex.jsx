import React, { useState } from "react"
import ContentDisplay from "../Componenet/ContentDisplay"

function Ex() {
  const contentData = {
    academy: "Ini adalah konten untuk Academy",
    dicoding: "Ini adalah konten untuk Dicoding",
    binar: "Ini adalah konten untuk Binar",
    hackarank: "Ini adalah konten untuk Hackarank",
  }

  const [selectedKey, setSelectedKey] = useState("academy")
  const [selectedContent, setSelectedContent] = useState(
    contentData[selectedKey]
  )

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
            <div className="flex flex-col">
              {Object.keys(contentData).map((key) => (
                <div
                  key={key}
                  className={`text-white text-lg bg-transparent border-l-[2px]
                          ${
                            selectedKey === key
                              ? "border-yellow-500"
                              : "border-white"
                          } 
                          px-5 py-6 cursor-pointer hover:bg-transparent hover:text-[#ffb800]`}
                  onClick={() => {
                    setSelectedContent(contentData[key])
                    setSelectedKey(key) // Set komponen yang dipilih
                  }}
                >
                  {key === "academy" && "Academy"}
                  {key === "dicoding" && "Dicoding"}
                  {key === "binar" && "Binar"}
                  {key === "hackarank" && "Hackarank"}
                </div>
              ))}
            </div>
          </div>

          <div className="w-10/12 ml-14 ">
            <ContentDisplay content={selectedContent} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ex
