import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Container, NavbarOptions } from './Style'

const Navbar: React.FC = () => {
	return (
		<Container>
			<div>logo</div>
			<NavbarOptions>
				<li>
					<SearchBar />
				</li>
				<li>login</li>
				<li>logout</li>
			</NavbarOptions>
		</Container>
	)
}

export default Navbar
