import React from "react"
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi"

function SocialMedia() {
  return (
    <>
      <div
        style={{ writingMode: "vertical-rl" }}
        className="fixed buttom-0 w-10 bottom-0 left-10 right-auto z-10"
      >
        <ul className="flex list-none m-0 text-white">
          <li>
            <a href="/" aria-label="Github" className="p-10">
              <FiGithub />
            </a>
          </li>
          <li>
            <a href="/" aria-label="Instagram" className="p-10">
              <FiInstagram />
            </a>
          </li>
          <li>
            <a href="/" aria-label="Twitter" className="p-10">
              <FiTwitter />
            </a>
          </li>
          <li>
            <a href="/" aria-label="Linkedin" className="p-10">
              <FiLinkedin />
            </a>
          </li>
        </ul>
      </div>

      <div style={{ writingMode: "vertical-rl" }} className="flex static">
        <p className="text-white absolute bottom-[26%] right-[4%] flex">
          Hsbysddq@gmail.com
        </p>
      </div>
    </>
  )
}

export default SocialMedia
