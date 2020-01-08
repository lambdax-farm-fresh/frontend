import React, { useContext } from "react";

import UserContext from "../../../context/user/UserContext";
import FarmList from "./Farm/FarmList";

export default function FarmDash() {
  const Users = useContext(UserContext);

  return (
    <>
      {Users.state.user !== null ? (
        <div>
          {Users.state.user.rankrole === "farmer" || Users.state.user.rankrole === "admin" ? (
            <FarmList />
          ) : (
            "Not a farm account. Head to your profile to update account."
          )}
        </div>
      ) : (
        <div>Not logged in</div>
      )}
    </>
  );
}
