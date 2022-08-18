import { MovieData } from '../types'

export const useSortByYear = (movies: MovieData[]): MovieData[] => {
	if (!movies) return []

	movies.sort(function (a, b) {
		return parseInt(b.Year) - parseInt(a.Year)
	})
	console.log('sorted movies:', movies)
	return movies
}