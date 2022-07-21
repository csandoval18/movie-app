import Footer from '../Footer/Footer'
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
		<HomePageContainer className='homepage-container'>
			<Navbar />
			{/* <FirstHeadDiv>
				<FirstHeading>
					THE BEST COLLECTION OF MOVIES, TV SHOWS, AND MUCH MORE.
				</FirstHeading>
			</FirstHeadDiv>
			<SecondHeadDiv>
				<SecondHeading>
					<p>Watch your favorite content anywhere. Cancel anytime.</p>
				</SecondHeading>
			</SecondHeadDiv>
			<p>Ready to enjoy the shows? Get Started</p> */}
			<Footer />
		</HomePageContainer>
	)
}

export default HomePage
