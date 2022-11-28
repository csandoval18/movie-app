import styled from 'styled-components'
import { device } from '../../../styles/deviceSizes'

export const MoviesListContainer = styled.div`
	margin: 2rem auto;
	.header {
		text-align: center;
	}
`
export const MovieResults = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	margin-top: 3rem;
	@media (${device.tablet}) {
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}
	@media (${device.desktopM}) {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		gap: 2rem;
	}
`
export const PaginationBtnsStyle = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 3rem;
	button:hover {
		background-color: rgba(147, 196, 253, 0.158);
	}
	.btn-active:hover {
		background-color: hsl(var(--p));
	}
`
