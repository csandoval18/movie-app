import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from '../../styles/GlobalStyles.elements'
import { HomePageContainer } from './HomePage.elements'

interface TokenData {
	_id: string
	username: string
	iat: number
	exp: number
}

const HomePage = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<string>(
		sessionStorage.getItem('token') as string,
	)
	const [userData, setUserData] = useState<TokenData>()
	useEffect(() => {
		axios
			.post(
				'http://localhost:4000/api/user/auth',
				{},
				{
					headers: { Authorization: `${isLoggedIn}` },
				},
			)
			.then((res) => {
				console.log('res.data:', res.data)
				setUserData(res.data)
			})
			.catch((err) => {
				console.log(err.response.data)
			})
	}, [])
	return (
		<>
			<HomePageContainer className='homepage-container bg-base-100'>
				<Card>
					<p className='card-heading'>
						Search for your movies of interest and add them to your favorites!
						😄
					</p>
				</Card>
				<h1>{userData?.username}</h1>
			</HomePageContainer>
		</>
	)
}

export default HomePage
