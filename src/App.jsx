
import { createBrowserRouter, useNavigate } from "react-router-dom"
import Browse from "./components/Browse"
import Login from "./components/Login"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./utils/Firebase"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "./utils/userSlice"
function App() {
  const dispatch = useDispatch()
 

  const router = createBrowserRouter([
    { path: "/", element: <Login/> },
    { path: "/browse", element: <Browse/> },
  ])
  
  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      } else {
        dispatch(removeUser())
      }
    })
  },[])
  return (
    <div>
  <RouterProvider router={router}/>
    </div>
  )
}

export default App
