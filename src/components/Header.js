import React from "react";

const Header = ({ text }) => {
  return (
    <>
      <header className="bg-dark text-white p-5">
        <h1>{text}</h1>
      </header>
    </>
  );
};

export default Header;
