import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { setSearchVal } from '../../../features/movie/movieSlice'
import { setToggleSearchBar } from '../../../features/navbar/navbarSlice'
import { Flex } from '../../../styles/GlobalStyles.elements'
import {
	ReturnBtn,
	SearchBarContainer,
	SearchBarInput,
} from './SearchBar.elements'

const SearchBar: React.FC = () => {
	const dispatch = useAppDispatch()
	const [searchInput, setSearchInput] = useState<String>()

	return (
		<SearchBarContainer className='searchbar-container'>
			<div>
				<Link className='btn btn-ghost normal-case text-3xl home-btn' to='/'>
					CAS
				</Link>
			</div>
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
		</SearchBarContainer>
	)
}

export default SearchBar
