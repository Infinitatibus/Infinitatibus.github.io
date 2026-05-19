import { useState } from "react";

import './keyboard.css';

export default function Keyboard({ width, height, onKey, radius }) {
  const topRow = "ABCDEFGHIJKLM".split("");
  const bottomRow = "NOPQRSTUVWXYZ".split("");

  const renderArc = (
    letters,
    radius,
    startAngle,
    endAngle
  ) => {
    return letters.map((letter, i) => {
      const t = i / (letters.length - 1);

      const angle =
        startAngle + (endAngle - startAngle) * t;

      const x =
        width / 2 + radius * Math.cos(angle);

      const y =
        height*2.2 - radius * Math.sin(angle);

      return (
        <g
          key={letter}
          transform={`translate(${x}, ${y})`}
          onClick={() =>
            onKey(letter)
          }
          className="keytarget"
        >

          <text
            className="key"
          >
            {letter}
          </text>
        </g>
      );
    });
  };

  return (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
      >
        {renderArc(
          topRow,
          820,
          Math.PI * 0.7,
          Math.PI * 0.3
        )}
        
        {renderArc(
          bottomRow,
          680,
          Math.PI * 0.68,
          Math.PI * 0.32
        )}
      </svg>
  );
}