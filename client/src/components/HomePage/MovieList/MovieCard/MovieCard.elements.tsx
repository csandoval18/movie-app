import styled from 'styled-components'
import { device } from '../../../../styles/deviceSizes'

export const MovieCardContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 44rem;
	width: 400px;
	border-radius: 12px;

	.card {
		width: 100%;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	figure {
		height: 30rem;
		width: 100%;
	}

	@media ${device.laptopL} {
		height: 100%;

		.card {
			height: 30rem;
		}

		figure {
			display: flex;
			justify-content: center;
			width: 100%;
			height: 20rem;
			background-color: black;
			border-top-left-radius: 18px;
			border-top-right-radius: 18px;

			img {
				border-radius: 12px;
				height: 250px;
				width: 100%;
			}
		}
	}
`
