import React from 'react'
import { auth } from '../../../firebase/firebase.config'
import { signInWithRedirect, FacebookAuthProvider, getRedirectResult } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const SignInWithFacebook = () => {
    const navigate = useNavigate()
    const handleSignInWithFacebook = async (e) => {
        e.preventDefault()
        try {
            const provider = new FacebookAuthProvider()
            const result = await getRedirectResult(auth, provider)
            if (result?.user) {
                alert('Signed in successfully')
                navigate('/fake-authentication')
            }
        }
        catch (error) {
            alert(error.message)
        }
    }
  return (
      <div>
          <button onClick={(e) => handleSignInWithFacebook(e)}>Sign in with Facebook</button>
    </div>
  )
}

export default SignInWithFacebook