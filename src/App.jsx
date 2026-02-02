import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Page2 } from "./components/Page2"
import { mainTL } from "../sharedTimeline"
import { useGSAP } from "@gsap/react"
function App() {

return(
  <main className="h-dvh ">
    <Nav/>
    <Hero/>
    <Page2/>
    <div className="h-dvh"></div>
  </main>
)
}

export default App
