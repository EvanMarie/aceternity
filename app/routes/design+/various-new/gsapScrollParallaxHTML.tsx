import "./gsapParallaxCSS.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useScrollTrigger } from "~/utils/useScrollTrigger";
import "./gsapTwo.css";
import { useScrollSmoother } from "~/utils/useScrollSmoother";
import { useRef } from "react";

export default function TestingGSAP() {
  const ScrollTrigger = useScrollTrigger();
  gsap.registerPlugin(ScrollTrigger);
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
  );
  let sections = gsap.utils.toArray(".panel");

  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 0.1,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=3000",
    },
  });

  gsap.set(".box-1, .box-2", { y: 100 });
  ScrollTrigger.defaults({
    markers: { startColor: "white", endColor: "white" },
  });

  // red section
  gsap.to(".box-1", {
    y: -130,
    duration: 2,
    ease: "elastic",
    scrollTrigger: {
      trigger: ".box-1",
      containerAnimation: scrollTween,
      start: "left center",
      toggleActions: "play none none reset",
      id: "1",
    },
  });

  // gray section
  gsap.to(".box-2", {
    y: -120,
    backgroundColor: "#1e90ff",
    ease: "none",
    scrollTrigger: {
      trigger: ".box-2",
      containerAnimation: scrollTween,
      start: "center 80%",
      end: "center 20%",
      scrub: true,
      id: "2",
    },
  });

  // purple section
  ScrollTrigger.create({
    trigger: ".box-3",
    containerAnimation: scrollTween,
    toggleClass: "active",
    start: "center 60%",
    id: "3",
  });

  // green section
  ScrollTrigger.create({
    trigger: ".green",
    containerAnimation: scrollTween,
    start: "center 65%",
    end: "center 51%",
    onEnter: () => console.log("enter"),
    onLeave: () => console.log("leave"),
    onEnterBack: () => console.log("enterBack"),
    onLeaveBack: () => console.log("leaveBack"),
    onToggle: (self) => console.log("active", self.isActive),
    id: "4",
  });

  // only show the relevant section's markers at any given time
  gsap.set(
    ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
    { autoAlpha: 0 }
  );
  ["red", "gray", "purple", "green"].forEach((triggerClass, i) => {
    ScrollTrigger.create({
      trigger: "." + triggerClass,
      containerAnimation: scrollTween,
      start: "left 30%",
      end: i === 3 ? "right right" : "right 30%",
      markers: false,
      onToggle: (self) =>
        gsap.to(".marker-" + (i + 1), {
          duration: 0.25,
          autoAlpha: self.isActive ? 1 : 0,
        }),
    });
  });

  // helper function for causing the sections to always snap in the direction of the scroll (next section) rather than whichever section is "closest" when scrolling stops.
  // function directionalSnap(increment) {
  //   let snapFunc = gsap.utils.snap(increment);
  //   return (raw, self) => {
  //     let n = snapFunc(raw);
  //     return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
  //   };
  // }

  return (
    <>
      <div className="description">
        <div>
          <h1>
            Horizontal "<code>containerAnimation</code>"
          </h1>
          <p>
            Scroll this page vertically and you'll see a horizontal
            fake-scrolling section where a container is animated on the x-axis
            using a ScrollTrigger animation. With{" "}
            <code>containerAnimation</code> you can trigger animations when
            certain elements <i>inside</i> that container enter the viewport
            horizontally! It's like a ScrollTrigger inside of a ScrollTrigger.
            🤯
          </p>
        </div>
        <div className="scroll-down">
          Scroll down<div className="arrow"></div>
        </div>
      </div>

      <div className="container">
        <div className="panel blue">
          Scroll down to animate horizontally &gt;
        </div>

        <section className="panel red">
          <div>
            <pre className="code-block prettyprint lang-js linenums">
              gsap.to(".box-1",{" "}
              {{
                y: -130,
                duration: 2,
                ease: "elastic",
                scrollTrigger: {
                  trigger: ".box-1",
                  containerAnimation: scrollTween,
                  start: "left center",
                  toggleActions: "play none none reset",
                },
              }}
              );
            </pre>
            Fire an animation at a particular spot...
          </div>
          <div className="box-1 box">box-1</div>
        </section>

        <section className="panel gray">
          <div>
            <pre className="code-block prettyprint lang-js linenums">
              gsap.to(".box-2",{" "}
              {{
                y: -120,
                backgroundColor: "#1e90ff",
                ease: "none",
                scrollTrigger: {
                  trigger: ".box-2",
                  containerAnimation: scrollTween,
                  start: "center 80%",
                  end: "center 20%",
                  scrub: true,
                },
              }}
              );
            </pre>
            ...or scrub it back &amp; forth with the scrollbar
          </div>
          <div className="box-2 box">box-2</div>
        </section>
        <section className="panel purple">
          <div>
            <pre className="code-block prettyprint lang-js linenums">
              ScrollTrigger.create(
              {{
                trigger: ".box-3",
                containerAnimation: scrollTween,
                toggleclassName: "active",
                start: "center 60%",
              }}
              );
            </pre>
            Toggle a CSS className
          </div>
          <div className="box-3 box">box-3</div>
        </section>
        <section className="panel green">
          <div>
            <pre className="code-block prettyprint lang-js linenums">
              ScrollTrigger.create(
              {{
                trigger: ".green",
                containerAnimation: scrollTween,
                start: "center 65%",
                end: "center 51%",
                onEnter: () => console.log("enter"),
                onLeave: () => console.log("leave"),
                onEnterBack: () => console.log("enterBack"),
                onLeaveBack: () => console.log("leaveBack"),
                onToggle: (self) => console.log("active", self.isActive),
              }}
              );
            </pre>
            Use the rich callback system
          </div>
        </section>
      </div>

      <div className="final">
        <div>
          <h1>Wasn't that fun?</h1>
          <p>Here are a few caveats to keep in mind:</p>
          <ul>
            <li>
              The fake-scrolling animation (just the part that's moving the
              container horizontally) must have no easing (
              <code>ease: "none"</code>).
            </li>
            <li>
              Pinning and snapping won't work on ScrollTriggers with a{" "}
              <code>containerAnimation</code>.
            </li>
            <li>
              The mapping of scroll position trigger points are based on the
              trigger element itself not being animated horizontally (inside the
              container). If you need to animate the trigger, you can either
              wrap it in a &lt;div&gt; and use that as the trigger instead or
              just factor the trigger's movement into your end position. For
              example, if you animate it left 100px, make the <code>end</code>{" "}
              100px further to the left.
            </li>
            <li>Requires ScrollTrigger 3.8.0 or later</li>
          </ul>
        </div>
      </div>
    </>
  );
}
