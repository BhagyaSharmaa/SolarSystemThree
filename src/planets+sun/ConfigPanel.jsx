import React from "react";

const ConfigPanel = ({ planetConfig, setPlanetConfig }) => {
  const updateConfig = (planet, key, value) => {
    setPlanetConfig((prev) => ({
      ...prev,
      [planet]: { ...prev[planet], [key]: value }
    }));
  };

  return (
    <div className="w-1/4 h-screen p-4 bg-gray-900 text-white overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Planet Settings</h2>
      {Object.keys(planetConfig).map((planet) => (
        <div key={planet} className="mb-6">
          <h3 className="text-md font-semibold">{planet}</h3>

          {/* Size Slider */}
          <label className="block text-sm">Size: {planetConfig[planet].size.toFixed(2)}</label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={planetConfig[planet].size}
            onChange={(e) => updateConfig(planet, "size", parseFloat(e.target.value))}
            className="w-full"
          />

          {/* Speed Slider */}
          <label className="block text-sm">Orbit Speed: {planetConfig[planet].speed.toFixed(2)}</label>
          <input
            type="range"
            min="0.05"
            max="2"
            step="0.05"
            value={planetConfig[planet].speed}
            onChange={(e) => updateConfig(planet, "speed", parseFloat(e.target.value))}
            className="w-full"
          />

          {/* Distance Slider */}
          <label className="block text-sm">Distance: {planetConfig[planet].distance.toFixed(2)}</label>
          <input
            type="range"
            min="3"
            max="60"
            step="1"
            value={planetConfig[planet].distance}
            onChange={(e) => updateConfig(planet, "distance", parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ConfigPanel;
