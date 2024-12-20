
import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle `

*{
    margin:0;
    padding:0;
    outline: none;
    box-sizing: border-box;
    font-family: "Outfit", sans-serif;
    
}

body{

    background:#000;

}

h1,h4,p,a{
    color:#fff;
    text-decoration:none;

}

ul{

    list-style-type:none;
}

.btn{
    padding:12px 32px;
    font-size: 1rem;
    text-transform: uppercase;
    background: rgb(248,217,15);
    color:#222;
    border: 1px solid #fff;
    font-weight: 600;
    cursor: pointer;
}

.btn-light{

    background: transparent;
    color:#fff
}

.btn:hover{

    background: transparent;
    color:#fff;
    transition:0.3s;

}

`
