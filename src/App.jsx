import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'

const s = () => {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
        <Home />
    </div>
  )
}

export default s