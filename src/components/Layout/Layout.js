import React from "react";

import Navbar from "./Navbar/Navbar";

import { useSanity } from "../../hooks/api";

const Layout = props => {
  const [sanity] = useSanity("");

  return (
    <>
      <Navbar />
      {sanity}
    </>
  );
};

export default Layout;
