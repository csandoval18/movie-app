import axios from 'axios'
import { useEffect, useState } from 'react'
import { TokenPayload } from '../types'

// Checks if user is authenticated. If true returns Token payload data
export const useIsAuth = (): TokenPayload | null => {
	const [userData, setUserData] = useState<TokenPayload | null>(null)
	const [token, setToken] = useState<string>(
		sessionStorage.getItem('token') as string,
	)
	useEffect(() => {
		axios
			.post(
				'http://localhost:4000/api/users/auth',
				{},
				{
					headers: { Authorization: `${token}` },
				},
			)
			.then((res) => {
				setUserData(res.data)
			})
			.catch((err) => {
				console.log(err.response.data)
				// setUserData(err)
			})
	}, [token])
	return userData
}
