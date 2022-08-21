import styled from 'styled-components'
import { device } from '../../../styles/deviceSizes'

export const MoviesListContainer = styled.div`
	.header {
		margin-left: 3rem;
		padding: 2rem 0;
	}

	@media ${device.laptopL} {
		.header {
			margin-left: 7rem;
		}
	}
`

export const MovieResults = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	gap: 1rem;
	justify-items: center;

	.card-title {
		height: 56px;
	}

	figure > img {
		width: 100%;
		height: 30rem;
		border-top-left-radius: 14px;
		border-top-right-radius: 14px;
	}

	@media only screen and (${device.desktopM}) {
		grid-template-columns: 1fr 1fr;
	}
`

export const PaginationBtns = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3rem 0;
`
