import styled from 'styled-components'
import moviesimg from '../../assets/images/HomePage/movies.webp'

export const AuthContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 1rem;
	height: 80vh;
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		-webkit-box-shadow: 0 0 0 30px hsla(var(--b1) / var(--tw-bg-opacity, 1))
			inset !important;
	}
	input:-webkit-autofill {
		-webkit-text-fill-color: hsl(var(--nc)) !important;
	}

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
