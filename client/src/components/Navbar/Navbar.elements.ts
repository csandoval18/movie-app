import styled from 'styled-components'
import tw from 'twin.macro'

export const NavbarContainer = styled.div`
	height: 5rem;
	display: flex;
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
    // bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400
    bg-gradient-to-l from-gray-700 via-gray-900 to-black
    color[white]
    
    // tracking-wide
  `};
`
export const NavbarOptions = styled.ul`
	${tw`
    flex
    align-items[center]
    gap-12
  `}
`

export const SearchBar = styled.input``
