import React from "react";

function Header({ name, greeting }) {
  return (
    <header className="header">
      <h1>{name}</h1>
      <p className="greeting">{greeting}</p>
      <p className="subtitle">Sinh viên Công nghệ thông tin - PTIT</p>
    </header>
  );
}

export default Header;
