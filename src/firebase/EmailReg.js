import React, { useContext, useState } from 'react';

import firebase from "./firebase"
import "firebase/auth";
import UserContext from '../context/user/UserContext';

export default function EmailReg() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const Users = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user)
                const userObj = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    firebaseId: user.user.uid,
                    picture: ''
                }
                console.log(userObj)
                Users.addUser(userObj)
            })
            .catch(function(error) {
            
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode, errorMessage)
            
          });


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
                <label>First Name</label>
                <input type="text" value={firstName} name="firstName" onChange={(e) => setFirstName(e.target.value)} />
                <label>Last Name</label>
                <input type="text" value={lastName} name="lastName" onChange={(e) => setLastName(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}
