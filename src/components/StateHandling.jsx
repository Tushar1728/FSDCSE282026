import React from "react";
import cat from "../assets/cat.jpg";

function StateHandling() {
  const [red, setRed] = React.useState(255);
  const [green, setGreen] = React.useState(0);
  const [blue, setBlue] = React.useState(0);

  function changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setRed(r);
    setGreen(g);
    setBlue(b);

    alert("hello");
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Cat Color Changer 🐱</h2>

      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          border: "1px solid black",
          width: "300px",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <img
          src={cat}
          alt="Cat"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "contain",
          }}
        />

        <button
          onClick={changeColor}
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px 20px",
            border: "1px solid black",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Change Color
        </button>
      </div>
    </div>
  );
}

export default StateHandling;