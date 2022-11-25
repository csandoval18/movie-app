import styled from 'styled-components'
import { device } from '../../styles/deviceSizes'

export const NavbarContainer = styled.nav`
	align-items: center;
	background-color: rgba(0, 0, 0, 0.08);
	backdrop-filter: blur(24px);
	display: grid;
	grid-template-columns: 1fr 1fr;
	font-size: 16;
	font-weight: 500;
	min-height: 4rem;
	justify-content: space-between;
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 10000;
	.hamburger:hover {
		background-color: rgba(41, 67, 122, 0.2);
	}
	.nav-menu {
		gap: 1.3rem;
	}
	.search-btn,
	.mobile-search-btn {
		font-size: 1.5em;
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
		justify-content: right;
	}
	&.search-mode {
		grid-template-columns: 1fr;
	}
	@media (${device.laptop}) {
		&,
		&.search-mode {
			grid-template-columns: 1fr 1fr 1fr;
		}
		.handle-searchbar-display,
		.menu-options {
			display: flex;
			justify-content: right;
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
	gap: 1rem;
	justify-content: center;
	width: 100%;
	.searchbar-container {
		padding: 0;
	}
	.searchbar-layout {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
	}
	.options-container {
		width: 100%;
	}
	.form-control {
		width: 100%;
	}
	@media (${device.laptop}) {
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
	width: 3.3rem;
	&:hover {
		/* background-color: rgba(0, 0, 0, 0.2); */
		background-color: rgba(41, 67, 122, 0.2);
	}
	.icon {
		font-size: 1.7rem;
	}
`
export const DropDown = styled.ul``
export const DropDownAnchor = styled.a``
