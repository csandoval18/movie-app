import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
	align-items: center;
	/* font-family: 'Titillium Web', sans-serif; */
	${tw`
    bg-blue-300
    h-20
    flex
    justify-between
    font-inter
    font-weight[400]
    align-middle
    px-10
    // font-bold
    tracking-wide
    text-[18px]
  `}
`
export const NavbarOptions = styled.ul`
	${tw`
    flex
    gap-8
  `}
`

export const SearchBar = styled.input``
