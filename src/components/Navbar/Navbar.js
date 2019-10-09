import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Nav */}
      <div className="left-nav">
        <h1>Farm Fresh Produce</h1>
      </div>
      {/* Right Nav */}
      <div className="right-nav">
        <span>Sign In</span>
        <span>Register</span>
        <span>Log Out</span>
      </div>
    </nav>
  );
};

export default Navbar;
