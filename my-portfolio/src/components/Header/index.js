import React from 'react'
import {Nav} from './styled'
import { HiMiniHome } from "react-icons/hi2";
import { ImExit } from "react-icons/im";
import { FaUser } from "react-icons/fa6";
import { Link  } from 'react-router-dom'
export default function Header(){
    return (
        <Nav>

            <Link to="/" > <HiMiniHome size={15}/>  Home</Link>
            <Link to="/Login" > <FaUser size={15}/> Login</Link>
            <Link to="/afsdfsdf" > <ImExit size={15}/> Sair</Link>


        </Nav>
    )
}