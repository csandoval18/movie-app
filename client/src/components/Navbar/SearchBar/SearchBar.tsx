import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import {
	fetchMoviesThunk,
	setSearchVal,
} from '../../../features/movie/movieSlice'
import { setToggleSearchBar } from '../../../features/navbar/navbarSlice'
import { Flex, HomeBtn } from '../../../styles/GlobalStyles.elements'
import { useSearchMovies } from '../../../utils/useSearchMovies'
import { useSortByYear } from '../../../utils/useSortByYear'
import { NavbarContainer } from '../Navbar.elements'
import {
	ReturnBtn,
	SearchBarContainer,
	SearchBarInput,
} from './SearchBar.elements'

const SearchBar: React.FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const [searchInput, setSearchInput] = useState<String>()

	// let movies = useSearchMovies()
	// movies = useSortByYear(movies)

	// console.log('movies searchbar:', movies)
	// useEffect(() => {
	// 	console.log('movies searchbar:', movies)
	// }, [movies])

	return (
		<SearchBarContainer className='searchbar-container'>
			<Flex gap='1rem' className='options-container'>
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
							dispatch(fetchMoviesThunk({ searchMovieInput: searchInput }))
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
		</SearchBarContainer>
	)
}

export default SearchBar
