import styled from 'styled-components'
import tw from 'twin.macro'

export const NavbarContainer = styled.nav`
	height: 5rem;
	display: flex;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
	font-size: 16;
	font-weight: 500;
	letter-spacing: 2px;
	position: sticky;
	top: 0;
	z-index: 1;

	${tw`
    // bg-gradient-to-l from-gray-700 via-gray-900 to-black
  `};
`

export const DropDown = styled.ul`
	${tw`
  `}
`
export const DropDownAnchor = styled.a`
	${tw`
    hover:bg-primary
  `}
`
