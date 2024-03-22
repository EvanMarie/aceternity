import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export const Experience = () => {
  // Initialize the ref with a default mesh to satisfy TypeScript's strict null checks
  const meshRef = useRef<THREE.Mesh>(new THREE.Mesh());

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time * 0.3);
      meshRef.current.rotation.y = Math.cos(time * 0.3);
    }
  });

  // Define materials for each face
  const materials = [
    new THREE.MeshBasicMaterial({ color: "#025373" }), // red
    new THREE.MeshBasicMaterial({ color: "#03738C" }), // green
    new THREE.MeshBasicMaterial({ color: "#9C6892" }), // blue
    new THREE.MeshBasicMaterial({ color: "#c98549" }), // yellow
    new THREE.MeshBasicMaterial({ color: "#F27D72" }), // magenta
    new THREE.MeshBasicMaterial({ color: "#F2B680" }), // cyan
  ];

  return (
    <>
      <OrbitControls />
      <mesh ref={meshRef} material={materials}>
        <boxGeometry args={[2, 2, 2]} />
      </mesh>
    </>
  );
};

export default function Cube3DShades() {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 30 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Experience />
    </Canvas>
  );
}
