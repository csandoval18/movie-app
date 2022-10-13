import { Route, Routes } from 'react-router-dom'
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import HomePage from './components/HomePage/HomePage'
import MovieCard from './components/HomePage/MovieList/MovieCard/MovieCard'
import MovieDetails from './components/MovieDetails/MovieDetails'
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/NotFound/NotFound'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/movie-details/:imdbID' element={<MovieDetails />} />
				<Route path='*' element={<NotFound />} />
				{/* <Route path="/search/:searchVal" element={<MovieList/>} */}
			</Routes>
		</div>
	)
}

export default App
