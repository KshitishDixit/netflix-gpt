import React, { useEffect } from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
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
               { !isSignInForm && <input
                    type="text"
                    placeholder="Full Name"
                    className="p-4 my-2 bg-gray-400 text-black w-full rounded-lg"
                />}
                <input
                    type="email"
                    placeholder="Email Address"
                    className="p-4 my-2 bg-gray-400 text-black w-full rounded-lg"
                />

              
                <input
                    type="password"
                    placeholder="Password"
                    className="p-4 my-2 bg-gray-400 text-black w-full rounded-lg"
                />
                <button
                    type="button"
                    className="p-4 my-2 bg-red-700 w-full rounded-lg cursor-pointer"
                    onClick={toggleSignInForm}
                >
                    Sign {isSignInForm ? "In" : "Up"}
                </button>
                <button className="cursor-pointer">
                    {isSignInForm ? "Already have an account" : "New to Netflix"}? Sign{" "}
                    {isSignInForm ? "In" : "Up"} now
                </button>
            </div>
        </div>
    );
};

export default Login;
