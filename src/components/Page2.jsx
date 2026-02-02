import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export function Page2() {
 const page2Ref = useRef()
  useGSAP(()=>{
    gsap.timeline({
      scrollTrigger:{
        trigger:".services",
        start: "top 95%",
        end: "top 60%",
        scrub:true,
      }
    }).from(".service-text",{
      x:-60,
      opacity:0,
   
    }).from(".service-p",{
      x:60,
      opacity:0
    },"<")
  },{scope:page2Ref})
  return (
    <section id="page2" ref={page2Ref}>
      <div className="services pl-6 flex items-center  gap-5 w-[1250px] ">
        <h1 className="service-text text-7xl ml-12 font-bold bg-[#A1EB7F] px-3 py-4 rounded-[7px]">Services</h1>
        <p className="service-p text-3xl">
          At our digital marketting agency, we offer a range of services to help <br />
          businesses grow and succeed online. These services includes: 
        </p>
      </div>

      
    </section>
  );
}
