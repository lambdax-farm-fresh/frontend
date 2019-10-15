import React from "react";
import { Link } from "react-router-dom";

import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Nav */}
      <div className="left-nav">
        <Link to="/" className="logo">
          Farm Fresh Produce
        </Link>
      </div>
      {/* Right Nav */}
      <div className="right-nav">
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
