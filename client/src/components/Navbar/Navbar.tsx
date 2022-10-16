import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectToggleSearchbar } from '../../features/navbar/navbarSlice'
import Menubar from "./Menubar/Menubar"
import SearchBar from './SearchBar/SearchBar'

const Navbar: React.FC = () => {
  const toggleSearchBar = useAppSelector(selectToggleSearchbar)
  console.log('searchBar:', toggleSearchBar)
  return (
    <>{toggleSearchBar ? <SearchBar /> : <Menubar />}</>
  )
}

export default Navbar
