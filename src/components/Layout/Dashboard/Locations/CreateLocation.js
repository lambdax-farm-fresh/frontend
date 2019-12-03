import React, { useContext } from "react";
import useForm from "react-hook-form";

import LocationContext from "../../../../context/location/LocationContext";

const CreateLocation = props => {
  const locationState = useContext(LocationContext);

  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = data => {
    const locationObj = {
      ...data,
      farmId: 1,
      lat: "",
      lon: "",
      countryCode: ""
    };

    console.log(data);

    locationState.addLocation(locationObj);
    reset();
  };

  return (
    <>
      <hr />

      <h1>Create Location</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="streetNumber">Street Number</label>
        <input name="streetNumber" ref={register({ required: true })} />
        {errors.streetNumber && errors.streetNumber.type === "required" && (
          <p>This is required</p>
        )}
        <br />

        <label htmlFor="streetName">Street Name</label>
        <input name="streetName" ref={register({ required: true })} />
        {errors.streetName && errors.streetName.type === "required" && (
          <p>This is required</p>
        )}
        <br />

        <label htmlFor="city">City</label>
        <input name="city" ref={register({ required: true })} />
        {errors.city && errors.city.type === "required" && (
          <p>This is required</p>
        )}
        <br />

        <label htmlFor="state">State</label>
        <input name="state" ref={register({ required: true })} />
        {errors.state && errors.state.type === "required" && (
          <p>This is required</p>
        )}
        <br />

        <label htmlFor="zip">Zipcode</label>
        <input name="zip" ref={register({ required: true })} />
        {errors.zip && errors.zip.type === "required" && (
          <p>This is required</p>
        )}
        <br />
        <input type="submit" value="Submit" />
      </form>
      <hr />
    </>
  );
};

export default CreateLocation;
