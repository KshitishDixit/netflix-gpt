import React, { useEffect, useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidateData } from '../../utils/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [error, setError] = useState()
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };


    const handleLoginClick = () => {
        const emailValue = email.current.value
        const passwordValue = password.current.value
        const nameValue = name.current?.value ?? null


        const message = checkValidateData(isSignInForm, emailValue, passwordValue, nameValue)
        setError(message)
        if (!message) {
            
            if (!isSignInForm) {


                createUserWithEmailAndPassword(auth, emailValue, passwordValue)
                    .then((userCredential) => {
                        
                        const user = userCredential.user;
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                    });
            } else {
                signInWithEmailAndPassword(auth, emailValue, passwordValue)
                    .then((userCredential) => {
                        // Signed in 
                        
                        const user = userCredential.user;
                        // ...
                    })
                    .catch((error) => {
                        
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setError("User Not Found")
                    });
            }

        }
    }
    useEffect(() => { }, [isSignInForm]);
    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/NL-nl-20250217-TRIFECTA-perspective_869100e3-0d40-4056-80ed-acabb19e103e_large.jpg"
                    alt="netflix_bg"
                />
            </div>
            <div className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
                <h1 className="font-bold text-3xl py-4">
                    Sign {isSignInForm ? "In" : "Up"}
                </h1>
                {!isSignInForm && <input
                    type="text"
                    placeholder="Full Name"
                    className="p-4 my-2 bg-gray-400 text-black w-full rounded-lg"
                    ref={name}
                />}
                <input
                    type="email"
                    ref={email}
                    placeholder="Email Address"
                    className="p-4 my-2 bg-gray-400 text-black w-full rounded-lg"
                />


                <input
                    type="password"
                    placeholder="Password"
                    ref={password}
                    className="p-4 my-2 bg-gray-400 text-black w-full rounded-lg"
                />
                <p className="text-red-700">{error}</p>
                <button
                    type="button"
                    className="p-4 my-2 bg-red-700 w-full rounded-lg cursor-pointer"
                    onClick={handleLoginClick}

                >
                    Sign {isSignInForm ? "In" : "Up"}
                </button>
                <button className="cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "Already have an account" : "New to Netflix"}? Sign{" "}
                    {isSignInForm ? "In" : "Up"} now
                </button>
            </div>
        </div>
    );
};

export default Login;
