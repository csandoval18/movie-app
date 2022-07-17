import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
	align-items: center;
	${tw`
    bg-blue-300
    h-20
    flex
    justify-between
    px-6
  `}
`
const NavbarOptions = styled.ul`
	display: flex;
	gap: 15px;
`

const Navbar: React.FC = () => {
	return (
		<Container>
			Logo
			<NavbarOptions>
				<li>
					<a className='no-underline text-slate-700' href='#'>
						login
					</a>
				</li>
				<li>
					<a href='#'>logout</a>
				</li>
			</NavbarOptions>
		</Container>
	)
}

export default Navbar
