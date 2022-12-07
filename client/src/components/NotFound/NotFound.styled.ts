import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  align-items: center;
  display: flex;
  min-height:80vh;
  justify-content: center;
  .wrapper {
    background-color: hsl(var(--n));
    border-radius: 1rem;
    text-align: center;
    max-width: 800px;
    margin: 4rem 2rem;
    padding: 4rem;
    h1 {
      font-size: 30px;
      color: hsl(var(--p));
    }
    p {
      color: aliceblue;
    }
  }
`
