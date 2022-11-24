import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { redirect, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
	fetchMoviesThunk,
	selectMovieSearchInput,
	setSearchVal,
} from '../../../features/movie/movieSlice'
import { setToggleSearchBar } from '../../../features/navbar/navbarSlice'
import {
	ReturnBtn,
	SearchBarContainer,
	SearchBarInput,
} from '../Navbar.elements'

interface SearBarProps {
	className: string
}

const SearchBar: React.FC<SearBarProps> = ({ className }) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [searchInput, setSearchBarInput] = useState<String | undefined>(
		useAppSelector(selectMovieSearchInput),
	)
	return (
		<SearchBarContainer className={`searchbar-container ${className}`}>
			<div className='searchbar-layout'>
				<ReturnBtn
					className='search-return-btn'
					onClick={() => {
						dispatch(setToggleSearchBar(false))
					}}
				>
					<AiOutlineArrowLeft className='icon'></AiOutlineArrowLeft>
				</ReturnBtn>
				<div className='form-control'>
					<form
						onSubmit={async (e) => {
							e.preventDefault()
							dispatch(setSearchVal(searchInput))
							await dispatch(fetchMoviesThunk({ searchVal: searchInput }))
							navigate(`/search=${searchInput}&page=1`)
						}}
					>
						<SearchBarInput
							value={searchInput as string}
							type='text'
							placeholder='Search movies'
							className='input input-bordered '
							onChange={(e) => {
								setSearchBarInput(e.target.value)
							}}
						/>
					</form>
				</div>
			</div>
		</SearchBarContainer>
	)
}

export default SearchBar

// useEffect(() => {
// 	// dispatch(setSearchVal(searchInput))
// 	dispatch(fetchMoviesThunk({ searchVal: searchInput }))
// }, [searchInput])
