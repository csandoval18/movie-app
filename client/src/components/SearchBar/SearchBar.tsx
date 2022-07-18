import React from 'react'

const SearchBar = () => {
	return (
		<div>
			<form action=''>
				<input
					type='text'
					placeholder='search movies'
					className='input input-bordered w-[600px] max-w-xs'
				/>
			</form>
		</div>
	)
}

export default SearchBar
