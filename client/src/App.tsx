import { Routes, Route, Link } from 'react-router-dom'
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import HomePage from './components/HomePage/HomePage'
import MovieDetails from './components/MovieDetails/MovieDetails'
import Navbar from './components/Navbar/Navbar'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/movie-details' element={<MovieDetails />} />
			</Routes>
		</div>
	)
}

export default App
