import React, { useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useScrollTrigger } from "~/utils/useScrollTrigger";
import "./gsapTwo.css";
import { useScrollSmoother } from "~/utils/useScrollSmoother";

const { useRef } = React;

export default function GSAPTwo() {
  const ScrollTrigger = useScrollTrigger();
  const ScrollSmoother = useScrollSmoother();
  const circle = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      console.log("useGSAP");
      // use selectors...

      console.log("ScrollTrigger");
      if (ScrollTrigger && ScrollSmoother) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        console.log("active scroll trigger");
        gsap.to(".box", {
          scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
          x: 500,
        });
        const scrollerSmoother = ScrollSmoother.create({
          content: "#content",
          wrapper: "#wrapper",
          smooth: true,
          effects: false,
          normalizeScroll: true,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".accordions",
            pin: true,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            ease: "linear",
          },
        });

        tl.to(".accordion .text", {
          height: 0,
          paddingBottom: 0,
          opacity: 0,
          stagger: 0.5,
        });
        tl.to(
          ".accordion",
          {
            marginBottom: -15,
            stagger: 0.5,
          },
          "<"
        );
      }

      // or refs...
      gsap.to(circle.current, { rotation: "-=360", duration: 3 });
    },
    { dependencies: [ScrollTrigger, ScrollSmoother], scope: container }
  ); // <-- scope for selector text (optional)

  return (
    <div id="wrapper" className="pt-[6vh]">
      <div id="content">
        <div className="spacer"></div>
        <div className="accordions">
          <div className="accordion">
            <div className="title">All-screen design.</div>
            <div className="text">
              Lets you immerse yourself in whatever you’re reading, watching, or
              creating. The 10.9-inch Liquid Retina display features advanced
              technologies like True Tone, P3 wide color, and an antireflective
              coating.1
            </div>
          </div>
          <div className="accordion">
            <div className="title"> Beauty all around.</div>
            <div className="text">
              The breakthrough M1 chip is now in Air. An 8-core CPU delivers up
              to 60 percent faster performance than the previous generation,
              making Air a creative and mobile gaming powerhouse. Multitask
              smoothly between powerful apps and play graphics-intensive games.
              And with M1, you can go even further with your creativity with
              apps like SketchUp.
            </div>
          </div>
          <div className="accordion">
            <div className="title">Take Center Stage.</div>
            <div className="text">
              The 12MP Ultra Wide front camera enables Center Stage, making
              video calls more natural and content creation more fun. As you
              move around, the camera automatically pans to keep you centered in
              the shot. When others join or leave the frame, the view expands or
              zooms in.
            </div>
          </div>
          <div className="accordion">
            <div className="title">Pretty everywhere.</div>
            <div className="text">
              Join superfast 5G wireless networks when you’re on the go.
              Download files, play multiplayer games, stream movies, check in
              with friends, and more.
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  );
}
