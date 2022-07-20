import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { NavbarContainer, NavbarOptions } from './Navbar.elements'

const Navbar: React.FC = () => {
	return (
		<NavbarContainer>
			<div>logo</div>
			<NavbarOptions>
				<li>
					<SearchBar />
				</li>
				<li>login</li>
				<li>logout</li>
			</NavbarOptions>
		</NavbarContainer>
	)
}

export default Navbar
