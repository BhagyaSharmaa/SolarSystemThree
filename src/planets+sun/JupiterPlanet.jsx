import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";

const Jupiter = ({size, speed, distance}) => {
  const jupiterRef = useRef();
  const jupiterTexture = useLoader(TextureLoader, "/textureImages/Jupiter.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = Math.cos(t * speed) * distance;
    const z = Math.sin(t * speed) * distance;
    jupiterRef.current.position.set(x, 0, z);
    jupiterRef.current.rotation.y += 0.02; // Fast rotation
  });

  return (
    <Sphere ref={jupiterRef} args={[size, 64, 64]}>
      <meshStandardMaterial map={jupiterTexture} />
    </Sphere>
  );
};

export default Jupiter;
