import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector(store => store.user )

  const handleSignout = () => {
    signOut(auth).then(()=>{
    }).catch((err)=>{
      navigate("/error");
    })
    
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    })
    //this will be called when component will Unmounts
    return () => unsubscribe(); 
  },[])
  return (
    <div className="flex  items-center justify-between absolute top-0 left-0 w-full px-10 pt-2 bg-gradient-to-r from-black  ">
      {/* Logo */}
      <img src="/Netflix_Logo_PMS.png" alt="LOGO" className="w-36" />

      {/* Profile & Sign Out */}

      {user && 
      <div className="flex items-center gap-4">
        <img
          alt="Profile"
          src={user?.photoURL}
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
        />
        <button onClick={handleSignout} className="text-white text-sm font-medium h-10 w-24 bg-red-600 hover:bg-red-700 rounded-full shadow-lg transition-all cursor-pointer">
          Sign Out
        </button>
      </div>
}
    </div>
  );
};

export default Header;
