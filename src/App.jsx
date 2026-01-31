import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { mainTL } from "../sharedTimeline"
import { useGSAP } from "@gsap/react"
function App() {
  useGSAP(() => {
    mainTL.play()
  })
return(
  <main className="h-dvh overflow-hidden">
    <Nav/>
    <Hero/>
  </main>
)
}

export default App
