import styled from 'styled-components'

export const MovieCardStyle = styled.div`
	transition: transform 0.2s ease-out;
	width: 22rem;
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
`
