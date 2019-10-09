import React from "react";

const axios = require("axios");

const Layout = props => {
  axios
    .get("https://farm-fresh-produce.herokuapp.com/")
    .then(res => console.log(res.data))
    .catch(err => console.error(err));

  return (
    <>
      <h1>Layout</h1>
    </>
  );
};

export default Layout;
