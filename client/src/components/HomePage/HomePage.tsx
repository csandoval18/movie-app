import { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { setToggleSearchBar } from '../../features/navbar/navbarToggleSlice'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../Navbar/SearchBar/SearchBar'
import { HomePageContainer } from './HomePage.elements'
import MoviesList from './MovieList/MoviesList'

const HomePage = () => {
	const [toggleSearch, setToggleSearch] = useState<Boolean>(false)
	const toggleSearchBar = useAppSelector(setToggleSearchBar)
	return (
		<>
			{toggleSearch ? <SearchBar /> : <Navbar></Navbar>}
			<HomePageContainer className='homepage-container bg-base-100'>
				<MoviesList />
			</HomePageContainer>
		</>
	)
}

export default HomePage
