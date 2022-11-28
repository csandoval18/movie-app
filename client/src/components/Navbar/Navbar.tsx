import React from 'react'
import { IoIosSearch, IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { IoLogoAmplify } from 'react-icons/io5'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
	selectToggleSearchbar,
	setToggleSearchBar,
} from '../../features/navbar/navbarSlice'
import {
	Flex,
	HomeBtn,
	PrimaryButton,
} from '../../styles/GlobalStyles.elements'
import { useIsAuth } from '../../utils/api/isAuth'
import { DropDown, DropDownAnchor, NavbarContainer } from './Navbar.elements'
import SearchBar from './SearchBar/SearchBar'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
	const navigate = useNavigate()
	const toggleSearchBar = useAppSelector(selectToggleSearchbar)
	console.log('togglesearchbar', toggleSearchBar)
	const dispatch = useAppDispatch()
	const isLoggedIn = useIsAuth()
	console.log('isloggedin:', isLoggedIn)
	let body

	if (isLoggedIn) {
		body = (
			<Flex ai='center' jc='right' className='nav-menu'>
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
								<DropDownAnchor href='/settings'>Settings</DropDownAnchor>
							</li>
							<li>
								<DropDownAnchor
									onClick={() => {
										sessionStorage.clear()
										window.location.reload()
									}}
								>
									Logout
								</DropDownAnchor>
							</li>
						</DropDown>
					</div>
				</div>
			</Flex>
		)
	} else {
		body = (
			<>
				<Flex ai='center' jc='right' className='nav-menu'>
					<Link className='' to='/login'>
						<PrimaryButton>Login</PrimaryButton>
					</Link>
					<Link className='' to='/register'>
						<PrimaryButton>Register</PrimaryButton>
					</Link>
				</Flex>
			</>
		)
	}
	return (
		// Need to make a util to detect viewport width to remove search-mode class in desktop mode
		<NavbarContainer
			className={
				toggleSearchBar
					? 'Navbar px-responsive search-mode'
					: 'Navbar px-responsive'
			}
		>
			<Link to='/'>
				<HomeBtn className={toggleSearchBar ? 'handle-searchbar-display' : ''}>
					<IoLogoAmplify />
				</HomeBtn>
			</Link>
			<SearchBar
				className={toggleSearchBar ? '' : 'handle-searchbar-display'}
			/>
			<div
				className={`handle-mobile-menu-display flex gap-4 items-center ${
					toggleSearchBar ? 'handle-searchbar-display' : ''
				}`}
			>
				<PrimaryButton
					className='mobile-search-btn'
					onClick={() => {
						dispatch(setToggleSearchBar(true))
					}}
				>
					<IoIosSearch className='icon'></IoIosSearch>
				</PrimaryButton>
				<PrimaryButton
					onClick={() => {
						navigate('./favorites')
					}}
				>
					{/* <IoMdHeart style={{ fontSize: 25 }} /> */}
					<IoMdHeartEmpty style={{ fontSize: 25 }} />
				</PrimaryButton>
				<label
					htmlFor='my-drawer-3'
					className='btn btn-square btn-ghost hamburger'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						className='inline-block w-10 h-10 stroke-current hamburger'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h16M4 18h16'
						></path>
					</svg>
				</label>
			</div>
			<div className='flex-none menu-options'>{body}</div>
		</NavbarContainer>
	)
}

export default Navbar
