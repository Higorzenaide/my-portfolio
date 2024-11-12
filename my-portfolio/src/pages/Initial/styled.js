import styled, { keyframes } from "styled-components";

// Animação de fade-in
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const InitialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  padding: 20px;
  background: linear-gradient(to bottom, #121212, #1f1f1f);
  color: #fff;
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 10px;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #ffc107;
  margin-bottom: 20px;
  animation: ${fadeIn} 1.2s ease-in-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

