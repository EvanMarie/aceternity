import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export const Experience = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time);
      meshRef.current.rotation.y = Math.cos(time);
    }
  });

  return (
    <>
      <OrbitControls />
      <mesh ref={meshRef}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default function Cube3DSpinning() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#45233e"]} />
      <Experience />
    </Canvas>
  );
}
