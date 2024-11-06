import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 5%;
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
            width:90%;
            height:80vh;
            background: rgba(0,0,0,0.9);
            position: absolute;
            top:80%;
            left: -100%;
            z-index:-3;
            transition: z-index 0s 0.3s; /* Para controlar o z-index durante a animação */
            border-radius:10px;
            border: 1px solid #fff;
        }

        .nav-menu.active, .MHamburguer-container{
            animation: ${slideIn} 0.3s ease-in-out forwards; /* Aplica a animação */
            z-index: 1; /* Muda o z-index quando o menu está ativo */
            transition: z-index 0s; /* Z-index instantâneo ao iniciar a animação */
        }
        
        ul{
            gap:10px;
        }

        .nav-menu li {
            width: 40%;
            height: 10%;
            font-size: 2rem;
            border: 1px solid #ccc;
            text-align: center;
            border-radius: 10px;
            overflow: hidden; /* Para garantir que o conteúdo do link não ultrapasse */
        }

        .nav-menu li:hover{
            background: #ccc;
            cursor: pointer;
            transform: scale(0.9);
        }

        .nav-menu a {
            display: inline-block; /* Flexbox para centralizar o conteúdo */
            align-items: center; /* Alinha verticalmente ao centro */
            justify-content: center; /* Alinha horizontalmente ao centro */
            width: 100%;
            height: 100%;
            text-decoration: none; /* Remove o sublinhado do link */
            
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




