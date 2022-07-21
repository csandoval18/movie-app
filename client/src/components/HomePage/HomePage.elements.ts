import styled from 'styled-components'
import tw from 'twin.macro'
import heroImage from '../../assets/images/HomePage/img1.jpg'

export const HomePageContainer = styled.div`
	height: 100vh;
	${tw`
    bg-gradient-to-b from-gray-700 via-gray-900 to-black
  `}
`

export const FirstHeadDiv = styled.div`
	height: 400px;
	width: 100%;
	background-image: url(${heroImage});
`
export const Wrapper = styled.div`
	height: 100%;

	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(128, 163, 228, 0.5);
`

export const FirstHeading = styled.h1`
	font-family: BasementGrotesque;
	font-weight: 600;
	text-align: center;
	line-height: 4rem;
	letter-spacing: 1px;
	color: black;
	font-size: 6ex;
	padding: 0 8rem;
`

export const SecondHeadDiv = styled.div`
	/* font-family: Verdana, Geneva, Tahoma, sans-serif; */
	font-family: BasementGrotesque;
	height: 16rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	letter-spacing: 2px;
	font-size: 22px;
`

export const SecondHeading = styled.div`
	width: 100%;
	height: 12rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	letter-spacing: 2px;
	color: white;
	font-size: 22px;
	border-radius: 12px;
	width: 80%;
	/* box-shadow: 3px 10px 25px -8px black; */
`
