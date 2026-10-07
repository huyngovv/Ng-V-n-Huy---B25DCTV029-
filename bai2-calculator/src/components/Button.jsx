import React from "react";

function Button({ label, className = "", onClick }) {
  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

export default Button;
