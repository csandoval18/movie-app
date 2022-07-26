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
		<HomePageContainer className='homepage-container bg-base-100'>
			<Navbar />
			<Footer />
		</HomePageContainer>
	)
}

export default HomePage

// <FirstHeadDiv>
// 	<Wrapper>
// 		<FirstHeading>
// 			The best collection of movies, TV shows and more.
// 		</FirstHeading>
// 	</Wrapper>
// </FirstHeadDiv>
// <SecondHeadDiv>
// 	<SecondHeading>
// 		<p>Watch your favorite content anywhere. Cancel anytime.</p>
// 	</SecondHeading>
// </SecondHeadDiv>
// <div>
// 	<p>Ready to enjoy our shows?</p>
// 	<button className='btn '>Get Started</button>
// </div>
