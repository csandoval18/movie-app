import styled from 'styled-components'
import { device } from '../../../../styles/deviceSizes'

export const MovieCardStyle = styled.div`
	transition: transform 0.2s ease-out;
	width: 21rem;
	&:hover {
		transform: scale(1.03);
	}
	.card {
		background-color: blue;
		width: 100%;
	}
	figure {
		height: 30rem;
		width: 100%;
		img {
			height: 30rem;
			width: 100%;
		}
	}
	@media (${device.tablet}) {
		& {
			width: 22rem;
		}
	}
`
