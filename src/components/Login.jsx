import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidationData } from '../utils/Validate'
import {createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
const Login = () => {

   const navigate = useNavigate()
   const dispatch = useDispatch()
  const[isSignInform , setisSignInform] = useState(true)
  const [errormessage, seterrormessage] = useState(null)
  
  function toggleForm(){
    setisSignInform(!isSignInform)
  }

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmmitClick = (e) => {
    e.preventDefault()
    const message = checkValidationData(email.current.value,password.current.value)
    seterrormessage(message)
    if(message) return;
    if(!isSignInform){
      //SignUp Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
       .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user,{
            displayName: name.current.value , photoURL:"https://avatars.githubusercontent.com/u/72181927?v=4"
          }).then(()=>{
             const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            navigate("/browse")
         
          }).catch((error)=>{
            console.log(error);
            seterrormessage(error.message)
          })
        })
       .catch((error) => {
          var errorMessage = error.message;
          seterrormessage(errorMessage)
        });
    }else{
      //Sign In Logic
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
     navigate("/browse")
    console.log(user,"LOG IN");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorMessage + errorCode)
  });
    }
  }
  

  return (
   <div className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center bg-[url('/BannerNetflix.jpg')]">
  <Header />
  <form className="bg-black/70 p-6 rounded-lg text-white w-96">
    <h2 className="text-center text-2xl font-medium text-white mb-6 font-serif">{isSignInform ? "Sign In" : " Sign Up"}</h2>
   {!isSignInform && 
    <input
      type="text"
     ref={name}
      placeholder="Full Name"
      className="w-full p-3 mb-4 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none"
    />
    }
    <input
      type="text"
       ref={email}
      placeholder="Email or phone number"
      className="w-full p-3 mb-4 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none"
    />
    <input
      type="password"
       ref={password}
      placeholder="Password"
      className="w-full p-3 mb-4 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none"
    />
    <p className='text-red-500 mb-4 font-semibold p-2'>{errormessage}</p>
    <button
      type="submit" 
      onClick={handleSubmmitClick}
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