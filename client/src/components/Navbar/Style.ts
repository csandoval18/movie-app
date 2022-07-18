import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
	/* font-family: 'Titillium Web', sans-serif; */
	${tw`
    bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400
    h-20
    flex
    justify-between
    font-inter
    align-items[center]
    px-10
    tracking-wide
    text-[16px]
  `}
`
export const NavbarOptions = styled.ul`
	${tw`
    flex
    align-items[center]
    gap-12
  `}
`

export const SearchBar = styled.input``
