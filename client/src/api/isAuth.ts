import axios from 'axios'
import { useEffect, useState } from 'react'
import { TokenData } from '../types'

// Checks if user is authenticated. If true returns Token payload data
export const useIsAuth = (): TokenPayload | boolean => {
	const [userData, setUserData] = useState<TokenPayload | boolean>(false)
	const [token, setToken] = useState<string>(
		sessionStorage.getItem('token') as string,
	)
	console.log('token:', token)
	useEffect(() => {
		console.log('------------ isauth fired')
		axios
			.post(
				'http://localhost:4000/api/user/auth',
				{},
				{
					headers: { Authorization: `${token}` },
				},
			)
			.then((res) => {
				console.log('res.data:', res.data)
				setUserData(res.data)
				console.log('userData1:', userData)
			})
			.catch((err) => {
				console.log(err.response.data)
				// setUserData(err)
			})
	}, [token])
	console.log('userData2:', userData)
	return userData
}
