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
	.search-btn,
	.mobile-search-btn {
		font-size: 1.5em !important;
		position: relative;
	}
	.search-btn {
		height: 45px;
		width: 45px;
	}
	.mobile-search-btn {
		height: 40px;
		width: 40px;
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
