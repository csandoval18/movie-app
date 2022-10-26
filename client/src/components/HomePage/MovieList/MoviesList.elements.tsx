import styled from 'styled-components'
import { device } from '../../../styles/deviceSizes'

export const MoviesListContainer = styled.div`
  margin: 2rem auto;
`

export const MovieResults = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.5rem;
	/* justify-items: center; */ 
	rd-title {
		height: 56px;
	}
	@media screen and (${device.tablet}) {
		grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
    row-gap: 1rem;
	}
	@media screen and (${device.desktopM}) {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 4rem;
    row-gap: 1rem;
	}
`

export const PaginationBtnsStyle = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
  padding: 3rem 0;
`
