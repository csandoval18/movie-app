import styled from 'styled-components'

export const MovieDetailsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const MovieDetailsCard = styled.div`
	max-width: 800px;
	padding: 2rem 0;
	margin: 0 1.5rem;
	th,
	td {
		img {
		}
	}
	.header {
		padding-bottom: 2rem;
	}
	img {
		border-radius: 12px;
	}
	p {
		padding: 0.5rem 0;
	}

	.poster-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
