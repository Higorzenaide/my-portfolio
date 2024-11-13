import React from 'react';
import Card from '../../components/PrincingCard/index.js';
import Carousel from '../../components/carousel/index.js';
import { Pricing, CardContainer } from './styled.js';
import { FaRegPaperPlane } from 'react-icons/fa';
import { TbTargetArrow } from 'react-icons/tb';
import { FaPlaneUp, FaRocket } from 'react-icons/fa6';
import { FaCrown } from "react-icons/fa";
import { GiFlyingTarget } from "react-icons/gi";

const cardData = [
  {
    icon: FaRegPaperPlane,
    title: 'Starter',
    price: '49.90',
    features: [
      { label: 'Storage', value: '1 GB' },
      { label: 'Pages', value: '3' },
      { label: 'Theme', value: '120' },
      { label: 'Google Analytics', value: '' }
    ],
    buttonText: 'This is My',
    buttonIcon: TbTargetArrow
  },
  {
    icon: FaPlaneUp,
    title: 'Advanced',
    price: '99.90',
    features: [
      { label: 'Storage', value: '5 GB' },
      { label: 'Pages', value: '10' },
      { label: 'Theme', value: '200' },
      { label: 'Google Analytics', value: 'Included' }
    ],
    buttonText: 'Go Advanced',
    buttonIcon: TbTargetArrow
  },
  {
    icon: FaRocket,
    title: 'Pro',
    price: '199.90',
    features: [
      { label: 'Storage', value: '50 GB' },
      { label: 'Pages', value: 'Unlimited' },
      { label: 'Theme', value: '500' },
      { label: 'Google Analytics', value: 'Advanced' }
    ],
    buttonText: 'Get Pro',
    buttonIcon: TbTargetArrow
  },
  {
    icon: FaCrown,
    title: 'King',
    price: '259.90',
    features:[
      {label:'Storange', value:'1 TB'},
      {label:'Pages', value:'Unlimited'},
      {label:'Theme',value:'Unlimited'},
      {label:'Google Analytics', value: 'All packs'}
    ],
    buttonText: 'be a king',
    buttonIcon:GiFlyingTarget
  }
];

const Projects = () => {
  return (
    <>
      <Pricing>
        <CardContainer>
          {cardData.map((card, index) => (
            <Card 
              key={index}
              icon={card.icon}
              title={card.title}
              price={card.price}
              features={card.features}
              buttonText={card.buttonText}
              buttonIcon={card.buttonIcon}
            />
          ))}
        </CardContainer>
        <Carousel/>
      </Pricing>
      
    </>
    
  );
}

export default Projects;
