import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export function Page3() {
  const page3Ref = useRef();
  useGSAP(
    () => {
      gsap.from(".content", {
        scrollTrigger: {
          trigger: page3Ref.current,
          scrub: true,
          start: "top 80%",
          end: "top 55%",
        },
        scale: 0,
        opacity: 0,
        ease: "expo.out",
        duration: 1,
      });
    },
    { scope: page3Ref }
  );

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".case-study",
            start: "top 95%",
            end: "top 60%",
            scrub: true,
          },
        })
        .from(".service-text", {
          x: -60,
          opacity: 0,
        })
        .from(
          ".service-p",
          {
            x: 60,
            opacity: 0,
          },
          "<"
        );
    },
    { scope: page3Ref }
  );

  useGSAP(
    () => {
      gsap.from(".last", {
        scrollTrigger: {
          trigger: ".last",
          scrub: true,
          start: "top bottom",
          end: "top 55%",
        },
        scale: 0,
        opacity: 0,
        ease: "expo.out",
        duration: 1,
      });
    },
    { scope: page3Ref }
  );

  return (
    <section id="page3" ref={page3Ref}>
      <div className="section px-16 mt-14 ">
        <div className="content bg-[#cecccc] rounded-2xl px-14 py-10 flex items-center justify-between">
          <div className="part1">
            <h1 className="text-5xl font-bold mb-10">
              Let's make thing happen
            </h1>
            <p className="text-3xl mb-14">
              Contact us today to learn more about how our digital <br />
              marketing services can help your business grow and <br />
              succeed online.
            </p>
            <button className="bg-black text-2xl text-white font-bold px-8 py-6 rounded-2xl">
              Get your free proposal
            </button>
          </div>
          <div className="part2">
            <img
              className="h-[50vh] w-[40vw]"
              src="https://wizardz-ak.netlify.app/img/star.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="case-study pl-6 flex items-center gap-5 w-[1500px] mb-14 mt-16">
        <h1 className="service-text text-7xl ml-10 font-bold bg-[#A1EB7F] px-3 py-5 rounded-[7px]">
          Case Study
        </h1>
        <p className="service-p text-3xl">
          Explore Real-Life Example of Our Proven Digital Marketing Success{" "}
          <br />
          through Our Case Studies.
        </p>
      </div>

      <div className="last flex bg-black w-[95%] mx-auto rounded-2xl items-center justify-between px-18 py-22">
        <div className="first">
          <p className="text-white text-2xl mb-18">
            For a local restraurant, we implemented a <br /> targeted PPC
            campaign that resulted i a <br /> 50% increase in website traffic
            and a 25% <br /> increase in traffic.
          </p>
          <p className="text-[#9AE975] text-2xl">
            Learn More <span>&rarr;</span>
          </p>
        </div>
        <div className="vl bg-white w-0.5 h-[33vh]"></div>
        <div className="second">
          <p className="text-white text-2xl mb-18">
            For a B2B software company, we developed <br /> an SEO strategy that
            resulted in a first page <br /> ranking for key keywords and a 200%{" "}
            <br />
            increase in traffic.
          </p>
          <p className="text-[#9AE975] text-2xl">
            Learn More <span>&rarr;</span>
          </p>
        </div>
        <div className="vl  bg-white w-0.5 h-[33vh]"></div>
        <div className="third">
          <p className="text-white text-2xl mb-18">
            For a national rental chain, we <br /> created a social media
            marketing <br />
            campaign that increased following <br /> by 25% increase in online
            sales.
          </p>
          <p className="text-[#9AE975] text-2xl">
            {" "}
            Learn More <span>&rarr;</span>
          </p>
        </div>
      </div>
    </section>
  );
}
