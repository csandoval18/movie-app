import Navbar from '../Navbar/Navbar'
import {
	FirstHeadDiv,
	FirstHeading,
	HomePageContainer,
	SecondHeadDiv,
	SecondHeading,
} from './HomePage.elements'

const HomePage = () => {
	return (
		<HomePageContainer>
			<Navbar />
			<FirstHeadDiv>
				<FirstHeading>
					The Best Collection of movies, TV shows, and much more.
				</FirstHeading>
			</FirstHeadDiv>
			<SecondHeadDiv>
				<SecondHeading>
					<p>Watch your favorite content anywhere. Cancel anytime.</p>
				</SecondHeading>
			</SecondHeadDiv>
			<p>Ready to enjoy the shows? Get Started</p>
		</HomePageContainer>
	)
}

export default HomePage
