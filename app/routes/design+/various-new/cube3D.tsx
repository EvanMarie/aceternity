import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default function Cube3D() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      {/* <color attach="background" args={["#45233e"]} /> */}
      <Experience />
    </Canvas>
  );
}
