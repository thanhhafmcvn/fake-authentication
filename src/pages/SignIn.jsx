import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInAnonymously,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from '../../firebase/firebase.config.js'
import { firebaseStore } from '../../zustand/store.js'
import { SignInAnonymously, SignInWithEmailAndPassword,SignInWithFacebook, SignInWithGoogle } from "../module/SignInMethods.js";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const { email, password, setEmail, setPassword } = firebaseStore()
  const navigate = useNavigate()
  return (
    <div>
      <h1> This is the sign in page</h1>
      <div>
        <h2 className="mb-10 text-3xl font-bold text-center">Sign In </h2>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="email" className="text-sm font-medium cursor-pointer">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="password"
            className="text-sm font-medium cursor-pointer"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <h3>Don't have account?</h3>
        <h3 onClick={(e) => navigate("/fake-authentication/signup")}>
          Sign up
        </h3>
        <SignInWithEmailAndPassword />
        <SignInWithGoogle />
        <SignInAnonymously />
        <SignInWithFacebook />
      </div>
    </div>
  );
};
export default SignIn;
