import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { NavbarContainer, NavbarOptions } from './Navbar.elements'

const Navbar: React.FC = () => {
	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
			</div>
			<div className='flex-none gap-2'>
				<div className='form-control'>
					<input
						type='text'
						placeholder='Search'
						className='input input-bordered'
					/>
				</div>
				<div className='dropdown dropdown-end'>
					<label className='btn btn-ghost btn-circle avatar'>
						<div className='w-10 rounded-full'>
							<img src='https://placeimg.com/80/80/people' />
						</div>
					</label>
					<ul className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
						<li>
							<a className='justify-between'>
								Profile
								<span className='badge'>New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		// <NavbarContainer>
		// 	<div>logo</div>
		// 	<NavbarOptions>
		// 		<li>
		// 			<SearchBar />
		// 		</li>
		// 		<li>login</li>
		// 		<li>logout</li>
		// 	</NavbarOptions>
		// </NavbarContainer>
	)
}

export default Navbar
