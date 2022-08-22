import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
	selectToggleSearchbar,
	setToggleSearchBar,
} from '../../features/navbar/navbarSlice'
import { HomeBtn } from '../../styles/GlobalStyles.elements'
import {
	DropDown,
	DropDownAnchor,
	NavbarContainer,
	NavOptionsFlex,
} from './Navbar.elements'
import OptionsBar from './OptionsBar/OptionsBar'
import SearchBar from './SearchBar/SearchBar'

const Navbar: React.FC = () => {
	const dispatch = useAppDispatch()
	const toggleSearchBar = useAppSelector(selectToggleSearchbar)
	console.log('searchBar:', toggleSearchBar)
	return <>{toggleSearchBar ? <SearchBar /> : <OptionsBar />}</>
}

export default Navbar
