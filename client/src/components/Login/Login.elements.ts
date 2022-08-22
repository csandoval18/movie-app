import styled from 'styled-components'
import moviesimg from '../../assets/images/HomePage/movies.webp'

export const LoginContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 1rem;
	height: 80vh;

	.card {
		width: 30rem;
	}

	form {
		display: flex;
		flex-direction: column;
	}

	label {
		padding: 1rem 0;
	}

	span {
		padding-top: 1.8rem;
		display: flex;
		align-items: center;
	}
`
