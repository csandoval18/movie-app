import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectToggleSearchbar } from '../../features/navbar/navbarSlice'
import Menubar from './Menubar/Menubar'
import SearchBar from './SearchBar/SearchBar'

const Navbar: React.FC = () => {
	return <Menubar></Menubar>
}

export default Navbar
