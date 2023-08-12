import React from "react"
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi"

function SocialMedia() {
  return (
    <>
      <div
        style={{ writingMode: "vertical-rl" }}
        className="fixed bottom-0 px-2"
      >
        <ul className="list-none text-white flex justify-center items-center">
          <li className="pb-8">
            <a href="/" aria-label="Github" className="">
              <FiGithub className="w-5 h-5" />
            </a>
          </li>

          <li className="pb-8">
            <a href="/" aria-label="Instagram" className="">
              <FiInstagram className="w-5 h-5" />
            </a>
          </li>

          <li className="pb-8">
            <a href="/" aria-label="Twitter" className="">
              <FiTwitter className="w-5 h-5" />
            </a>
          </li>

          <li className="pb-8">
            <a href="/" aria-label="Linkedin" className="">
              <FiLinkedin className="w-5 h-5" />
            </a>
          </li>

          <div className="border-l-[1px] border-white h-24"></div>
        </ul>
      </div>

      <div
        style={{ writingMode: "vertical-rl" }}
        className="flex fixed bottom-0 right-0 px-16  justify-center items-center"
      >
        <p className="text-white pb-8">Hsbysddq@gmail.com</p>
        <div className="border-l-[1px] border-white h-24"></div>
      </div>
    </>
  )
}

export default SocialMedia
