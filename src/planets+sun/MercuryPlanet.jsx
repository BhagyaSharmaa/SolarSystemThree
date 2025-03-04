import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";

const Mercury = ({size, speed, distance}) => {
  const mercuryRef = useRef();
  const mercuryTexture = useLoader(TextureLoader, "/textureImages/mercury.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = Math.cos(t * speed) * distance;
    const z = Math.sin(t * speed) * distance;
    mercuryRef.current.position.set(x, 0, z);
    mercuryRef.current.rotation.y += 0.01;
  });
  return (
    <Sphere ref={mercuryRef} args={[size, 32, 32]}>
      <meshStandardMaterial map={mercuryTexture} />
    </Sphere>
  );
};

export default Mercury;
