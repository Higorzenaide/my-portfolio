import React, { useRef } from 'react';
import { Container, CarouselContent, Item, Image, Info, ButtonMore, Buttons } from './styled.js';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import Cars from '../../assets/cars.jpg';
import barber from '../../assets/barbeiro.jpg';
import empresa from '../../assets/empresa.jpg';
import estetic from '../../assets/estetica.jpg';

const Carousel = () => {
    const carousel = useRef(null);

    const HandleLeftClick = (e) => {
        e.preventDefault();
        const scrollWidth = carousel.current.scrollWidth;
        const offsetWidth = carousel.current.offsetWidth;
        const currentScrollLeft = carousel.current.scrollLeft;

        // Se estiver no início, vai para o final
        if (currentScrollLeft <= 0) {
            carousel.current.scrollLeft = scrollWidth - offsetWidth;
        } else {
            carousel.current.scrollLeft -= offsetWidth;
        }
    };

    const HandleRightClick = (e) => {
        e.preventDefault();
        const scrollWidth = carousel.current.scrollWidth;
        const offsetWidth = carousel.current.offsetWidth;
        const currentScrollLeft = carousel.current.scrollLeft;

        // Se estiver no final, vai para o início
        if (currentScrollLeft + offsetWidth >= scrollWidth) {
            carousel.current.scrollLeft = 0;
        } else {
            carousel.current.scrollLeft += offsetWidth;
        }
    };

    const dataInfo = [
        {title: 'Loja de carros', phrase: 'Tenha mais visibilidade para suas vendas', pricing:'500.00'},
        {title: 'Babeiro', phrase: 'Tenha mais visibilidade', pricing:'500.00'},
        {title: 'Cliníca de estética', phrase: 'Consiga mais clientes com um belo site', pricing:'500.00'},
        {title: 'Babeiro', phrase: 'Tenha mais visibilidade', pricing:'500.00'},
        {title: 'Babeiro', phrase: 'Tenha mais visibilidade', pricing:'500.00'},
        {title: 'Babeiro', phrase: 'Tenha mais visibilidade', pricing:'500.00'},
        {title: 'Babeiro', phrase: 'Tenha mais visibilidade', pricing:'500.00'},]

    return (
        <Container>
        <CarouselContent ref={carousel}>
            {[Cars, barber, empresa, estetic, Cars, Cars].map((src, index) => (
                <Item key={index}>
                    <Image src={src} alt='carousel item' />
                    <Info>
                        <span className='title'>{dataInfo[index]?.title || 'Título Padrão'}</span>
                        <span className='phrase'>{dataInfo[index]?.phrase || 'Frase de enfeite'}</span>
                        <span className='pricing'>{dataInfo[index]?.pricing || 'Preço Padrão'}</span>
                        <ButtonMore>Saiba mais</ButtonMore>
                    </Info>
                </Item>
            ))}
        </CarouselContent>

            <Buttons>
                <button className='left' onClick={HandleLeftClick}>
                    <FaAngleDoubleLeft  />
                </button>
                <button className='right' onClick={HandleRightClick}>
                    <FaAngleDoubleRight  />
                </button>
            </Buttons>
        </Container>
    );
};

export default Carousel;
