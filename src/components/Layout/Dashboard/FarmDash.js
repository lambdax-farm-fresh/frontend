import React, { useContext } from "react";

import UserContext from "../../../context/user/UserContext";
import FarmList from "./Farm/FarmList";

export default function FarmDash() {
  const Users = useContext(UserContext);

  return (
    <>
      {Users.state.user !== null ? (
        <div>
          <FarmList />
        </div>
      ) : (
        <div>Not logged in</div>
      )}
    </>
  );
}
