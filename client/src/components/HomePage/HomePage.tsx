import { Card } from '../../styles/GlobalStyles.styled'
import { HomePageContainer } from './HomePage.styled'

const HomePage = () => {
	return (
		<>
			<HomePageContainer className='homepage-container bg-base-100'>
				<Card>
					<p className='card-heading'>
						Search for your movies of interest and add them to
						your favorites! 😄
					</p>
				</Card>
			</HomePageContainer>
		</>
	)
}

export default HomePage
