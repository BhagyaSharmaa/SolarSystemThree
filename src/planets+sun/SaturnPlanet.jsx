import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere, Torus } from "@react-three/drei";

const Saturn = ({ size, speed, distance }) => {
  const saturnRef = useRef();
  const saturnTexture = useLoader(TextureLoader, "/textureImages/saturn.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = Math.cos(t * speed) * distance;
    const z = Math.sin(t * speed) * distance;

    // Update Saturn's position dynamically
    saturnRef.current.position.set(x, 0, z);
    saturnRef.current.rotation.y += 0.01; // Keep rotation effect
  });

  return (
    <group ref={saturnRef}>
      {/* Saturn (Main Planet) */}
      <Sphere args={[size, 64, 64]}>
        <meshStandardMaterial map={saturnTexture} />
      </Sphere>

      {/* Saturn's Rings */}
      <Torus args={[size * 1.6, 0.2, 2, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#C2B280" />
      </Torus>
    </group>
  );
};

export default Saturn;
