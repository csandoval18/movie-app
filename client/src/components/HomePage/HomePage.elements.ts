import styled from 'styled-components'
import tw from 'twin.macro'

export const HomePageContainer = styled.div`
	${tw`
    h-screen
    // bg-gradient-to-b from-gray-700 via-gray-900 to-black
    // bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400
    bg-gradient-to-b from-indigo-400 to-dark 
  `}
`

export const FirstHeadDiv = styled.div`
	height: 300px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 30%;
	background-color: white;
	z-index: 0;

	${tw`
    // bg-indigo-400
  `}
`

export const FirstHeading = styled.h1`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-weight: 600;
	text-align: center;
	letter-spacing: 2px;
	color: black;
	font-size: 38px;
	padding: 0 16rem;
	z-index: 2;
`

export const SecondHeadDiv = styled.div`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	height: 16rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	letter-spacing: 2px;
	font-size: 22px;
	${tw`
    text-white
  `}
`

export const SecondHeading = styled.div`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
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
	box-shadow: 3px 10px 25px -8px black;
`
