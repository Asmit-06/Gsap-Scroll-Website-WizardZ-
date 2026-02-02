import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Page2 } from "./components/Page2"
import { Page3 } from "./components/Page3"
import { Footer } from "./components/Footer"
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  smooth: true,
  lerp: 0.08, // smoothness (0.05–0.1 sweet spot)
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
function App() {

return(
  <main className="h-dvh ">
    <Nav/>
    <Hero/>
    <Page2/>
    <Page3/>
    <Footer/>
    
  </main>
)
}

export default App
