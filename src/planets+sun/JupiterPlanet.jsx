import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";

const Jupiter = () => {
  const jupiterRef = useRef();
  const jupiterTexture = useLoader(TextureLoader, "/textureImages/Jupiter.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    jupiterRef.current.position.x = Math.cos(t * 0.3) * 25; // Jupiter's orbit
    jupiterRef.current.position.z = Math.sin(t * 0.3) * 25;
    jupiterRef.current.rotation.y += 0.02; // Fast rotation
  });

  return (
    <Sphere ref={jupiterRef} args={[2.5, 64, 64]}>
      <meshStandardMaterial map={jupiterTexture} />
    </Sphere>
  );
};

export default Jupiter;
