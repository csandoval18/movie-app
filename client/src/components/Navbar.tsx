import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
	${tw`
    bg-blue-300

  `}
`

const Navbar: React.FC = () => {
	return <Container>hello</Container>
}

export default Navbar
