import React, { useContext, useState } from 'react';

import firebase from "./firebase"
import "firebase/auth";
import UserContext from '../context/user/UserContext';

export default function EmailLog() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Users = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(data => Users.getUser(data.user.uid))
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
                <button>Submit</button>
            </form>
        </div>
    )
}
