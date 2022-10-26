import styled from 'styled-components'
import { device } from '../../styles/deviceSizes'

export const HomePageContainer = styled.div`
	margin: 0 0.25rem;
	/* padding: 2rem 4rem; */
	padding: 1.5rem 0;
	.card-heading {
		font-size: 16px;
		line-height: 2.5rem;
		text-align: center;
	}
	@media screen and (${device.tablet}) {
		margin: 2rem 4rem;
	}
`
