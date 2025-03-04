import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere, Torus } from "@react-three/drei";

const Saturn = () => {
  const saturnRef = useRef();
  const saturnTexture = useLoader(TextureLoader, "/textureImages/saturn.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = Math.cos(t * 0.2) * 35; // Saturn's orbit distance
    const z = Math.sin(t * 0.2) * 35;

    // Update Saturn's position
    saturnRef.current.position.set(x, 0, z);
    saturnRef.current.rotation.y += 0.00015; // Fast rotation
  });

  return (
    <group ref={saturnRef}>
      {/* Saturn (Main Planet) */}
      <Sphere args={[2.2, 64, 64]}>
        <meshStandardMaterial map={saturnTexture} />
      </Sphere>

      {/* Saturn's Rings */}
      <Torus args={[3.5, 0.2, 2, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#C2B280" />
      </Torus>
    </group>
  );
};

export default Saturn;
