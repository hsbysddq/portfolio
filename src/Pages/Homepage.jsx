import Navbar from "../Componenet/Navbar"
import SocialMedia from "../Componenet/SocialMedia"
import Tagline from "../Componenet/Tagline"
import About from "./About"
import Pro from "./Pro"
import Ex from "./Ex"
import Footer from "../Componenet/Footer"

const Homepage = () => {
  return (
    <div className="bg-black h-screen w-screen overflow-x-hidden">
      <Navbar />
      <div className="px-14">
        <SocialMedia />
        <Tagline />
        <About />
        <Ex />
        <Pro />
        <Footer />
      </div>
    </div>
  )
}

export default Homepage
