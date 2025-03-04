import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";

const Uranus = ({size, speed, distance}) => {
  const uranusRef = useRef();
  const uranusTexture = useLoader(TextureLoader, "/textureImages/uranus.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = Math.cos(t * speed) * distance;
    const z = Math.sin(t * speed) * distance;
    uranusRef.current.position.set(x, 0, z);
    uranusRef.current.rotation.y += 0.01;
  });

  return (
    <Sphere ref={uranusRef} args={[size, 64, 64]}>
      <meshStandardMaterial map={uranusTexture} />
    </Sphere>
  );
};

export default Uranus;
