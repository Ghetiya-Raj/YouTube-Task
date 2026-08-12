import React from 'react'
import { Route,Routes } from 'react-router'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Video from '../pages/Video'
import Profile from '../pages/Profile'

const routes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/:id' element={<Video/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default routes