import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";

const Neptune = ({size, speed, distance}) => {
  const neptuneRef = useRef();
  const neptuneTexture = useLoader(TextureLoader, "/textureImages/neptune.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = Math.cos(t * speed) * distance;
    const z = Math.sin(t * speed) * distance;
    neptuneRef.current.position.set(x, 0, z);
    neptuneRef.current.rotation.y += 0.01;
});

  return (
    <Sphere ref={neptuneRef} args={[size, 64, 64]}>
      <meshStandardMaterial map={neptuneTexture} />
    </Sphere>
  );
};

export default Neptune;
