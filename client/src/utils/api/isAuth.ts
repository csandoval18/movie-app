import axios from 'axios'
import { useEffect, useState } from 'react'
import { TokenPayload } from '../types'

interface AuthReturnProperties {
	userData: TokenPayload | null
	loading: boolean
}

// Checks if user is authenticated. If true returns Token payload data
export const useIsAuth = (): AuthReturnProperties => {
	const [loading, setLoading] = useState(true)
	const [userData, setUserData] = useState<TokenPayload | null>(
		null,
	)
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
				setLoading(false)
				setUserData(res.data)
			})
			.catch((err) => {
				console.log(err.response.data)
				// setUserData(err)
			})
	}, [])
	return { userData: userData, loading: loading }
}
