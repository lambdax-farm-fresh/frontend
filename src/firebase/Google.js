import React, { useContext } from 'react'
import firebase from "./firebase.js";
import "firebase/auth";

import UserContext from '../context/user/UserContext';

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export default function GoogleLoginFunc() {

    const Users = useContext(UserContext);

    const GoogleLoginFunc = () => {
        firebase.auth().signInWithPopup(provider).then(async (result) => {
            var user = result.user.providerData[0];

            var userObj = {
                firstName: 'Farm Fresh User',
                lastName: '',
                email: user.email,
                firebaseId: user.uid,
                picture: user.photoURL
            }

            console.log(userObj)

            const userCheck = await Users.getUser(userObj.firebaseId)

            if(userCheck) {
                console.log("user found")
            } else {
                Users.addUser(userObj)
            }

        }).catch((err) => {
            var code = err.code;
            var message = err.message;
            var email = err.email;
            console.log(code, message, email);
        })
    }
    
    return (
        <button onClick={GoogleLoginFunc}>
            Google Sign In            
        </button>
    )
}

