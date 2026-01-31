import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { mainTL } from "../../sharedTimeline"

export function Hero() {
  const heroRef = useRef()

  useGSAP(
    () => {
      mainTL.from(
        heroRef.current.querySelectorAll("h1, button"),
        {
          x: 200,
          opacity: 0,
          stagger:0.13,
          duration: 0.8
        }
      ).from(heroRef.current.querySelectorAll("p"),{
        x:-200,
        opacity:0,
        
     
      }).from(".img",{
        x:200,
        opacity:0,
     
      },"-=0.5")
    },
    { scope: heroRef }
  )

  return (
    <section
      ref={heroRef}
      className="hero p-10 flex justify-between"
    >
      <div className="w-[820px]">
        <h1 className="text-8xl leading-tight mb-12">
          Navigating the digital landscape for success
        </h1>

        <p className="text-4xl leading-tight">
          Our digital marketing agency helps businesses grow and succeed online
          through SEO, PPC, social media marketing and content creation.
        </p>

        <button className="bg-black text-white text-2xl font-bold px-10 py-6 rounded-[10px] mt-10">
          Book a consultation
        </button>
      </div>

      <img
        className="img h-[73vh]"
        src="https://wizardz-ak.netlify.app/img/side%20img.jpg"
        alt=""
      />
    </section>
  )
}
