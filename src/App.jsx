import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sun from           "./planets+sun/SunStar";
import Mercury from       "./planets+sun/MercuryPlanet";
import Venus from         "./planets+sun/VenusPlanet";
import Earth from         "./planets+sun/EarthPlanet";
import Mars from          "./planets+sun/MarsPlanet";
import Jupiter from       "./planets+sun/JupiterPlanet";
import Saturn from        "./planets+sun/SaturnPlanet";
import Uranus from        "./planets+sun/UranusPlanet";
import Neptune from       "./planets+sun/NeptunePlanet";
import OrbitLines from    "./planets+sun/OrbitLines";
import ConfigPanel from   "./planets+sun/ConfigPanel"; // User input panel

function App() {
  // State for planets (Size, Speed, Distance)
  const [planetConfig, setPlanetConfig] = useState({
    Mercury: { size: 0.4, speed: 1.5, distance: 5 },
    Venus: { size: 0.9, speed: 1, distance: 8 },
    Earth: { size: 1, speed: 0.8, distance: 11 },
    Mars: { size: 0.8, speed: 0.6, distance: 15 },
    Jupiter: { size: 2.5, speed: 0.3, distance: 25 },
    Saturn: { size: 2.2, speed: 0.2, distance: 35 },
    Uranus: { size: 1.8, speed: 0.15, distance: 45 },
    Neptune: { size: 1.7, speed: 0.1, distance: 55 }
  });

  return (
    <div className="w-screen h-screen bg-black flex">
      {/* Config Panel on Left */}
      <ConfigPanel planetConfig={planetConfig} setPlanetConfig={setPlanetConfig} />

      {/* Three.js Canvas */}
      <Canvas camera={{ position: [0, 30, 80], fov: 50 }}>
        <OrbitControls />
        <ambientLight intensity={2} />
        <pointLight position={[0, 0, 0]} intensity={10} />
        <OrbitLines />

        {/* Planets with dynamic properties */}
        <Sun />
        <Mercury {...planetConfig.Mercury} />
        <Venus {...planetConfig.Venus} />
        <Earth {...planetConfig.Earth} />
        <Mars {...planetConfig.Mars} />
        <Jupiter {...planetConfig.Jupiter} />
        <Saturn {...planetConfig.Saturn} />
        <Uranus {...planetConfig.Uranus} />
        <Neptune {...planetConfig.Neptune} />
      </Canvas>
    </div>
  );
}

export default App;
