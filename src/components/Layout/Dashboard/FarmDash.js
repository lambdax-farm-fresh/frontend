import React from "react";
import FarmList from "./Farm/FarmList";

export default function FarmDash() {
  // return (
  //   <>
  //     {Users.state.user !== null ? (
  //       <div>
  //         {Users.state.user.rankrole === "farmer" || Users.state.user.rankrole === "admin" ? (
  //           <FarmList />
  //         ) : (
  //           <div>
  //             Not a farm account. Head to your profile to update account.
  //           </div>
  //         )}
  //       </div>
  //     ) : (
  //       <div>
  //         Not logged in
  //       </div>
  //     )}
  //   </>
  // );
  return <FarmList />;
}
