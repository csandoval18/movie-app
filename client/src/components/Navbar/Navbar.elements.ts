import styled from 'styled-components'
import { device } from '../../styles/deviceSizes'
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
	.nav-options,
	.nav-options-desktop {
		gap: 1.3rem;
		width: 50%;
	}
	.nav-options-desktop {
		display: none;
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
	@media screen and (${device.laptop}) {
		.nav-options-desktop {
			display: flex;
		}
	}
`
export const DropDown = styled.ul``
export const DropDownAnchor = styled.a``
