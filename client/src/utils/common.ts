export const setUserSession = (token: string) => {
	sessionStorage.setItem('token', token)
	// sessionStorage.setItem('user', JSON.stringify(user))
}
