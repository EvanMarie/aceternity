import { useRef, useEffect } from "react";
import gsap from "gsap";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import VStack from "~/components/buildingBlocks/vStack";
// Assuming useGSAP is correctly imported from "@gsap/react"

export default function GSAPOne() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      // If specific scoping is needed, ensure you use GSAP targeting correctly
      // This ensures animations are applied only when the ref is not null
      gsap.to(container.current.querySelectorAll(".box"), {
        rotation: 720,
        duration: 2,
      });
    }
  }, []);

  return (
    <VStack>
      <div ref={container} className="bg-red-200 p-[2vh]">
        <div className="box">Hello</div>
      </div>
      <div ref={container} className="bg-red-200 p-[2vh]">
        <div className="box">Hello</div>
      </div>
    </VStack>
  );
}
