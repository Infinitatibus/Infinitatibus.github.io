import React, { useEffect, useRef, useState } from 'react';
import './ShakeText.css';
import { createNoise2D } from 'simplex-noise';

function ShakeChar({ char, speed_factor, mag, seed }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const noise2D = createNoise2D();
 

  useEffect(() => {
    let frame;

    const animate = (time) => {
      let x = Math.sin(noise2D(time * speed_factor, seed)) * mag;
      let y = Math.cos(noise2D(time * speed_factor, seed*-2)) * mag;

      x = x + noise2D(time * speed_factor*20, seed) * mag/15
      y = y + noise2D(time * speed_factor*20, seed*-2) * mag/15

      setOffset({ x, y });

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <h1
      className="shake-char"
      style={{transform: `translate(${offset.x}px, ${offset.y}px) rotate(${0}deg)`,}}
    >
      {char === ' ' ? '\u00A0' : char}
    </h1>
  );
}

export default function ShakeText({ children, mag, speed_factor, seed }) {
  return (
    <div className="shake-container">
      {children.split('').map((char, index) => (
        <ShakeChar
          key={index}
          char={char}
          mag={mag}
          speed_factor={speed_factor}
          seed={Math.random()}
        />
      ))}
    </div>
  );
}