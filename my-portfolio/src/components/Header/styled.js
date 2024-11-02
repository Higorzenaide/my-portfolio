import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
`;

export const Nav = styled.nav.attrs(({ color }) => ({
    color: color ? 'true' : undefined
}))`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position:fixed;
    width:100%;
    height:90px;
    z-index:10;
    background-color: ${({ color }) => (color === 'true' ? 'rgb(0,0,0,0.85)' : 'transparent')};
    ul{
        display: flex;
    }

    li{
        padding:0 1rem;
    }

    a{
        font-size: 1.2rem;
        font-weight:500;
    }

    .MHamburguer-container{
            display:none;
    }

    @media screen and (max-width: 1040px){
        
        .nav-menu{
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100vh;
            background: rgba(0,0,0,0.9);
            position: absolute;
            top:0;
            left: -100%;
            z-index:-3;
            transition: z-index 0s 0.3s; /* Para controlar o z-index durante a animação */
        }

        .nav-menu.active, .MHamburguer-container{
            animation: ${slideIn} 0.3s ease-in-out forwards; /* Aplica a animação */
            z-index: 1; /* Muda o z-index quando o menu está ativo */
            transition: z-index 0s; /* Z-index instantâneo ao iniciar a animação */
        }
        

        .nav-menu li{
            padding: 1rem 0;
        }

        .nav-menu li{
            font-size: 2rem;
        }

        .MHamburguer-container{
            display:initial;
        }

        .MHamburguer-icon{
            cursor: pointer;
        }

        .MHamburguer-icon:hover{
            transform: scale(1.5);
        }

        .MHamburguer-close{
            z-index: 3;
            cursor: pointer;
        }

        .MHamburguer-close:hover{
            transform: scale(1.5);
        }

    }


`;




