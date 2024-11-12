import styled from 'styled-components'


export const Pricing = styled.div`
  width: 100%;
  padding: 6rem 1rem;
  background: black;
`;

export const CardContainer = styled.div`
  max-width: 960px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;

  @media screen and (max-width: 740px) {
    max-width: 90%;
    margin: auto;
    grid-template-columns: repeat(1, 1fr); /* Correção aqui */
  }
`;
