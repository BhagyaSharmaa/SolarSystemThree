import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";

const Uranus = () => {
  const uranusRef = useRef();
  const uranusTexture = useLoader(TextureLoader, "/textureImages/uranus.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = Math.cos(t * 0.15) * 45; // Uranus' orbit distance
    const z = Math.sin(t * 0.15) * 45;

    uranusRef.current.position.set(x, 0, z);
    uranusRef.current.rotation.y += 0.01; // Slow rotation
  });

  return (
    <Sphere ref={uranusRef} args={[1.8, 64, 64]}>
      <meshStandardMaterial map={uranusTexture} />
    </Sphere>
  );
};

export default Uranus;
