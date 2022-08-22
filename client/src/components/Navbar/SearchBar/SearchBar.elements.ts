import styled from 'styled-components'
import { NavbarContainer } from '../Navbar.elements'

export const SearchBarInput = styled.input`
	height: 2.4rem;
`

export const ReturnBtn = styled.button`
	width: 2.5rem;
	/* background-color: hsl(var(--n)); */
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;

	&:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}

	.icon {
		font-size: 1.7rem;
	}
`
