import axios from "axios";
import { useState, useEffect } from "react";

export function useSanity() {
  const [sanity, setSanity] = useState([]);

  // we can define side effects in our custom hooks as well,
  // and subscribe to changes in variables coming from anywhere (like parameters...)
  useEffect(() => {
    setSanity("");

    // make a new api call any time `breed` or `count` changes
    axios
      .get(`https://farm-fresh-produce.herokuapp.com/`)
      .then(result => {
        setSanity(result.data);
      })
      .catch(error => {
        console.log("error:", error);
      });
  }, []);

  // we don't use `setImages` in App.js, but it's nice to return it just in case
  return [sanity, setSanity];
}
