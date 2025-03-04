import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";

const Earth = ({ size, speed, distance }) => {
  const earthRef = useRef();
  const earthTexture = useLoader(TextureLoader, "/textureImages/earth.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = Math.cos(t * speed) * distance;
    const z = Math.sin(t * speed) * distance;
    earthRef.current.position.set(x, 0, z);
    earthRef.current.rotation.y += 0.01;
  });

  return (
    <Sphere ref={earthRef} args={[size, 32, 32]}>
      <meshStandardMaterial map={earthTexture} />
    </Sphere>
  );
};

export default Earth;
