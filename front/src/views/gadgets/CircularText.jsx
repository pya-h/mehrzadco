import React from "react";
import "./circular-text.css";

const CircularText = () => {
  const text = "Live Better";
  
  return (
    <div className="circular-text-container">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="circular-text-char"
          style={{
            transform: `rotate(${index * (360 / text.length)}deg)`,
            transformOrigin: "0 100px",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default CircularText;
