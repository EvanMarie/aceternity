import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

export const Experience = () => {
  const meshRef1 = useRef<THREE.Mesh>(null!);
  const meshRef2 = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    [meshRef1, meshRef2].forEach((ref) => {
      if (ref.current) {
        ref.current.rotation.x = Math.sin(time * 0.5);
        ref.current.rotation.y = Math.cos(time * 0.5);
      }
    });
  });

  return (
    <>
      <OrbitControls />
      <mesh ref={meshRef1} position={[-1, 0, 0]}>
        <RoundedBox args={[1, 2, 2]} radius={0.2}>
          <meshPhongMaterial attach="material" color="#ff0000" />
        </RoundedBox>
      </mesh>
      <mesh ref={meshRef2} position={[1, 0, 0]}>
        <RoundedBox args={[1, 2, 2]} radius={0.2}>
          <meshPhongMaterial attach="material" color="#0000ff" />
        </RoundedBox>
      </mesh>
    </>
  );
};

export default function DoubleRectangularBoxes() {
  return (
    <Canvas shadows camera={{ position: [5, 5, 5], fov: 30 }}>
      <color attach="background" args={["#45233e"]} />
      <pointLight position={[12, 12, 12]} />
      <Experience />
    </Canvas>
  );
}
