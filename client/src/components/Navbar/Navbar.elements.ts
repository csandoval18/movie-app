import styled from 'styled-components'
import { Flex } from '../../styles/GlobalStyles.elements'

export const NavbarContainer = styled.nav`
	align-items: center;
	background-color: hsl(var(--p));
	display: flex;
	flex: 1;
	font-size: 16;
	font-weight: 500;
	height: 5rem;
	justify-content: space-between;
	padding: 0 1rem;
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 10000;
	.navbar-options {
		display: flex;
	}
	.search-btn {
		font-size: 2rem;
		height: 3rem;
		position: relative;
		width: 3rem;
	}
	.icon {
		font-size: 1.8rem;
		position: absolute;
	}

	.home-btn {
		color: white;
	}
`

export const NavOptionsFlex = styled(Flex)`
	display: none;
	gap: 1.3rem;
	width: 50%;
`
export const DropDown = styled.ul``
export const DropDownAnchor = styled.a``
