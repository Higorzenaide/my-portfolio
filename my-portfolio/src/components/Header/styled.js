import styled from "styled-components";


export const Nav = styled.nav`

    background: #ccc;
    padding: 20px;
    display: flex;
    align-items:center;
    justify-content:space-evenly ;

    a{
        color: #fff;
        margin: 0 50px 0;
        font-weight: bold;
    }

    @media (max-width: 768px) {
        padding: 10px;
    }

    @media (max-width: 494px) {
        display: flex;
        align-items:center;
        justify-content:space-between ;
        a{
            color: #fff;
            margin: 0;
            font-weight: bold;
        }
    }

`;