import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import tw from 'twin.macro'

const HomePageContainer = styled.div`
	${tw`
    h-screen
    bg-gray-900
  `}
`

const HomePage = () => {
	return (
		<HomePageContainer>
			<Navbar />
		</HomePageContainer>
	)
}

export default HomePage
