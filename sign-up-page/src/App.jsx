import { useState } from 'react'
import './App.css'
import SignUpPage from './components/Signup'
import EditPage from './components/EditPage'
import Home from './components/Home'

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<h1 style={{color:"black"}}>Sign In</h1>} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
