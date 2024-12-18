import styled from 'styled-components'

export const HeroContainer = styled.div`

    
    height:100%;
    width:100%;

    .content{
        position:absolute;
        transform:translate(-50%,-50%);
        top:50%;
        left:50%;
        text-align:center;
    }

    .content h1{
        font-size:4rem;
        padding: 0.6rem 0 1.5rem;
    }

    .content p{
        font-size: 1.4rem;
        font-weight:200;
        text-transform:uppercase;
    }

    .content .btn{
        margin: 1rem 0.2rem;
    }
    
    .mask{
        width: 100%;
        height: 100vh;
        position:relative;
    }

    .into-img{
        width:100%;
        height:100%;
        background-size:cover;
        background-position: center;
        object-fit:cover;
    }

    .mask::after{
        content: "";
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        background-color:#000;
        opacity:0.8;
    }

    @media screen and (max-width: 640px){
        .content h1{
            font-size:3rem;
        }

        .content p{
            font-size: 1.4rem;
        }

    }



`