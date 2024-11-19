// styled.js

import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  margin-top: 5rem;
  border-radius: 10px;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;

export const CarouselContent = styled.div`
  display: flex;
  overflow: hidden;
  overflow-x: auto;
  justify-content: start;
  scroll-behavior: smooth;
  gap: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  min-width: 300px;
  margin: 0 auto;
  height: 380px;
  flex: none;

  @media (max-width: 768px) {
    max-width: 220px;
    height: 320px;
  }
`;

export const Image = styled.img`
  width: 220px;
  min-height: 160px;
  object-fit: cover;
  border-radius: 100%;

  @media (max-width: 768px) {
    width: 180px;
    min-height: 140px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-top: 1.5rem;
  text-align: center;
  word-break: break-word; 
  justify-content:center;
  align-items:center;
  .title {
    font-size: 2.0em;
    font-weight: bold;
  }

  .phrase {
    font-size: 1.0rem;
    margin-top: 4px;
  }

  .pricing {
    font-size: 1.0rem;
    color: #e5a00d;
    margin-top: 4px;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 1.8em;
    }

    .phrase, .pricing {
      font-size: 1rem;
    }
  }
`;

export const ButtonMore = styled.button`
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  margin-top: 1.9rem;
  max-width:180px;
  text-align:center;

  &:hover {
    background-color: #e55a00;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.8em;
    margin-top: 1.3rem;
  }
`;

export const Buttons = styled.div`
  text-align: center;
  position: relative;
  width: 100%;

  .left, .right {
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-500%);
    font-size: 40px; /* Tamanho padrão do ícone */
  }

  .left {
    left: -40px;
  }

  .right {
    right: -40px;
  }

  @media (max-width: 768px) {
    .left, .right {
      font-size: 32px; /* Tamanho reduzido para telas menores */
    }
    
    .left {
      left: -30px;
    }
    
    .right {
      right: -30px;
    }
  }
`;
