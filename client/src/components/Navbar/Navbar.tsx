import React from 'react'
import { Container, NavbarOptions } from './Style'

const Navbar: React.FC = () => {
	return (
		<Container>
			Logo
			<NavbarOptions>
				<li>
					<div>
						<form action=''>
							<input type='text' name='' id='' />
						</form>
					</div>
				</li>
				<li>
					<a className='no-underline text-gray-900' href='#'>
						login
					</a>
				</li>
				<li>
					<a className='no-underline text-gray-900' href='#'>
						logout
					</a>
				</li>
			</NavbarOptions>
		</Container>
	)
}

export default Navbar
