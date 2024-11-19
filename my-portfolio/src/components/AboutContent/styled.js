import styled from 'styled-components';

export const ContainerAbout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem; /* Padding para dar um espaço interno */
`;

export const Content = styled.section`
  display: flex;
  gap: 8rem;
  align-items: center;
  margin: auto 0;
  
  @media (max-width: 1024px) {
    gap: 4rem; /* Reduz o espaço entre os elementos em telas menores */
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Altera para coluna em telas menores */
    gap: 2rem;
  }
`;

export const ContainerImg = styled.div`
  object-fit: cover;
  position: relative;
  display: flex;
  justify-content: center; /* Centraliza imagens em telas menores */
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const WhoAmI = styled.div`
  text-align: center;
  margin-left: 8rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    margin-left: 4rem; /* Reduz a margem lateral em telas menores */
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
  }
`;

export const ImageApresentation1 = styled.img`
  width: 650px;
  border-radius: 10px;
  margin-right: 1rem;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    width: 500px; /* Reduz o tamanho da imagem em telas médias */
  }

  @media (max-width: 768px) {
    width: 100%; /* Ajusta a imagem para a largura total em telas menores */
    margin-right: 0;
  }
`;

export const ImageApresentation2 = styled.img`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 200px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 150px; /* Reduz o tamanho da imagem em telas menores */
  }

  @media (max-width: 480px) {
    width: 100px; /* Reduz ainda mais em dispositivos muito pequenos */
  }
`;

export const ButtonContact = styled.button`
  width: 6rem;
  margin-top: 10px;
  height: 2rem;
  border-radius: 5px;
  font-weight: bold;
  background-color: rgb(248, 217, 15);

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100px; /* Botão ocupa largura total em telas menores */
    height: 2.5rem;
  }
`;
