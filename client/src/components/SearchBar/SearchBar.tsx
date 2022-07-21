import React from 'react'
import {
	SearchBarContainer,
	SearchBarInput,
} from './SearchBar.elements'

const SearchBar = () => {
	return (
		<SearchBarContainer className='searchbar-container'>
			<div className='form-control'>
				<form action=''>
					<SearchBarInput
						type='text'
						placeholder='Search movies'
						className='input input-bordered max-w-none w-[500px]'
					/>
				</form>
			</div>
		</SearchBarContainer>
	)
}

export default SearchBar
