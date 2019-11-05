import React from "react";

import Navbar from "./Navbar/Navbar";
import Locations from "../Locations/Locations";

import { useSanity } from "../../hooks/api";
import FarmAdd from "../Test/FarmAdd";

const Layout = props => {
  const [sanity] = useSanity("");

  return (
    <>
      <Navbar />
      <FarmAdd {...props} />
      {sanity}
      <Locations />
    </>
  );
};

export default Layout;
