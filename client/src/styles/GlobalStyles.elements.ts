import styled from 'styled-components'

export const Header = styled.div`
	font-size: 30px;
`

interface FlexProps {
	bg?: string
	ai?: string
	jc?: string
	gap?: string
}

export const Flex = styled.div<FlexProps>`
	background-color: ${(p) => p.bg};
	display: flex;
	align-items: ${(p) => p.ai};
	justify-content: ${(p) => p.jc};
	gap: ${(p) => p.gap};
`

export const PrimaryButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	background-color: hsl(var(--n));
	border: none;
	height: 2.9rem;
	width: 3rem;
	border-radius: 8px;

	&:hover {
		background-color: hsl(var(--nf));
	}
`
export const HomeBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	height: 48px;
	font-weight: 700;
	/* background-color: red; */
	font-size: 2.5rem;
	border-radius: 10px;
	padding: 0 0.5rem;

	&:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}
`
