import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='/login' element={<Login />} />
			</Routes>
		</div>
	)
}

export default App
