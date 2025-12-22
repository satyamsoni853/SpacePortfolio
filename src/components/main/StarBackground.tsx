"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
const StarBackground = (props: any) => {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => {
    const float32Array = new Float32Array(5000 * 3); // 5000 stars, x y z
    const radius = 1.2;
    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3;
      // Simple random distribution in a cube, filtered to sphere would be better but simple random is usually fine for this effect or use proper math
      // Using rejection sampling or normalized vector * random radius
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = Math.cbrt(Math.random()) * radius; // cuberoot for uniform distribution

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      float32Array[i3] = x;
      float32Array[i3 + 1] = y;
      float32Array[i3 + 2] = z;
    }
    return float32Array;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
