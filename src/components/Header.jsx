import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user )

  const handleSignout = () => {
    signOut(auth).then(()=>{
      navigate("/")
    }).catch((err)=>{
      navigate("/error");
    })
    
  };
  return (
    <div className="flex items-center justify-between absolute top-0 left-0 w-full px-10 py-4 bg-gradient-to-b from-black via-gray-900 to-transparent">
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
