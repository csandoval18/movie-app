import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from '../../styles/GlobalStyles.elements'
import { HomePageContainer } from './HomePage.elements'

const HomePage = () => {
	return (
		<>
			<HomePageContainer className='homepage-container bg-base-100'>
				<Card>
					<p className='card-heading'>
						Search for your movies of interest and add them to your favorites!
						😄
					</p>
				</Card>
			</HomePageContainer>
		</>
	)
}

export default HomePage
