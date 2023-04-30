import React from 'react'
import {useNavigate} from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1 className="text-[40px]">
        This is the homepage of fake authentication project
      </h1>
      <div className='text-[30px] text-blue-700 font-bold'>
        <h2 onClick={() => navigate("/fake-authentication/signup")}>Sign up</h2>
        <h2 onClick={() => navigate("/fake-authentication/signin")}>Sign in</h2>
      </div>
    </div>
  );
}

export default Home