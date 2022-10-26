import styled from 'styled-components'
import { NavbarContainer } from '../Navbar.elements'

export const SearchBarContainer = styled(NavbarContainer)`
	align-items: center;
	display: flex;
	justify-content: left;
	gap: 1rem;
	.options-container {
		width: 100%;
	}
`
export const SearchBarInput = styled.input`
	min-width: 300px;
`
export const ReturnBtn = styled.button`
	align-items: center;
	border-radius: 50%;
	color: white;
	display: flex;
	height: 3rem;
	justify-content: center;
	width: 3rem;
	&:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}
	.icon {
		font-size: 1.7rem;
	}
`
