import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";

const Mars = () => {
  const marsRef = useRef();
  const marsTexture = useLoader(TextureLoader, "/textureImages/mars.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    marsRef.current.position.x = Math.cos(t * 0.6) * 15; // Mars' orbit distance
    marsRef.current.position.z = Math.sin(t * 0.6) * 15;
    marsRef.current.rotation.y += 0.008; // Mars' self-rotation
  });

  return (
    <Sphere ref={marsRef} args={[0.8, 32, 32]}>
      <meshStandardMaterial map={marsTexture} />
    </Sphere>
  );
};

export default Mars;
