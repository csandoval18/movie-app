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

	figure > img {
		width: 100%;
		height: 30rem;
		border-top-left-radius: 14px;
		border-top-right-radius: 14px;
	}

	@media ${device.laptop} {
		grid-template-columns: 1fr 1fr 1fr;
	}
`

export const Header = styled.div`
	font-size: 30px;
	padding: 2rem 2rem;
`
