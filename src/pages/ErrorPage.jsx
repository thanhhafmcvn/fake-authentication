import React from 'react'
import {useNavigate} from 'react-router-dom'
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screeen h-screen flex flex-1 justify-center items-center bg-black">
      <div className="flex flex-1 justify-center items-center flex-col">
        <h1 className="text-[70px] font-mono font-bold text-white">
          404 Not Found
        </h1>
        <button className="btn btn-outline btn-accent text-[35px] p-[20px] flex flex-1 justify-center items-center font-mono" onClick={()=>navigate('/fake-authentication')}>Return to Home</button>
      </div>
    </div>
  );
}

export default ErrorPage