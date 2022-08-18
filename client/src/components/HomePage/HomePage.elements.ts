import styled from 'styled-components'
// import heroImage from '../../assets/images/HomePage/img1.jpg'
import moviesimg from '../../assets/images/HomePage/movies.webp'

// bg-gradient-to-b from-gray-700 via-gray-900 to-black'
export const HomePageContainer = styled.div`
	/* height: 100vh; */
`

export const FirstHeadDiv = styled.div`
	height: 520px;
	width: 100%;
	background-image: url(${moviesimg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`
export const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: rgba(128, 163, 228, 0.5); */
	/* background-color: rgba(148, 170, 255, 0.3); */
	background-color: rgba(10, 18, 20, 0.3);
`

export const FirstHeading = styled.h1`
	font-family: BasementGrotesque;
	font-weight: 600;
	text-align: center;
	line-height: 4.5rem;
	letter-spacing: 3px;
	font-size: 30px;
	transform: scaleY(1.7);
	padding: 0 8rem;
	/* background-color: rgba(4, 12, 30, 0.7); */
	padding: 4.5rem 8rem;
	color: white;
`

export const SecondHeadDiv = styled.div`
	/* font-family: Verdana, Geneva, Tahoma, sans-serif; */
	height: 16rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	letter-spacing: 2px;
	font-size: 22px;
`

export const SecondHeading = styled.div`
	& > * {
		font-family: BasementGrotesque;
	}
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
