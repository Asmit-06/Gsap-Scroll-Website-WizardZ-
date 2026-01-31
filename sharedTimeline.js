// src/sharedTimeline.js
import gsap from "gsap"

export const mainTL = gsap.timeline({
  paused: true,
  defaults: {
    ease: "power3.out"
  }
})
