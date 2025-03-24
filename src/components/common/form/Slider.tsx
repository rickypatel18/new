import React, { useState } from "react";
import "../../../assets/css/slider.css";

const Slider = () => {
  const minValue = 100;
  const maxValue = 10000;
  const step = 1;
  const gap = 500; // Minimum gap between sliders

  const [min, setMin] = useState(1000);
  const [max, setMax] = useState(5000);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < max - gap) {
      setMin(value);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > min + gap) {
      setMax(value);
    }
  };

  return (
    <div className="relative w-full mx-auto py-6 px-1">
      {/* Range Track */}
      <div className="w-full relative h-1 bg-[var(--color-background)] rounded">
        <div
          className="absolute h-1.5 bg-[var(--color-primary)] rounded"
          style={{
            left: `${(min / maxValue) * 100}%`,
            right: `${100 - (max / maxValue) * 100}%`,
          }}
        ></div>
      </div>

      {/* Range Inputs */}
      <div className="relative ">
        <input
          type="range"
          min={minValue}
          max={maxValue}
          step={step}
          value={min}
          onChange={handleMinChange}
          className="absolute w-full top-0 h-2 bg-transparent appearance-none pointer-events-none"
        />

        <input
          type="range"
          min={minValue}
          max={maxValue}
          step={step}
          value={max}
          onChange={handleMaxChange}
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none"
        />
      </div>

      {/* Display values above range thumbs */}
      <div className="relative flex justify-between ">
        <span
          className="absolute text-sm font-semibold text-white bg-transparent top-5 "
          style={{
            left: `${(min / maxValue) * 100}%`,
            transform: "translateX(-50%)",
          }}
        >
          ${min}
        </span>
        <span
          className="absolute text-sm font-semibold text-white bg-transparent 0 top-5"
          style={{
            left: `${(max / maxValue) * 100}%`,
            transform: "translateX(-50%)",
          }}
        >
          ${max}
        </span>
      </div>
    </div>
  );
};

export default Slider;
