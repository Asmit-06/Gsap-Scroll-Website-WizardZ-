import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import { useRef } from "react"

import { mainTL } from "../../sharedTimeline"
export function Nav(){
  const ulRef = useRef()
  const navRef = useRef()
  useGSAP(()=>{
    const lis = gsap.utils.toArray(ulRef.current.children)

   

    mainTL.from(lis,{
      y:-400,
      opacity:0,
      duration:1,
      stagger:0.16,
      ease:"power1.inOut",
      filter: "blur(6px)",
    })
  },{scope:navRef})
  return(
    <nav className="flex items-center  p-10 justify-between " ref={navRef}>
      <div className="left flex items-center gap-2 justify-center">
        <img src="https://wizardz-ak.netlify.app/img/sparkle.png" className="w-[60px]" alt="" />
        <h2 className="text-4xl font-bold">
          WizardZ
        </h2>
      </div>

      <div className="right">
        <ul className="flex font-bold items-center gap-16 text-4xl justify-center" ref={ulRef}>
          <li>About Us</li>
          <li>Service</li>
          <li>Use Cases</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>

    </nav>
  )
}