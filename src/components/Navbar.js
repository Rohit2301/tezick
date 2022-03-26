import React from "react";

const Navbar = () => {
  return (
    <div>
      <div
        className="outlineButton"
        style={{
          position: "absolute",
          right: "20px",
          top: "20px",
          width: "15rem",
          height: "4rem",
          
        }}
      >
        <span style={{ fontSize: "24px" }}>Connect Wallet</span>
      </div>
    </div>
  );
};

export default Navbar;
