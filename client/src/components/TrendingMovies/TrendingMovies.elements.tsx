import styled from 'styled-components'
import { device } from '../../styles/deviceSizes'

export const TrendingMoviesContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 1rem;

	@media ${device.laptop} {
		grid-template-columns: 1fr 1fr 1fr;
	}
`
