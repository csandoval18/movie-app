import styled from 'styled-components'
import { device } from '../../styles/deviceSizes'

export const NavbarContainer = styled.nav`
	align-items: center;
	background-color: rgba(0, 0, 0, 0.08);
	backdrop-filter: blur(24px);
	display: flex;
	font-size: 16;
	font-weight: 500;
	min-height: 4rem;
	justify-content: space-between;
	/* padding: 0 1rem; */
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
	.handle-searchbar-display,
	.menu-options {
		display: none;
	}
	.handle-mobile-menu-display {
	}
	@media (${device.tablet}) {
		& {
			/* padding: 0 4rem; */
		}
		.handle-searchbar-display,
		.menu-options {
			display: flex;
		}
		.handle-mobile-menu-display,
		.search-return-btn {
			display: none;
		}
	}
`
export const SearchBarContainer = styled.div`
	align-items: center;
	display: flex;
	justify-content: left;
	gap: 1rem;
	width: 100%;
	.searchbar-container {
		padding: 0;
	}
	.searchbar-layout {
		display: flex;
		flex: 1;
		justify-content: left;
		gap: 0.5rem;
	}
	.options-container {
		width: 100%;
	}
	.form-control {
		width: 100%;
	}
	@media (${device.tablet}) {
		.form-control {
			width: auto;
		}
		.searchbar-layout {
			justify-content: center;
		}
	}
`
export const SearchBarInput = styled.input`
	max-width: 500px;
	width: 100%;
	@media (${device.tablet}) {
		& {
			min-width: 400px;
		}
	}
	@media (${device.laptop}) {
		& {
			margin-left: 6%;
			min-width: 500px;
		}
	}
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
export const DropDown = styled.ul``
export const DropDownAnchor = styled.a``
