import styled from 'styled-components'

export const MovieCardContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 39rem;
	width: 400px;
	border-radius: 12px;

	.card {
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	img {
		height: 24rem;
		width: 17rem;
	}
`
export const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 5rem;
	width: 100%;
	border-top-left-radius: 12px;
	border-top-right-radius: 12px;
	color: aliceblue;
	padding: 20px 20px;
	background-color: black;
`
