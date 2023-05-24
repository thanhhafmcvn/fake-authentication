import React from "react";
import { auth } from "../../../firebase/firebase.config";
import { signInAnonymously } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const SignInAnonymously = () => {
  const navigate = useNavigate();
  const handleSignInAnonymously = async (e) => {
    e.preventDefault();
    try {
      const result = await signInAnonymously(auth);
      if (result?.user) {
        alert("Login successfully");
        navigate("/fake-authentication");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <button onClick={(e) => handleSignInAnonymously(e)}>
        Sign in anonymously
      </button>
    </div>
  );
};
export default SignInAnonymously;
