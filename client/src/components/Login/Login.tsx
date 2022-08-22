import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectToggleSearchbar } from '../../features/navbar/navbarSlice'
import { Header } from '../../styles/GlobalStyles.elements'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../Navbar/SearchBar/SearchBar'
import { LoginContainer } from './Login.elements'

const Login = () => {
	const toggleSearchBar = useAppSelector(selectToggleSearchbar)
	console.log('searchBar:', toggleSearchBar)
	return (
		<>
			{toggleSearchBar ? <SearchBar /> : <Navbar></Navbar>}
			<LoginContainer>
				<div className='card  bg-base-100 shadow-xl'>
					<div className='card-body'>
						<Header className='card-title'>Login</Header>
						<form onSubmit={() => {}}>
							<label htmlFor='username'>Username</label>
							<input
								name='username'
								type='text'
								placeholder='username'
								className='input input-bordered input-primary w-full max-w'
							/>
							<label htmlFor='password'>Password</label>
							<input
								name='password'
								type='text'
								placeholder='password'
								className='input input-bordered input-primary w-full max-w'
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
