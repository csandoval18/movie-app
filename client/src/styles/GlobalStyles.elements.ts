import styled, { createGlobalStyle } from 'styled-components'
import { device } from './deviceSizes'

interface FlexProps {
	bg?: string
	ai?: string
	jc?: string
	gap?: string
}

export const Header = styled.div`
	font-size: 30px;
	text-align: center;
`
export const GlobalStyle = createGlobalStyle`
  .px-responsive {
    padding-inline: 1rem;
  }
  @media (${device.tablet}) {
    .px-responsive {
      padding-inline: 4rem !important;
    }
  }
`
export const Flex = styled.div<FlexProps>`
	align-items: ${(p) => p.ai};
	background-color: ${(p) => p.bg};
	display: flex;
	gap: ${(p) => p.gap};
	justify-content: ${(p) => p.jc};
	height: inherit;
`
export const PrimaryButton = styled.button`
	align-items: center;
	border: 1px solid white;
	border-radius: 8px;
	color: white;
	display: flex;
	justify-content: center;
	padding: 8px 8px;
	transform: translateY(0);
	transition: transform 0.5s ease-in-out;
	&:hover {
		background-color: rgba(41, 67, 122, 0.2);
		transform: translateY(-4px);
	}
`
export const HomeBtn = styled.button`
	align-items: center;
	border-radius: 10px;
	color: white;
	display: flex;
	font-weight: 800;
	font-size: 2.5rem;
	height: 48px;
	justify-content: center;
	padding: 0 0.5rem;
	&:hover {
		background-color: rgba(41, 67, 122, 0.2);
	}
`
export const Card = styled.div`
	background-color: hsl(var(--n));
	color: #fff;
	padding: 3rem 3rem;
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
`
