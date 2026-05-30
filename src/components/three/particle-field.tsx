"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/components/theme/theme-provider";

function readAccent(name: string, fallback: string) {
  if (typeof window === "undefined") return new THREE.Color(fallback);
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return new THREE.Color(v || fallback);
}

function Stars() {
  const ref = useRef<THREE.Points>(null);

  // Reads the current theme's accent CSS vars. Stars is keyed on `theme` by the
  // parent, so this useMemo re-runs (with fresh vars) whenever the theme changes.
  const { positions, colors } = useMemo(() => {
    const count = 2800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      readAccent("--color-accent-1", "#6366f1"),
      readAccent("--color-accent-2", "#a855f7"),
      readAccent("--color-accent-3", "#ec4899"),
      readAccent("--color-accent-2", "#a855f7"),
    ];
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = r * Math.cos(phi);
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

export function ParticleField() {
  const { theme } = useTheme();
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]}>
        <Stars key={theme} />
      </Canvas>
    </div>
  );
}
