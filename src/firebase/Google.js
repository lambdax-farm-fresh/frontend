import firebase from "./firebase.js";
import "firebase/auth";

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const GoogleLoginFunc = () => {
    firebase.auth().signInWithPopup(provider).then((result) => {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(token, user);
    }).catch((err) => {
        var code = err.code;
        var message = err.message;
        var email = err.email;
        console.log(code, message, email);
    })
}

export default GoogleLoginFunc;
