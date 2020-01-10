import React, { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";

import firebase from "../../firebase/firebase";
import "firebase/auth";

import Navbar from "./Navbar/Navbar";

import UserContext from "../../context/user/UserContext";
import UserDash from "./Dashboard/UserDash";

import FarmDash from "./Dashboard/FarmDash";
import HomeDash from "./Dashboard/HomeDash";

import FarmPage from "./Pages/FarmPage";

import styled from "styled-components";
import EmailReg from "../../firebase/EmailReg";
import EmailLog from "../../firebase/EmailLog";
import { AuthContext } from "../Auth";

const LayoutFull = styled.div``;

const LayoutHold = styled.div``;

const Layout = props => {
  const { currentUser } = useContext(AuthContext);
  const Users = useContext(UserContext);

  useEffect(() => {
    if(!!currentUser && !Users.state.user) {
      Users.getUser(currentUser.uid);
    }
  }, [])

  return (
      <LayoutFull>
        <Navbar />
        <LayoutHold>
          <Switch>
            <Route exact path="/" component={HomeDash} />
            <Route exact path="/emailreg" component={EmailReg} />
            <Route exact path="/emaillog" component={EmailLog} />
            <PrivateRoute exact path="/userdash" component={UserDash} />
            <PrivateRoute exact path="/farmerdash" component={FarmDash} />
            <Route exact path="/farm/:id" component={FarmPage} />
            <Route>
              <h2>404</h2>
            </Route>
          </Switch>
        </LayoutHold>
      </LayoutFull>
  );
};

export default Layout;
