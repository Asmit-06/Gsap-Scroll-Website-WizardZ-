import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { mainTL } from "../../sharedTimeline";


export function Hero() {
  const heroRef = useRef();
  const marqeeRef = useRef();
  useGSAP(
    () => {
      mainTL
        .from(heroRef.current.querySelectorAll("h1, button"), {
          x: 200,
          opacity: 0,
          stagger: 0.13,
          duration: 0.8,
        })
        .from(heroRef.current.querySelectorAll("p"), {
          x: -200,
          opacity: 0,
        })
        .from(
          ".img",
          {
            x: 200,
            opacity: 0,
          },
          ">"
        );
    },
    { scope: heroRef }
  );

  useGSAP(() => {
    const el = marqeeRef.current;
    const totalWidth = el.scrollWidth / 2;
  
    gsap.fromTo(
      el,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 15,
        ease: "linear",
        repeat: -1,
   
      }
    );
  });
  return (
    <section ref={heroRef} className="hero p-10 flex  flex-col">
      <div className="flex justify-between">
        <div>
          <h1 className="text-8xl leading-tight mb-12 w-[820px] ">
            Navigating the digital landscape for success
          </h1>

          <p className="text-4xl leading-tight w-[740px]">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing and content creation.
          </p>

          <button className="bg-black text-white text-2xl font-bold px-10 py-6 rounded-[10px] mt-10 cursor-pointer">
            Book a consultation
          </button>
        </div>

        <img
          className="img h-[73vh]"
          src="https://wizardz-ak.netlify.app/img/side%20img.jpg"
          alt=""
        />
      </div>

      <div className=" overflow-hidden ">
        <div
          className="marquee inline-flex items-center  gap-20 whitespace-nowrap will-change-transform"
          ref={marqeeRef}
        >
          <img
            className="w-[230px]"
            src="https://wizardz-ak.netlify.app/img/logo.png"
            alt=""
          />
          <img
            className="w-[230px]"
            src="https://wizardz-ak.netlify.app/img/Dribbble.png"
            alt=""
          />
          <img
            className="w-[230px]"
            src="https://wizardz-ak.netlify.app/img/hubspot.png"
            alt=""
          />
          <img
            className="w-[230px]"
            src="https://wizardz-ak.netlify.app/img/notion.png"
            alt=""
          />
          <img
            className="w-[230px]"
            src="https://wizardz-ak.netlify.app/img/netflix.png"
            alt=""
          />
          <img
            className="w-[230px]"
            src="https://wizardz-ak.netlify.app/img/zoom.png"
            alt=""
          />
          <img
            className="w-[230px]"
            src="https://wizardz-ak.netlify.app/img/logo.png"
            alt=""
          />
          <img
            className="w-[230px]"
            src="https://wizardz-ak.netlify.app/img/Dribbble.png"
            alt=""
          />
          <img
            className="w-[230px]"
            src="https://wizardz-ak.netlify.app/img/hubspot.png"
            alt=""
          />
          <img
            className="w-[230px]"
            src="https://wizardz-ak.netlify.app/img/notion.png"
            alt=""
          />
          <img
            className="w-[230px]"
            src="https://wizardz-ak.netlify.app/img/netflix.png"
            alt=""
          />
          <img
            className="w-[230px]"
            src="https://wizardz-ak.netlify.app/img/zoom.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
