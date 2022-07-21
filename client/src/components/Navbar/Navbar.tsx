import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { DropDown, NavbarContainer } from './Navbar.elements'

const Navbar: React.FC = () => {
	return (
		<NavbarContainer className='navbar-container'>
			<div className='bg-blue-700 text-primary-content'>
				<a className='btn btn-ghost normal-case text-xl' href='/'>
					daisyUI
				</a>
			</div>
			<SearchBar />
			<div className='flex-none gap-2 bg-green-500 text-primary-content'>
				<div className='dropdown dropdown-end'>
					<label
						tabIndex={0}
						className='btn btn-ghost btn-circle avatar'
					>
						<div className='w-10 rounded-full'>
							<img
								src='https://placeimg.com/80/80/people'
								alt='user profile avatar'
							/>
						</div>
					</label>
					<DropDown
						tabIndex={0}
						className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
					>
						<li>
							<a className='justify-between' href='/'>
								Profile
								{/* <span className='badge'>New</span> */}
							</a>
						</li>
						<li>
							<a href='/'>Settings</a>
						</li>
						<li>
							<a href='/'>Logout</a>
						</li>
					</DropDown>
				</div>
			</div>
		</NavbarContainer>
	)
}

export default Navbar
