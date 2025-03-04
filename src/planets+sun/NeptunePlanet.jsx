import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";

const Neptune = () => {
  const neptuneRef = useRef();
  const neptuneTexture = useLoader(TextureLoader, "/textureImages/neptune.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = Math.cos(t * 0.1) * 55; // Neptune's orbit distance
    const z = Math.sin(t * 0.1) * 55;

    neptuneRef.current.position.set(x, 0, z);
    neptuneRef.current.rotation.y += 0.008; // Slower rotation
  });

  return (
    <Sphere ref={neptuneRef} args={[1.7, 64, 64]}>
      <meshStandardMaterial map={neptuneTexture} />
    </Sphere>
  );
};

export default Neptune;
