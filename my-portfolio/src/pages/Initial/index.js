import React, { useState, useEffect } from "react";
import {InitialContainer,Title,Subtitle,Details,Button,SecondaryButton,ButtonContainer,BackToTopButton} from './styled.js'

const Initial = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Função para controlar o botão "Voltar ao Topo"
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } 
      if(window.scrollY < 900) {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
    }
    }, []);
    
  
    return (
      <InitialContainer>
        <Title>Bem-vindo ao meu portfólio!</Title>
        <Subtitle>Olá! Sou um desenvolvedor React apaixonado por criar experiências digitais únicas e responsivas. Com cada projeto, busco inovação, eficiência e impacto visual.</Subtitle>
        
        <Details>
          Tenho uma sólida experiência em JavaScript, React, CSS e no desenvolvimento de interfaces modernas que oferecem uma experiência suave e intuitiva para os usuários. Acredito que cada detalhe importa, desde a estética até a funcionalidade, para criar soluções que realmente façam a diferença.
        </Details>
        
        <Details>
          Minha missão é transformar ideias em realidade digital. Vamos construir algo incrível juntos? Explore meu portfólio, conheça meus projetos, e descubra o que posso fazer para ajudar a levar sua visão para o próximo nível!
        </Details>
        
        <ButtonContainer>
          <Button onClick={() => window.location.href="#projects"}>Veja Meus Projetos</Button>
          <SecondaryButton onClick={() => window.location.href="#contact"}>Entre em Contato</SecondaryButton>
        </ButtonContainer>
  
        <BackToTopButton $visible={isVisible} onClick={scrollToTop}>
         ↑ 
        </BackToTopButton>
      </InitialContainer>
    );
  };
  
  export default Initial;