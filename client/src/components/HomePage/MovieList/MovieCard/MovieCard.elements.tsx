import styled from 'styled-components'
import { device } from '../../../../styles/deviceSizes'

export const MovieCardContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 44rem;
	width: 22rem;
	border-radius: 12px;

	.card {
		width: 100%;
		padding-bottom: 1rem;
	}

	figure {
		height: 30rem;
		width: 100%;

		img {
			width: 100%;
			height: 30rem;
		}
	}
`
/* @media ${device.laptopL} {
		height: 100%;

		.card {
			height: 30rem;
			width: 22rem;
		}

		figure {
			display: flex;
			justify-content: center;
			width: 100%;
			height: 20rem;
			background-color: #202020;
			border-top-left-radius: 18px;
			border-top-right-radius: 18px;

			img {
				border-radius: 12px;
				height: 240px;
				width: 18rem;
			}
		}
	} */
