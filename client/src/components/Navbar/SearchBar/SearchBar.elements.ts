import styled from 'styled-components'
import { NavbarContainer } from '../Navbar.elements'

export const SearchBarContainer = styled(NavbarContainer)`
	.home-btn {
		color: white;
	}
`

export const SearchBarInput = styled.input`
	height: 2.4rem;
`

export const ReturnBtn = styled.button`
	width: 2.5rem;
	background-color: hsl(var(--n));
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
`
