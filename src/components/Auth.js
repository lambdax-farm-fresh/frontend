import React, {useEffect, useState} from "react";
import firebase from "../firebase/firebase";
import "firebase/auth";

export const AuthContext = React.createContext();

export default function Auth({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if(user) {
                setCurrentUser(user)

            } else {
                setCurrentUser(null);
            }
        });
    }, [])

  return (
    <AuthContext.Provider
        value={{
            currentUser
        }}
    >
        {children}
    </AuthContext.Provider>
  );
}
