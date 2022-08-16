import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import MoviesList from '../TrendingMovies/MoviesList'
import { HomePageContainer } from './HomePage.elements'

const HomePage = () => {
	return (
		<HomePageContainer className='homepage-container bg-base-100'>
			<Navbar />
			<MoviesList />
			{/* <Footer /> */}
		</HomePageContainer>
	)
}

export default HomePage
