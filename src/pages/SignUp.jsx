import React, { useState } from "react";
import { auth, actionCodeSettings } from "../../firebase/firebase.config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
const SignUp = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleCreateAccount = async (e) => {
    e.preventDefault();
    if (email?.trim()?.length > 10 && email?.trim()?.includes('@') && password?.trim() == confirmPassword?.trim() && password?.trim() > 8) {
      console.log('aa')
      const user = await createUserWithEmailAndPassword(auth, email, password)
      if (user?.user?.accessToken) {
        alert('Created account successfully');
        navigate('/fake-authentication/signin')
      }
    }
  }
  return (
    <div>
      <h1>This is the sign up page</h1>
      <div>
        <label>Email</label>
        <input
          id="email"
          type="email"
          className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
          placeholder="Enter your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          id="password"
          type="password"
          className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm your password</label>
        <input
          id="confirmPassword"
          type="password"
          className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <h4 onClick={(() => navigate('/fake-authentication/signin'))}>Already signed up? Sign in</h4>
      <button
        onClick={(e) => handleCreateAccount(e)}
        className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
      >Create</button>
    </div>
  );
};

export default SignUp;
