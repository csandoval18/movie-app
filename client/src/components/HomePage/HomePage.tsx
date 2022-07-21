import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import {
	FirstHeadDiv,
	FirstHeading,
	HomePageContainer,
	SecondHeadDiv,
	SecondHeading,
	Wrapper,
} from './HomePage.elements'

const HomePage = () => {
	return (
		<HomePageContainer className='homepage-container bg-gradient-to-b from-gray-700 via-gray-900 to-black'>
			<Navbar />
			<FirstHeadDiv>
				<Wrapper>
					<FirstHeading className='text-primary-content'>
						THE BEST COLLECTION OF MOVIES, TV SHOWS, AND MUCH MORE.
					</FirstHeading>
				</Wrapper>
			</FirstHeadDiv>
			<SecondHeadDiv>
				<SecondHeading>
					<p>Watch your favorite content anywhere. Cancel anytime.</p>
				</SecondHeading>
			</SecondHeadDiv>
			<p>Ready to enjoy the shows? Get Started</p>
			<Footer />
		</HomePageContainer>
	)
}

export default HomePage
