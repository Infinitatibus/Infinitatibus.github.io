import { useState } from "react";

import './keyboard.css';

export default function Keyboard({ width, height, onKey }) {
  const topRow = "ABCDEFGHIJKLM".split("");
  const bottomRow = "NOPQRSTUVWXYZ".split("");

  const renderArc = (
    letters,
    radius,
    startAngle,
    endAngle,
    row
  ) => {
    return letters.map((letter, i) => {
      const t = i / (letters.length - 1);

      const angle = startAngle + (endAngle - startAngle) * t;

      const x = width / 2 + radius * Math.cos(angle);

      const y = height*2.2 - radius * Math.sin(angle);

      const offsetTime = (i+row)*4.2;

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
            style={{'--offset': `-${offsetTime}s`}}
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
        style={{width: "100%", height: "auto"}}
      >
        {renderArc(
          topRow,
          width*0.4,
          Math.PI * 0.7,
          Math.PI * 0.3,
          1
        )}
        
        {renderArc(
          bottomRow,
          width*0.35,
          Math.PI * 0.68,
          Math.PI * 0.32,
          10
        )}
      </svg>
  );
}