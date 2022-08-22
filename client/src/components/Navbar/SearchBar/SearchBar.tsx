import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { setSearchVal } from '../../../features/movie/movieSlice'
import { setToggleSearchBar } from '../../../features/navbar/navbarSlice'
import { Flex, HomeBtn } from '../../../styles/GlobalStyles.elements'
import { NavbarContainer } from '../Navbar.elements'
import { ReturnBtn, SearchBarInput } from './SearchBar.elements'

const SearchBar: React.FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const [searchInput, setSearchInput] = useState<String>()

	return (
		<NavbarContainer className='searchbar-container'>
			<Link className='' to='/'>
				<HomeBtn>CAS</HomeBtn>
			</Link>
			<Flex gap='1rem'>
				<ReturnBtn
					onClick={() => {
						dispatch(setToggleSearchBar(false))
					}}
				>
					<AiOutlineArrowLeft className='icon'></AiOutlineArrowLeft>
				</ReturnBtn>
				<div className='form-control'>
					<form
						onSubmit={(e) => {
							e.preventDefault()
							dispatch(setSearchVal(searchInput))
							navigate('/')
						}}
					>
						<SearchBarInput
							type='text'
							placeholder='Search movies'
							className='input input-bordered '
							onInput={(e) =>
								setSearchInput((e.target as HTMLInputElement).value)
							}
						/>
					</form>
				</div>
			</Flex>
			<div></div>
		</NavbarContainer>
	)
}

export default SearchBar
