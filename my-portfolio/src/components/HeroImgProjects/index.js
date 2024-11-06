import React from 'react';
import { HeroContainer, Heading } from './styled.js';

const HeroProjects = ({ title, subtitle }) => {
  return (
    <HeroContainer>
      <Heading>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Heading>
    </HeroContainer>
  );
};

export default HeroProjects;
