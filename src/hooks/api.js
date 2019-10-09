import axios from "axios";
import { useState, useEffect } from "react";

export function useSanity() {
  const [sanity, setSanity] = useState([]);

  // we can define side effects in our custom hooks as well,
  // and subscribe to changes in variables coming from anywhere (like parameters...)
  useEffect(() => {
    setSanity("");

    // make a new api call any time
    axios
      .get(`https://farm-fresh-produce.herokuapp.com/`)
      .then(result => {
        setSanity(result.data);
      })
      .catch(error => {
        console.log("error:", error);
      });
  }, []);

  return [sanity, setSanity];
}
