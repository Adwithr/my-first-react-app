import { useState } from "react";

const colors = ["pink", "blue", "red", "yellow", "purple"];

function ButtonColor() {
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);
  const [count, setCount] = useState(0);

  const handleButtonClick = (color) => () => {
    setBackgroundColor(color);
    setCount(count + 1);
  };

  return (
    <div>
      <h1 style={{ color: backgroundColor }}>{backgroundColor}</h1>
      <h2>{count}</h2>
      {colors.map((color) => {
        return (
          <button type="button" key={color} onClick={handleButtonClick(color)}>
            {color}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonColor;
