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
	/* color: white; */
	color: hsl(var(--n));
	/* background-color: hsl(var(--n)); */
	border: 2px solid hsl(var(--n));
	border-radius: 8px;
	padding: 10px 1rem;

	&:hover {
		/* background-color: #63fced;
		border: 2px solid #63fced; */
		/* transition: all ease-in 0.1s; */
		background-color: hsl(var(--n));
		color: hsla(var(--bc) / var(--tw-text-opacity, 1));
	}
`
export const HomeBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	height: 48px;
	font-weight: 800;
	font-size: 2.5rem;
	border-radius: 10px;
	padding: 0 0.5rem;

	&:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}
`

export const Card = styled.div`
	background-color: hsl(var(--n));
	padding: 3rem 3rem;
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
`
