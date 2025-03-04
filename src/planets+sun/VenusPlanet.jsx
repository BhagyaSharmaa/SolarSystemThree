import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";

const Venus = () => {
  const venusRef = useRef();
  const venusTexture = useLoader(TextureLoader, "/textureImages/venus.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    venusRef.current.position.x = Math.cos(t * 1) * 8; // Wider orbit
    venusRef.current.position.z = Math.sin(t * 1) * 8;
    venusRef.current.rotation.y += 0.005; // Slower self-rotation
  });

  return (
    <Sphere ref={venusRef} args={[0.9, 32, 32]}>
      <meshStandardMaterial map={venusTexture} />
    </Sphere>
  );
};

export default Venus;
