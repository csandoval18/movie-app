import styled from 'styled-components'

export const NavbarContainer = styled.nav`
	background-color: hsl(var(--p));
	font-size: 16;
	font-weight: 500;
	min-height: 4rem;
	justify-content: space-between;
	padding: 0 1rem;
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 10000;
	.nav-menu {
		gap: 1.3rem;
	}
	.search-btn {
		font-size: 2rem;
		height: 45px;
		position: relative;
		width: 45px;
	}
	.icon {
		font-size: 1.8rem;
		position: absolute;
	}
	.home-btn {
		color: white;
	}
	.hamburger {
		color: white;
	}
`
export const DropDown = styled.ul``
export const DropDownAnchor = styled.a``
