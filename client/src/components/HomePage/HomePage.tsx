import { useState } from 'react'
import { couldStartTrivia } from 'typescript'
import { useAppSelector } from '../../app/hooks'
import { selectToggleSearchbar } from '../../features/navbar/navbarSlice'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../Navbar/SearchBar/SearchBar'
import { HomePageContainer } from './HomePage.elements'
import MoviesList from './MovieList/MoviesList'

const HomePage = () => {
	const toggleSearchBar = useAppSelector(selectToggleSearchbar)
	console.log('searchBar:', toggleSearchBar)
	return (
		<>
			{toggleSearchBar ? <SearchBar /> : <Navbar></Navbar>}
			<HomePageContainer className='homepage-container bg-base-100'>
				<MoviesList />
			</HomePageContainer>
		</>
	)
}

export default HomePage
