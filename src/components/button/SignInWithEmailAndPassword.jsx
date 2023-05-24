import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseStore } from "../../../zustand/store";
import { auth } from "../../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
const SignInWithEmailAndPassword = () => {
  const { email, password } = firebaseStore();
  const navigate = useNavigate()
  const handleSignInWithEmailAndPassword = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (result?.user) {
        alert("Signed in successfully");
        navigate("/fake-authentication");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <button
        onClick={(e) => handleSignInWithEmailAndPassword(e)}
        className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
      >
        Sign In
      </button>
    </div>
  );
};

export default SignInWithEmailAndPassword;
