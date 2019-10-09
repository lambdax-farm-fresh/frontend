import { useState } from "react";

// this is a generic form input handler
// import into your form component and add
// const [inputname, handleInputname, setInputname] = useInput(initialValue)
// for each form input

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChanges = e => {
    setValue(e.target.value);
  };

  return [value, handleChanges, setValue];
};
