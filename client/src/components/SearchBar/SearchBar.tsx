import React, { useEffect, useState } from 'react'
import { MovieData } from '../../types'
import { SearchBarContainer, SearchBarInput } from './SearchBar.elements'

const SearchBar = () => {
	// const [movies, setMovies] = useState<MovieData[]>([])
	const [searchInput, setSearchInput] = useState<String>()

	// const searchMovieRequest = async () => {
	// 	const url = `http://www.omdbapi.com/?s=${searchInput}&apikey=9eaecb1`
	// 	await fetch(url)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log('data:', data)
	// 			setMovies(data.Search)
	// 		})
	// }

	// useEffect(() => {
	// 	console.log('movies:', movies)
	// }, [movies])

	return (
		<SearchBarContainer className='searchbar-container'>
			<div className='form-control'>
				<form
					onSubmit={(e) => {
						e.preventDefault()
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
