import styled from 'styled-components';

export const Nav = styled.nav`
    width: 100%;
    padding: 6rem 0;
    background-color: rgba(19, 19, 19, 0.8);

    @media screen and (max-width: 640px) {
        padding: 3rem 0;
    }
`;

export const FooterContainer = styled.div`
    max-width: 1140px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    padding: 2rem;
    background: linear-gradient(135deg, #1e1e1e, #3b3b3b); /* Fundo gradiente */
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2); /* Sombra sutil */

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr; /* Alterar para uma coluna */
        text-align: center; /* Centralizar conteúdo */
        padding: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        padding: 1rem;
    }
`;

export const Left = styled.div`
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    color: #d1d1d1;

    @media screen and (max-width: 768px) {
        align-items: center;
    }
`;

export const Right = styled.div`
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    color: #fff;

    h4 {
        font-size: 1.2rem;
        padding-bottom: 0.7rem;
        font-weight: bold;
        color: #e0e0e0;
        border-bottom: 2px solid #575757;
        margin-bottom: 5px;
    }

    h6 {
        font-size: 0.9rem;
        letter-spacing: 1px;
        color: #c1c1c1;
    }

    @media screen and (max-width: 768px) {
        align-items: center;
    }
`;

export const Location = styled.div`
    display: flex;
    margin-bottom: 0.8rem;
    align-items: center;
    color: #aaa;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const P = styled.p`
    line-height: 1.6;
    font-size: 1.1rem;
    color: #dcdcdc;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const Phone = styled.div`
    display: flex;
    margin-bottom: 0.8rem;
    align-items: center;
    color: #aaa;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const Email = styled.div`
    display: flex;
    margin-bottom: 0.8rem;
    align-items: center;
    color: #aaa;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const Social = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
    justify-content: start;

    a {
        color: #d1d1d1;
        transition: color 0.3s ease;

        &:hover {
            color: #1db954;
        }
    }

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;
