import axios from 'axios'
import React, { useState } from 'react'
import { Router, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectToggleSearchbar } from '../../features/navbar/navbarSlice'
import { Header } from '../../styles/GlobalStyles.elements'
import { setUserSession } from '../../utils/common'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../Navbar/SearchBar/SearchBar'
import { LoginContainer } from './Login.elements'

const Login: React.FC = () => {
	// const navigate = useNavigate()
	const [username, setUsername] = useState('')
	const [password, setPass] = useState('')
	const [errorMessages, setErrorMessages] = useState({})

	const handleLogin = () => {
		axios
			.post('http://localhost:4000/api/user/login', {
				username: username,
				password: password,
			})
			.then((res) => {
				console.log(res)
				setUserSession(res.data)
				window.location.href = '/'
			})
	}

	return (
		<>
			<LoginContainer>
				<div className='card  bg-base-100 shadow-xl'>
					<div className='card-body'>
						<Header className='card-title'>Login</Header>
						<form
							onSubmit={(e) => {
								e.preventDefault()
								handleLogin()
							}}
						>
							<label htmlFor='username'>Username</label>
							<input
								name='username'
								type='text'
								placeholder='username'
								className='input input-bordered input-primary w-full max-w'
								onChange={(e) => setUsername(e.target.value)}
							/>
							<label htmlFor='password'>Password</label>
							<input
								name='password'
								type='text'
								placeholder='password'
								className='input input-bordered input-primary w-full max-w'
								onChange={(e) => setPass(e.target.value)}
							/>
							<span className='card-actions justify-end'>
								<button className='btn btn-primary'>Login</button>
							</span>
						</form>
					</div>
				</div>
			</LoginContainer>
		</>
	)
}

export default Login
