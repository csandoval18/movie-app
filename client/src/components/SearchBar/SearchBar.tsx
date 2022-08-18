import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
	selectMovieSearchInput,
	setSearchVal,
} from '../../features/searchMovie/searchMovieSlice'
import { MovieData } from '../../types'
import { SearchBarContainer, SearchBarInput } from './SearchBar.elements'

const SearchBar = () => {
	// const [movies, setMovies] = useState<MovieData[]>([])
	const searchMovieInput = useAppSelector(selectMovieSearchInput)
	const dispatch = useAppDispatch()
	const [searchInput, setSearchInput] = useState<String>()

	useEffect(() => {
		console.log('searchMovieInput:', searchMovieInput)
	}, [searchMovieInput])

	return (
		<SearchBarContainer className='searchbar-container'>
			<div className='form-control'>
				<form
					onSubmit={(e) => {
						e.preventDefault()
						dispatch(setSearchVal(searchInput))
						// searchMovieRequest()
					}}
				>
					<SearchBarInput
						type='text'
						placeholder='Search movies'
						className='input input-bordered max-w-none w-[500px]'
						onInput={(e) =>
							setSearchInput((e.target as HTMLInputElement).value)
						}
					/>
				</form>
			</div>
		</SearchBarContainer>
	)
}

export default SearchBar
