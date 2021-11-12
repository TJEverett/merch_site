import React from "react";

function Header() {
  const headerStyles = {
    display: "flex",
    justifyContent: "center"
  }
  return (
    <h1 style={headerStyles}>Sanderson's Signed Books</h1>
  );
}

export default Header;