import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";

const Mars = ({size, speed, distance}) => {
  const marsRef = useRef();
  const marsTexture = useLoader(TextureLoader, "/textureImages/mars.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = Math.cos(t * speed) * distance;
    const z = Math.sin(t * speed) * distance;
    marsRef.current.position.set(x, 0, z);
    marsRef.current.rotation.y += 0.08;
  });

  return (
    <Sphere ref={marsRef} args={[size, 32, 32]}>
      <meshStandardMaterial map={marsTexture} />
    </Sphere>
  );
};

export default Mars;
