import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from './pages/SignUp'
import ErrorPage from './pages/ErrorPage'
function App() {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/fake-authentication" element={<Home />} />
        <Route path="/fake-authentication/signup" element={<SignUp />} />
        <Route path="/fake-authentication/signin" element={<SignIn />} />
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={routers}/>
    </div>
  )
}

export default App
