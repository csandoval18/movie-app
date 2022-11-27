import { MoviesSearchData } from './types'

export const useSortByYear = (
	movies: MoviesSearchData[],
): MoviesSearchData[] => {
	if (!movies) return []

	movies.sort(function (a, b) {
		return parseInt(b.Year) - parseInt(a.Year)
	})
	return movies
}
