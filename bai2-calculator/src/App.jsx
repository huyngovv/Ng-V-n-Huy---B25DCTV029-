import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const buttons = [
    { label: "Clear", className: "clear" },
    { label: "DEL", className: "delete" },
    { label: "/", className: "operator" },
    { label: "*", className: "operator" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "-", className: "operator" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "+", className: "operator" },
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "." },
    { label: "0", className: "zero" },
    { label: "=", className: "equal" }
  ];

  function handleButton(label) {
    if (label === "Clear") {
      setDisplay("0");
      return;
    }

    if (label === "DEL") {
      if (display === "Lỗi" || display.length <= 1) {
        setDisplay("0");
      } else {
        setDisplay(display.slice(0, -1));
      }
      return;
    }

    if (label === "=") {
      calculate();
      return;
    }

    if (display === "0" || display === "Lỗi") {
      if (label === ".") {
        setDisplay("0.");
      } else {
        setDisplay(label);
      }
    } else {
      setDisplay(display + label);
    }
  }

  function calculate() {
    if (display === "" || display === "Lỗi") {
      return;
    }

    try {
      const result = new Function("return " + display)();

      if (Number.isFinite(result)) {
        setDisplay(String(result));
      } else {
        setDisplay("Lỗi");
      }
    } catch (error) {
      setDisplay("Lỗi");
    }
  }

  return (
    <div className="page">
      <div className="calculator">
        <h1>MÁY TÍNH CÁ NHÂN</h1>

        <Display value={display} />

        <div className="buttons-grid">
          {buttons.map((button, index) => (
            <Button
              key={index}
              label={button.label}
              className={button.className}
              onClick={handleButton}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
