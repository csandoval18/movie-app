import styled from "styled-components"
import { device } from "../../styles/deviceSizes"

export const MovieDetailsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`
export const MovieDetailsCard = styled.div`
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
		background-color: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(24px);
		border-collapse: collapse;
		border-radius: 15px;
		font-size: 0.9em;
		margin: 0 0.4rem;
		max-width: 360px;
		overflow: hidden;
		thead tr {
			background-color: hsl(var(--n));
			text-align: center;
			font-weight: bold;
		}
		th,
		td {
			padding: 12px 15px;
		}
		tbody tr:nth-of-type(even) {
			background-color: hsl(var(--n));
		}
		tbody tr:last-of-type {
			border-bottom: 2px solid hsl(var(--p));
		}
	}
	@media (${device.tablet}) {
		.content-table {
			max-width: 650px;
			margin: 4rem;
		}
		.poster-container img {
			height: 100%;
			width: 100%;
			max-width: 350px;
		}
	}
`
