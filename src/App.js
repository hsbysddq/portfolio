import "./App.css"
import Navbar from "./Componenet/Navbar"
import SocialMedia from "./Componenet/SocialMedia"
import Tagline from "./Componenet/Tagline"
import About from "./Componenet/About"
function App() {
  return (
    <div className="bg-navy h-screen w-screen overflow-x-hidden">
      <div className="px-14">
        <SocialMedia />
        <Navbar />
        <Tagline />
        <About />
      </div>
    </div>
  )
}

export default App
