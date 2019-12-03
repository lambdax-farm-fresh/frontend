import React, { useContext } from "react";

import AddFarm from "../../Test/AddFarm";
import UserContext from "../../../context/user/UserContext";

export default function FarmDash() {
  const Users = useContext(UserContext);

  return (
    <>
      {Users.state.user !== null ? (
        <div>
          <AddFarm />
          LIST OF USER OWNED FARMS
        </div>
      ) : (
        <div>Not logged in</div>
      )}
    </>
  );
}
