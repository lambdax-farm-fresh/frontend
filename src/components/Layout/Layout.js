import React from "react";

import { useSanity } from "../../hooks/api";

const Layout = props => {
  const [sanity] = useSanity("");

  return (
    <>
      <h1>Layout</h1>
      {sanity}
    </>
  );
};

export default Layout;
