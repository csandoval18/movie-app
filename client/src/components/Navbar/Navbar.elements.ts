import styled from 'styled-components'
import { Flex } from '../../styles/GlobalStyles.elements'

export const NavbarContainer = styled.nav`
	background-color: hsl(var(--p));
	width: 100%;
	height: 5rem;
	display: flex;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	font-size: 16;
	font-weight: 500;
	position: sticky;
	top: 0;
	z-index: 10000;

	.search-btn {
		width: 3rem;
		font-size: 2rem;
		height: 3rem;
	}
	.icon {
		position: fixed;
		font-size: 1.8rem;
	}

	.home-btn {
		color: white;
	}
`

export const NavOptionsFlex = styled(Flex)`
	width: 50%;
	gap: 1.3rem;
`
export const DropDown = styled.ul``
export const DropDownAnchor = styled.a``
