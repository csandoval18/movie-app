import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { HomePageContainer } from './HomePage.elements'
import MoviesList from './MovieList/MoviesList'

const HomePage = () => {
	return (
		<HomePageContainer className='homepage-container bg-base-100'>
			<MoviesList />
		</HomePageContainer>
	)
}

export default HomePage
