import styled from 'styled-components'
import { device } from '../../styles/deviceSizes'

export const MoviesListContainer = styled.div`
	display: grid;
	padding: 1rem 2rem;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 1rem;

	.card-title {
		height: 56px;
	}

	#hello {
	}

	@media ${device.laptop} {
		grid-template-columns: 1fr 1fr 1fr;
	}
`

export const Header = styled.div`
	font-size: 30px;
	padding: 2rem 2rem;
`
