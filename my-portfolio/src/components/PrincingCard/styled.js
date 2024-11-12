import	styled from 'styled-components'

export const CardContent = styled.div`
    color: #fff;
    border: 1px solid #eee;
    text-align: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius:10px;

    .TipePlan {
        font-weight: bold;
        margin-top: 8px; /* Espaço entre o ícone e o título */
    }

    h2 {
        margin-top: 16px; /* Espaço entre o título e o preço */
    }
`

export const Button = styled.button`
    margin-top:1rem;
    background-color: #ff6b6b; /* Cor de fundo do botão */
    color: #fff; /* Cor do texto */
    padding: 0.75rem 1.5rem; /* Espaçamento interno */
    border: none;
    border-radius: 5px; /* Borda arredondada */
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Espaço entre o texto e o ícone */
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: green; /* Cor de fundo ao passar o mouse */
        transform: scale(1.05); /* Leve aumento no tamanho ao passar o mouse */
    }

    &:active {
        transform: scale(0.98); /* Leve redução no tamanho ao clicar */
    }
`