import { signInWithPopup, signOut } from "firebase/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from "../../../../firebase.init";
import React, { useState } from "react";
import classes from "./SignUp.module.css";

const SignUp = () => {
   const [user, setUser] = useState({});

   const provider = new GoogleAuthProvider();
   const auth = getAuth(app);

   //Getting user from google database
   const handleGoogleSignUp = () => {
      signInWithPopup(auth, provider)
         .then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user);
         })
         .catch((error) => {
            console.error("Error", error);
         });
   };

   //Removing logged user
   const handleGoogleSignOut = () => {
      signOut(auth)
         .then(() => {
            setUser({});
         })
         .catch((error) => {
            setUser({});
         });
   };

   return (
      <div className={classes.SignUp}>
         <h1>Sign up options</h1> <br></br>

         {user.email ? (
            <button onClick={handleGoogleSignOut}>Sign Out</button>
         ) : (
            <button onClick={handleGoogleSignUp}>Sign Up with Google</button>
         )}

         <div className={classes.userInfo}>
            <h3>Name: {user.displayName}</h3>
            <p>Email: {user.email}</p>
            <img src={user.photoURL} alt="PhotoUrl" />
         </div>
      </div>
   );
};

export default SignUp;
