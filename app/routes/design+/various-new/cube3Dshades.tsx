import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber"; // Import Three.js canvas renderer and animation hook
import { OrbitControls } from "@react-three/drei"; // Import orbit controls for camera manipulation
import * as THREE from "three"; // Import Three.js library

// Defines the rotating object component
export const Experience = () => {
  // Use useRef to keep a persistent reference to the mesh, initializing it to avoid TypeScript errors
  const meshRef = useRef<THREE.Mesh>(new THREE.Mesh());

  // useFrame hook to update the mesh rotation every frame, creating an animation
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime(); // Get the elapsed time
    if (meshRef.current) {
      // Update the mesh's rotation over time to create a rotating effect
      meshRef.current.rotation.x = Math.sin(time * 0.3);
      meshRef.current.rotation.y = Math.cos(time * 0.3);
    }
  });

  // Define materials for the different faces of the mesh
  const materials = [
    new THREE.MeshBasicMaterial({ color: "#025373" }), // Red face
    new THREE.MeshBasicMaterial({ color: "#03738C" }), // Green face
    new THREE.MeshBasicMaterial({ color: "#9C6892" }), // Blue face
    new THREE.MeshBasicMaterial({ color: "#c98549" }), // Yellow face
    new THREE.MeshBasicMaterial({ color: "#F27D72" }), // Magenta face
    new THREE.MeshBasicMaterial({ color: "#F2B680" }), // Cyan face
  ];

  return (
    <>
      <OrbitControls /> {/* Enables camera control (pan, zoom, rotate) */}
      <mesh ref={meshRef} material={materials}>
        {" "}
        {/* Creates a 3D object */}
        <boxGeometry args={[2, 2, 2]} />{" "}
        {/* Defines the shape and size of the mesh */}
      </mesh>
    </>
  );
};

// Defines the main component that renders the 3D scene
export default function Cube3DShades() {
  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 20 }}>
      {" "}
      {/* Sets up the 3D canvas and camera */}
      <ambientLight intensity={0.5} /> {/* Adds light to the scene */}
      <pointLight position={[10, 10, 10]} />{" "}
      {/* Adds a point light to the scene */}
      <Experience /> {/* Includes the rotating object component in the scene */}
    </Canvas>
  );
}
