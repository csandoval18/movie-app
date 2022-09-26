import { useState } from 'react'
import { couldStartTrivia } from 'typescript'
import { useAppSelector } from '../../app/hooks'
import { selectToggleSearchbar } from '../../features/navbar/navbarSlice'
import { Card } from '../../styles/GlobalStyles.elements'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../Navbar/SearchBar/SearchBar'
import { HomePageContainer } from './HomePage.elements'
import MoviesList from './MovieList/MoviesList'

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
				<MoviesList />
			</HomePageContainer>
		</>
	)
}

export default HomePage
