import styled from 'styled-components'



export const HeroContainer = styled.nav`

    width:100%;
    background-color:rgba(0,0,0,0.5);
    height:60vh;
    position:relative;

    &::before{
        content:"";
        background:url("https://images.unsplash.com/photo-1607706009771-de8808640bcf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
        background-size:cover;
        background-position:center;
        height:100%;
        width:100%;
        position:absolute;
        top:0;
        left:0;
        z-index:-1;
        background-color:#000;
        opacity:0.7;

    }

    h1{
        font-size:2.4rem;
    }

    p{
        font-size:1.4rem;
        text-align:center;
    }

    @media screen and (max-width: 640px){
        h1 {
            font-size:2rem;
        }

        p{
            font-size:1.1rem;
            text-align:center;
        }
    }

`

export const Heading = styled.div`

width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
    

`