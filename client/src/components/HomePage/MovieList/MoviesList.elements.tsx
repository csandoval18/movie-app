import styled from 'styled-components'
import { device } from '../../../styles/deviceSizes'

export const MoviesListContainer = styled.div`
	.header {
		padding-top: 1rem;
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
	@media only screen and (${device.tablet}) {
		grid-template-columns: 1fr 1fr;
	}
	@media only screen and (${device.desktopM}) {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}
`

export const PaginationBtnsStyle = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 1.5rem;
	padding-bottom: 2rem;
`
