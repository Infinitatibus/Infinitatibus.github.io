import { useLayoutEffect, useRef, useState } from "react";

import './keyboard.css';

export default function Keyboard({ width, height, onKey }) {
  const svgRef = useRef(null);
  const [scaleFactor, setScaleFactor] = useState(1);

  const topRow = "ABCDEFGHIJKLM".split("");
  const bottomRow = "NOPQRSTUVWXYZ".split("");
  
  useLayoutEffect(() => {
    const updateScale = () => {
      if (svgRef.current) {
        const currentWidth = svgRef.current.getBoundingClientRect().width;
        setScaleFactor(currentWidth / width);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

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

      const y = height*3.79 - radius * Math.sin(angle);

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
            style={{'--offset': `-${offsetTime}s`, fontSize: `${24 / scaleFactor}px`}}
          >
            {letter}
          </text>
        </g>
      );
    });
  };

  return (
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        style={{width: "100%", height: "auto", minHeight: "300px"}}
      >
        {renderArc(
          topRow,
          width*0.75,
          Math.PI * 0.7,
          Math.PI * 0.3,
          1
        )}
        
        {renderArc(
          bottomRow,
          width*(0.75-(0.05*(1/scaleFactor))),
          Math.PI * 0.69,
          Math.PI * 0.31,
          10
        )}
      </svg>
  );
}