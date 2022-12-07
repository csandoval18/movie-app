import axios from 'axios'
import { useEffect, useState } from 'react'
import { TokenPayload } from '../types'

interface UserPayload {
	user: TokenPayload | null
}
interface AuthReturnProperties {
	payload: TokenPayload | null
	loading: boolean
}

// Checks if user is authenticated. If true returns Token payload data
export const useIsAuth = (): any => {
	const [loading, setLoading] = useState(true)
	const [userData, setUserData] = useState<AuthReturnProperties>(
		{ payload: null, loading: true },
	)
	const token = sessionStorage.getItem('token') as string
	useEffect(() => {
		async function getUser() {
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
		}
		getUser()
	}, [])
	return { ...userData, loading: loading }
}
