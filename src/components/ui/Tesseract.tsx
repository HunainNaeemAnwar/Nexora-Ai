// Tesseract.tsx

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import type { FC } from "react";

const InnerCube: FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.0025;
      groupRef.current.rotation.y += 0.005;
    }
  });

  const cubes = [];
  const spacing = 1.6;
  const size = 1.4;

  for (let x = -spacing; x <= spacing; x += spacing) {
    for (let y = -spacing; y <= spacing; y += spacing) {
      for (let z = -spacing; z <= spacing; z += spacing) {
        cubes.push(
          <mesh key={`${x}${y}${z}`} position={[x, y, z]}>
            <boxGeometry args={[size, size, size]} />
            <meshStandardMaterial
              color="black"
              metalness={1}
              roughness={0.2}
              envMapIntensity={1}
            />
            <Edges color="#d9d9d9" threshold={15} />
          </mesh>
        );
      }
    }
  }

  return <group ref={groupRef}>{cubes}</group>;
};

const Tesseract: FC = () => {
  return (
    <div className="inline-block max-w-[80vw] md:w-full w-auto overflow-hidden h-[500px] sm:h-[600px] md:h-[540px] bg-transparent">
      <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[15, 15, 15]} intensity={1.5} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        <InnerCube />
      </Canvas>
    </div>
  );
};

export default Tesseract;
