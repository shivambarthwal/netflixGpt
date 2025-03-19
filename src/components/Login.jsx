import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInform , setisSignInform] = useState(true)
  function toggleForm(){
    setisSignInform(!isSignInform)
  }
  return (
   <div className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center bg-[url('/BannerNetflix.jpg')]">
  <Header />

  <form className="bg-black/70 p-6 rounded-lg text-white w-96">
    <h2 className="text-center text-2xl font-medium text-white mb-6 font-serif">{isSignInform ? "Sign In" : " Sign Up"}</h2>
   {!isSignInform && 
    <input
      type="text"
      placeholder="Full Name"
      className="w-full p-3 mb-4 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none"
    />
    }
    <input
      type="text"
      placeholder="Email or phone number"
      className="w-full p-3 mb-4 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none"
    />
    <input
      type="password"
      placeholder="Password"
      className="w-full p-3 mb-4 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none"
    />
    <button
      type="submit" 
      className="w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white py-3 rounded"
    >
      {isSignInform ? "Sign In" : " Sign Up"}
    </button>
    <p className="mt-4 text-center text-gray-300 cursor-pointer hover:underline">
      Forgot Password?
    </p>
    {isSignInform ? (
    <p className="mt-4 text-center">
      Don't have an account?{' '}
      <span onClick={toggleForm} className=' text-red-500 hover:underline cursor-pointer'> Sign up now</span>
    </p>
  ): <p className="mt-4 text-center">
      Already have an account?{' '}
      <span onClick={toggleForm} className=' text-red-500 hover:underline cursor-pointer'> Sign In now</span>
    </p>
    }
  </form>

</div>
  )
}

export default Login