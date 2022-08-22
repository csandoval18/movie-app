import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { Flex } from '../../styles/GlobalStyles.elements'
import {
	DropDown,
	DropDownAnchor,
	NavbarContainer,
	NavOptionsFlex,
} from './Navbar.elements'
import SearchBar from './SearchBar/SearchBar'

const Navbar: React.FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false)
	const [toggleSearch, setToggleSearch] = useState<Boolean>(false)
	return (
		<NavbarContainer className='navbar-container base-100'>
			<div>
				<Link className='btn btn-ghost normal-case text-xl' to='/'>
					CAS
				</Link>
			</div>
			{/* <SearchBar /> */}
			{isLoggedIn ? (
				<>
					<button>
						<IoIosSearch className='search-icon'></IoIosSearch>
					</button>
					<div className='flex-none gap-2 text-primary-content'>
						<div className='dropdown dropdown-end'>
							<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
								<div className='w-10 rounded-full'>
									<img
										src='https://placeimg.com/80/80/people'
										alt='user profile avatar'
									/>
								</div>
							</label>
							<DropDown
								tabIndex={0}
								className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-base-content'
							>
								<li className='group-hover:bg-primary'>
									<DropDownAnchor className='justify-between' href='/'>
										Profile
										{/* <span className='badge'>New</span> */}
									</DropDownAnchor>
								</li>
								<li>
									<DropDownAnchor href='/'>Settings</DropDownAnchor>
								</li>
								<li>
									<DropDownAnchor href='/'>Logout</DropDownAnchor>
								</li>
							</DropDown>
						</div>
					</div>
				</>
			) : (
				<NavOptionsFlex ai='center' jc='right'>
					<button className='btn search-btn'>
						<IoIosSearch className='icon'></IoIosSearch>
					</button>
					<Link className='btn' to='/login'>
						Login
					</Link>
				</NavOptionsFlex>
			)}
		</NavbarContainer>
	)
}

export default Navbar
