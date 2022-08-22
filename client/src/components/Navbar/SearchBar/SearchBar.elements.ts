import styled from 'styled-components'
import { NavbarContainer } from '../Navbar.elements'

export const SearchBarContainer = styled(NavbarContainer)`
	justify-content: center;
	.options-container {
		width: 100%;
	}
`
export const SearchBarInput = styled.input`
	min-width: 300px;
`

export const ReturnBtn = styled.button`
	width: 3rem;
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
