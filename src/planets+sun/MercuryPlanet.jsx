import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";

const Mercury = () => {
  const mercuryRef = useRef();
  const mercuryTexture = useLoader(TextureLoader, "/textureImages/mercury.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    mercuryRef.current.position.x = Math.cos(t * 1.5) * 5; // Orbit around Sun
    mercuryRef.current.position.z = Math.sin(t * 1.5) * 5;
    mercuryRef.current.rotation.y += 0.01; // Self-rotation
  });

  return (
    <Sphere ref={mercuryRef} args={[0.4, 32, 32]}>
      <meshStandardMaterial map={mercuryTexture} />
    </Sphere>
  );
};

export default Mercury;
