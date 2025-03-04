import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";
import { Sphere } from "@react-three/drei";

const Sun = () => {
  const sunRef = useRef();

  // Load Sun texture
  const sunTexture = useLoader(TextureLoader, "/textureImages/realSun.jpeg");

  // Ensure the texture wraps around the entire sphere
  sunTexture.wrapS = RepeatWrapping;
  sunTexture.wrapT = RepeatWrapping;
  sunTexture.repeat.set(1, 1); // Ensures no stretching

  // Rotate the Sun continuously
  useFrame(() => {
    sunRef.current.rotation.y += 0.002;
  });

  return (
    <>
      {/* Sun with properly applied texture */}
      <Sphere ref={sunRef} args={[2, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          map={sunTexture} // Apply the Sun texture
          emissiveMap={sunTexture} // Use the same texture for emission
          emissiveIntensity={0.3} // Reduced intensity to show texture
          emissive={null} // Remove extra yellow glow
        />
      </Sphere>

      {/* Light Source */}
      <pointLight position={[0, 0, 0]} intensity={10} />
      <ambientLight intensity={2} />
    </>
  );
};

export default Sun;
