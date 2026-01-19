import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SignIn from './components/SignIn'
import ForgotPassword from './components/ForgotPassword'
import Dashboard from './components/Dashboard';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignIn></SignIn>}></Route>
				<Route path="/forgotPassword" element={<ForgotPassword></ForgotPassword>}></Route>
				<Route path="/dashBoard" element={<Dashboard></Dashboard>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App