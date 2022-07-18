import Navbar from '../Navbar/Navbar'
import { HomePageContainer } from './Style'

const HomePage = () => {
	return (
		<HomePageContainer>
			<Navbar />
			<div>
				The Best Collection of movies, TV shows, and much more.
			</div>
			<p>Watch your favorite content anywhere. Cancel anytime.</p>
			<p>Ready to enjoy the shows? Get Started</p>
		</HomePageContainer>
	)
}

export default HomePage
