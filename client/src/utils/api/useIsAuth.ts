import axios from 'axios'
import { useEffect, useState } from 'react'
import { TokenPayload } from '../../types'

// Checks if user is authenticated. If true returns Token payload data
export const useIsAuth = (): TokenPayload | boolean => {
	const [userData, setUserData] = useState(false)
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
				console.log()
			})
			.catch((err) => {
				console.log(err.response.data)
			})
	}, [token])
	return userData
}
