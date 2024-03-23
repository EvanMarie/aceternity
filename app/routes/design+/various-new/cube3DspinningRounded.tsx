import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber"; // Importing necessary functions from @react-three/fiber for 3D rendering
import { OrbitControls, RoundedBox } from "@react-three/drei"; // Importing OrbitControls for camera control and RoundedBox for a geometry
import * as THREE from "three"; // Importing THREE.js for 3D graphics

// Defines the Experience component
export const Experience = () => {
  const meshRef = useRef<THREE.Mesh>(null!); // Using useRef to hold a reference to the mesh, initialized as non-null assertion

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime(); // Getting the elapsed time since the start of the animation
    if (meshRef.current) {
      // If the mesh is loaded, update its rotation
      meshRef.current.rotation.x = Math.sin(time * 0.5); // Rotating the mesh on the x-axis
      meshRef.current.rotation.y = Math.cos(time * 0.5); // Rotating the mesh on the y-axis
    }
  });

  return (
    <>
      <OrbitControls />{" "}
      {/* Enabling camera controls to orbit around the scene */}
      <mesh ref={meshRef}>
        {" "}
        {/* Creating a mesh and linking it to meshRef */}
        <RoundedBox args={[2, 2, 2]} radius={0.2}>
          {" "}
          {/* Creating a rounded box with specified dimensions and corner radius */}
          <meshPhongMaterial>
            {" "}
            {/* Applying a material that interacts with light for shading */}
            <color attach="color" args={["#ff0000"]} />{" "}
            {/* Setting the base color of the material */}
            <color attach="emissive" args={["#440000"]} />{" "}
            {/* Setting the emissive color to make the material "glow" */}
          </meshPhongMaterial>
        </RoundedBox>
      </mesh>
    </>
  );
};

// Defines the main component for rendering the 3D scene
export default function Cube3DSpinningRounded() {
  return (
    <Canvas shadows camera={{ position: [5, 5, 5], fov: 30 }}>
      {" "}
      {/* Setting up the 3D canvas and defining camera properties */}
      <color attach="background" args={["#45233e"]} />{" "}
      {/* Setting the background color of the canvas */}
      <pointLight position={[12, 12, 12]} />{" "}
      {/* Adding a point light to the scene */}
      <Experience />{" "}
      {/* Rendering the Experience component within the Canvas */}
    </Canvas>
  );
}
