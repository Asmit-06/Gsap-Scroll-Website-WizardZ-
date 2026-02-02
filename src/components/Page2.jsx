import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export function Page2() {
 const page2Ref = useRef()
 const gridRef = useRef()
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


  useGSAP(() => {
    const leftBoxes = gsap.utils.toArray(".search, .social");
    const rightBoxes = gsap.utils.toArray(".advertise, .marketing");
  
    gsap.from(leftBoxes, {
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top bottom",
        end: "top 10%",
        scrub: true,
      },
      x: -80,
      opacity: 0,
      
      
    });
  
    gsap.from(rightBoxes, {
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top bottom",
        end: "top 10%",
        scrub: true,
      },
      x: 80,
      opacity: 0,
     
      
    });
  }, { scope: page2Ref });
  
  return (
    <section id="page2" ref={page2Ref}>
      <div className="services pl-6 flex items-center  gap-5 w-[1250px] mb-14">
        <h1 className="service-text text-7xl ml-10 font-bold bg-[#A1EB7F] px-3 py-4 rounded-[7px]">Services</h1>
        <p className="service-p text-3xl">
          At our digital marketting agency, we offer a range of services to help <br />
          businesses grow and succeed online. These services includes: 
        </p>
      </div>

      <div className="grid grid-cols-2 gap-10 pl-15  " ref={gridRef}>
        <div className="box search flex justify-between items-center border-2 border-black rounded-2xl  w-[43vw] p-10 ">
          <div className="content ">
            <h1 className="font-bold text-5xl mb-10 bg-[#a1eb7f] py-5 px-5">
              Search Engine Optimization
            </h1>
            <p className="text-3xl"><span className="text-white bg-black rounded-[50%] px-2 text-3xl   ">&rarr;</span> Learn More</p>
          </div> 
          <img className="w-[22vw] h-[30vh]" src="https://wizardz-ak.netlify.app/img/download.jpg" alt="" />
        </div>
        <div className="box advertise flex justify-between items-center border-2 border-black rounded-2xl w-[43vw]  p-10">
          <div className="content ">
            <h1 className="font-bold text-5xl mb-10 bg-[#a1eb7f] py-5 px-5">Pay per click
            advertising</h1>
            <p className="text-3xl"><span className="text-white bg-black rounded-[50%] px-2 text-3xl ">&rarr;</span> Learn More</p>
          </div>
          <img className="w-[22vw] h-[30vh]" src="https://wizardz-ak.netlify.app/img/PPC.jpg" alt="" />
        </div>
        <div className="box social flex justify-between items-center border-2 border-black rounded-2xl w-[43vw]  p-10">
          <div className="content">
            <h1 className="font-bold text-5xl mb-10 bg-[#a1eb7f] py-5 px-5">Social media
            marketing</h1>
            <p className="text-3xl"><span className="text-white bg-black rounded-[50%] px-2 text-3xl">&rarr;</span> Learn More</p>
          </div>
          <img className="w-[22vw] h-[30vh]" src="https://wizardz-ak.netlify.app/img/social.jpg" alt="" />
        </div>
        <div className="box marketing flex justify-between items-center border-2 border-black rounded-2xl w-[43vw]  p-10">
          <div className="content ">
            <h1 className="font-bold text-5xl mb-10 bg-[#a1eb7f] py-5 px-5">E-mail
            marketing</h1>
            <p className="text-3xl"><span className="text-white bg-black rounded-[50%] px-2 text-3xl">&rarr;</span> Learn More</p>
          </div>
          <img className="w-[22vw] h-[30vh]" src="https://wizardz-ak.netlify.app/img/email.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
