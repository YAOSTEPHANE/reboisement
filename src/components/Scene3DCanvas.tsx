"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Tree() {
  return (
    <group>
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.2, 1, 8]} />
        <meshStandardMaterial color="#5d4037" roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh position={[0, 1.4, 0]} castShadow>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#2d5a27" roughness={0.8} metalness={0} />
      </mesh>
    </group>
  );
}

function Forest() {
  return (
    <group>
      <Tree />
      <group position={[1.2, 0, 0.5]} scale={0.8}>
        <Tree />
      </group>
      <group position={[-0.9, 0, 0.3]} scale={0.7}>
        <Tree />
      </group>
    </group>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow shadow-mapSize={[512, 512]} />
      <pointLight position={[-3, 4, 2]} intensity={0.4} color="#a8e6cf" />
      <Forest />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
    </>
  );
}

export default function Scene3DCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "280px",
        background: "linear-gradient(180deg, #e8f5e9 0%, #c8e6c9 100%)",
      }}
    >
      <Suspense
        fallback={
          <mesh>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshBasicMaterial color="#2d5a27" wireframe />
          </mesh>
        }
      >
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}
