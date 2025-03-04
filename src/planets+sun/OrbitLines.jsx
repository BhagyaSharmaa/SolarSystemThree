import { Line } from "@react-three/drei";

const orbits = [
  { radius: 5, color: "gray" },    // Mercury
  { radius: 8, color: "yellow" },  // Venus
  { radius: 11, color: "blue" },   // Earth
  { radius: 15, color: "red" },    // Mars
  { radius: 25, color: "orange" }, // Jupiter
  { radius: 35, color: "gold" },   // Saturn
  { radius: 45, color: "cyan" },   // Uranus
  { radius: 55, color: "purple" }  // Neptune
];

const OrbitLines = () => {
  return (
    <>
      {orbits.map((orbit, index) => {
        const points = Array.from({ length: 100 }, (_, i) => {
          const angle = (i / 100) * Math.PI * 2;
          return [Math.cos(angle) * orbit.radius, 0, Math.sin(angle) * orbit.radius];
        });

        return <Line key={index} points={points} color={orbit.color} lineWidth={1} />;
      })}
    </>
  );
};

export default OrbitLines;
