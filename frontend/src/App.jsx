import React from 'react'
import Home from './home/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import Contact from './components/Contact'

const App = () => {
  //getting user from authProvides.jsx
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* if authuser, then show courses else navigate to signup page */}
        <Route path='/course' element={authUser ? <Courses />: <Navigate to='/signup' />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App