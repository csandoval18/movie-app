import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { setToggleSearchBar } from '../../../features/navbar/navbarSlice'
import { HomeBtn, PrimaryButton } from '../../../styles/GlobalStyles.elements'
import {
	DropDown,
	DropDownAnchor,
	NavbarContainer,
	NavOptionsFlex,
} from '../Navbar.elements'

const OptionsBar: React.FC = () => {
	const dispatch = useAppDispatch()
	const [isLoggedIn, setIsLoggedIn] = useState<string>(
		sessionStorage.getItem('token') as string,
	)
	let body
	console.log('token:', isLoggedIn)

	if (isLoggedIn) {
		body = (
			<NavOptionsFlex ai='center' jc='right'>
				<button
					className='btn search-btn'
					onClick={() => {
						dispatch(setToggleSearchBar(true))
					}}
				>
					<IoIosSearch className='icon'></IoIosSearch>
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
								<DropDownAnchor
									href='/'
									onClick={() => {
										sessionStorage.clear()
									}}
								>
									Logout
								</DropDownAnchor>
							</li>
						</DropDown>
					</div>
				</div>
			</NavOptionsFlex>
		)
	} else {
		body = (
			<NavOptionsFlex ai='center' jc='right'>
				<PrimaryButton
					className='search-btn'
					onClick={() => {
						dispatch(setToggleSearchBar(true))
					}}
				>
					<IoIosSearch className='icon'></IoIosSearch>
				</PrimaryButton>
				<Link className='' to='/login'>
					<PrimaryButton>Login</PrimaryButton>
				</Link>
				<Link className='' to='/register'>
					<PrimaryButton>Register</PrimaryButton>
				</Link>
			</NavOptionsFlex>
		)
	}

	return (
		<NavbarContainer className='navbar-container base-100'>
			<Link to='/'>
				<HomeBtn>CAS</HomeBtn>
			</Link>
			{body}
		</NavbarContainer>
	)
}

export default OptionsBar
