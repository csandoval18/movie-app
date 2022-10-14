import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
  fetchMoviesThunk,
  selectMovieSearchInput,
  setSearchVal,
} from '../../../features/movie/movieSlice'
import { setToggleSearchBar } from '../../../features/navbar/navbarSlice'
import { Flex } from '../../../styles/GlobalStyles.elements'
import {
  ReturnBtn,
  SearchBarContainer,
  SearchBarInput,
} from './SearchBar.elements'

const SearchBar: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [searchInput, setSearchInput] = useState<String>(
    useAppSelector(selectMovieSearchInput),
  )
  // useEffect(() => {
  // 	// dispatch(setSearchVal(searchInput))
  // 	dispatch(fetchMoviesThunk({ searchVal: searchInput }))
  // }, [searchInput])

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
              navigate(`/search=${searchInput}`)
            }}
          >
            <SearchBarInput
              value={searchInput as string}
              type='text'
              placeholder='Search movies'
              className='input input-bordered '
              onChange={(e) => {
                setSearchInput(e.target.value)
                dispatch(setSearchVal(e.target.value))
              }}
            />
          </form>
        </div>
      </Flex>
    </SearchBarContainer>
  )
}

export default SearchBar
