import React from "react";

const Location = props => {
  return (
    <>
      <div>ID: {props.data.id}</div>
      <div>
        {props.data.streetNumber} {props.data.streetName}
      </div>
      <div>
        {props.data.city}, {props.data.state} {props.data.zip}
      </div>
      <br />
    </>
  );
};

export default Location;
