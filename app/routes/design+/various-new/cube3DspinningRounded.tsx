import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

export const Experience = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time * 0.5);
      meshRef.current.rotation.y = Math.cos(time * 0.5);
    }
  });

  return (
    <>
      <OrbitControls />
      <mesh ref={meshRef}>
        <RoundedBox args={[2, 2, 2]} radius={0.2}>
          <meshPhongMaterial>
            <color attach="color" args={["#ff0000"]} />
            <color attach="emissive" args={["#440000"]} />
          </meshPhongMaterial>
        </RoundedBox>
      </mesh>
    </>
  );
};

export default function Cube3DSpinningRounded() {
  return (
    <Canvas shadows camera={{ position: [5, 5, 5], fov: 30 }}>
      <color attach="background" args={["#45233e"]} />
      <pointLight position={[12, 12, 12]} />
      <Experience />
    </Canvas>
  );
}
