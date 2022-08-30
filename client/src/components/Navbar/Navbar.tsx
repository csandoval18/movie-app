import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectToggleSearchbar } from '../../features/navbar/navbarSlice'
import OptionsBar from './OptionsBar/OptionsBar'
import SearchBar from './SearchBar/SearchBar'

const Navbar: React.FC = () => {
	const dispatch = useAppDispatch()
	const toggleSearchBar = useAppSelector(selectToggleSearchbar)
	console.log('searchBar:', toggleSearchBar)
	return <>{toggleSearchBar ? <SearchBar /> : <OptionsBar />}</>
}

export default Navbar
