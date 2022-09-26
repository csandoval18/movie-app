import styled from 'styled-components'
import { device } from '../../../styles/deviceSizes'

export const MoviesListContainer = styled.div`
	.header {
		padding: 2rem 0;
		margin-left: 1.5rem;
	}
`

export const MovieResults = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
	justify-items: center;

	.card-title {
		height: 56px;
	}

	@media only screen and (${device.mobileL}) {
		grid-template-columns: 1fr 1fr 1fr;
	}
`

export const PaginationBtnsStyle = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3rem 0;
`
