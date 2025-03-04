import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";

const Venus = ({size, speed, distance}) => {
  const venusRef = useRef();
  const venusTexture = useLoader(TextureLoader, "/textureImages/venus.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = Math.cos(t * speed) * distance;
    const z = Math.sin(t * speed) * distance;
    venusRef.current.position.set(x, 0, z);
    venusRef.current.rotation.y += 0.05;
  });

  return (
    <Sphere ref={venusRef} args={[size, 32, 32]}>
      <meshStandardMaterial map={venusTexture} />
    </Sphere>
  );
};

export default Venus;
