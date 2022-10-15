import { Route, Routes } from 'react-router-dom'
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import HomePage from './components/HomePage/HomePage'
import MovieCard from './components/HomePage/MovieList/MovieCard/MovieCard'
import MovieList from "./components/HomePage/MovieList/MoviesList"
import MovieDetails from './components/MovieDetails/MovieDetails'
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div className='App'>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <Navbar />
          {/* <!-- Page content here --> */}
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/movie-details/:imdbID' element={<MovieDetails />} />
            <Route path="/search=:searchInput" element={<MovieList />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>

          </ul>

        </div>
      </div>
    </div>
  )
}

export default App
