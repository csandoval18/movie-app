import axios from 'axios'
import { useEffect, useState } from 'react'
import { TokenPayload } from '../../types'

// Checks if user is authenticated. If true returns Token payload data
export const useIsAuth = (): TokenPayload | boolean => {
	const [userData, setUserData] = useState<TokenPayload | boolean>(false)
	const [token, setToken] = useState<string>(
		sessionStorage.getItem('token') as string,
	)
	useEffect(() => {
		axios
			.post(
				'http://localhost:4000/api/user/auth',
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
