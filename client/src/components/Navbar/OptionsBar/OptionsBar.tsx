import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { setToggleSearchBar } from '../../../features/navbar/navbarSlice'
import { Flex, HomeBtn, PrimaryButton } from '../../../styles/GlobalStyles.elements'
import {
  DropDown,
  DropDownAnchor,
  NavbarContainer,
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
      <Flex ai='center' jc='right' className="nav-menu">
        <PrimaryButton
          className='search-btn'
          onClick={() => {
            dispatch(setToggleSearchBar(true))
          }}
        >
          <IoIosSearch className='icon'></IoIosSearch>
        </PrimaryButton>
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
      </Flex>
    )
  } else {
    body = (
      <>
        <Flex ai='center' jc='right' className='nav-menu'>
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
        </Flex>
      </>
    )
  }

  // return (
  //   <NavbarContainer className='navbar-container base-100'>
  //     <Link to='/'>
  //       <HomeBtn>CAS</HomeBtn>
  //     </Link>
  //     {body}
  //   </NavbarContainer>
  // )
  return (
    <NavbarContainer className="navbar">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div>
      <Link to='/'>
        <HomeBtn>CAS</HomeBtn>
      </Link>
      <div className="flex-none hidden lg:block">
        {body}
      </div>
    </NavbarContainer>
  )
}

export default OptionsBar
