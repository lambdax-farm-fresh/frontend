import React from "react";

import GoogleSigninFunc from '../../firebase/Google';

console.log(process.env)

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
        <button onClick={GoogleSigninFunc}>Google</button>
        <span>Register</span>
        <span>Log Out</span>
      </div>
    </nav>
  );
};

export default Navbar;
