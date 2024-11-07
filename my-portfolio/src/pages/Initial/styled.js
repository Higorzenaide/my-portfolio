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

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 600px;
  line-height: 1.5;
  margin-bottom: 20px;
  animation: ${fadeIn} 1.4s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Details = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
  max-width: 600px;
  margin-top: 10px;
  margin-bottom: 30px;
  line-height: 1.5;
  animation: ${fadeIn} 1.6s ease-in-out;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  color: #121212;
  background-color: #ffc107;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8rem;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: #fff;
  color: #121212;
  margin-left: 10px;

  &:hover {
    background-color: #ffc107;
    color: #fff;
  }

  @media (max-width: 480px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BackToTopButton = styled.button`
  position: fixed;
  bottom: 28%;
  right: 49%;
  padding: 10px;
  font-size: 1rem;
  color: #fff;
  background-color: #ffc107;
  border: none;
  border-radius: 40%;
  cursor: pointer;
  opacity: ${(props) => (props.$visible ? "1" : "0")};
  transform: ${(props) => (props.$visible ? "scale(1)" : "scale(0.5)")};
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #fff;
    color: #121212;
  }

  @media (max-width: 1040px) {
    bottom: 59%;
    right: 46%;
  }
`;