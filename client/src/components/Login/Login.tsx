import React from 'react'
import { LoginContainer } from './Login.elements'

const Login = () => {
	return (
		<LoginContainer>
			<div className='card w-96 bg-base-100 shadow-xl'>
				<div className='card-body'>
					<h1 className='card-title'>Login</h1>
					<form action=''>
						<label htmlFor='username'>Username</label>
						<input
							name='username'
							type='text'
							placeholder='Type here'
							className='input input-bordered input-primary w-full max-w-xs'
						/>
						<label htmlFor='password'>Password</label>
						<input
							name='password'
							type='text'
							placeholder='Type here'
							className='input input-bordered input-primary w-full max-w-xs'
						/>
						<div className='card-actions justify-end'>
							<button className='btn btn-primary'>Login</button>
						</div>
					</form>
				</div>
			</div>
		</LoginContainer>
	)
}

export default Login
