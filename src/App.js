import "./App.css"
import Navbar from "./Componenet/Navbar"
import SocialMedia from "./Componenet/SocialMedia"
import Tagline from "./Componenet/Tagline"
function App() {
  return (
    <div className="bg-navy h-screen w-screen">
      <SocialMedia />
      <div className="container">
        <Navbar />
        <Tagline />
      </div>
    </div>
  )
}

export default App
