import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Login from './components/Login/Login'
import MovieDetails from './components/MovieDetails/MovieDetails'
import Navbar from './components/Navbar/Navbar'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='/login' element={<Login />} />
				<Route path='/movie-details' element={<MovieDetails />} />
			</Routes>
		</div>
	)
}

export default App
