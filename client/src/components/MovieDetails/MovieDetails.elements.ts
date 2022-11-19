import styled from 'styled-components'

export const MovieDetailsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const MovieDetailsCard = styled.div`
	max-width: 360px;
	padding: 2rem 0;
	.header {
		padding-bottom: 2rem;
	}
	img {
		border-radius: 15px;
	}
	p {
		padding: 0.5rem 0;
	}
	.poster-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content-table {
		border-collapse: collapse;
		border-radius: 15px;
		font-size: 0.9em;
		margin: 0 0.4rem;
		max-width: 360px;
		overflow: hidden;
		thead tr {
			background-color: hsl(var(--n));
			/* color: #fff; */
			text-align: center;
			font-weight: bold;
		}
		th,
		td {
			padding: 12px 15px;
		}
		tbody tr {
			/* border-bottom: 1px solid #dddddd; */
		}
		tbody tr:nth-of-type(even) {
			/* background-color: #f3f3f3; */
			background-color: hsl(var(--n));
		}
		tbody tr:last-of-type {
			border-bottom: 2px solid hsl(var(--p));
		}
	}
`
