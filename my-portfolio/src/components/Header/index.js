import React, { useState, useEffect } from 'react'
import {Nav} from './styled'
import { Link  } from 'react-router-dom'
import { MdOutlineMenu } from "react-icons/md";
import { MdCloseFullscreen } from "react-icons/md";



const Header = () => {

    const [seeClose, setClose] = useState(true)

    const handleClick = () => {
        setClose(!seeClose);
    }

    const [color, setColor] = useState(false)

    const changeColor = () => {
        setColor(window.scrollY >= 100);
    };
    
    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return () =>{
            window.removeEventListener("scroll", changeColor);
        } 
    }, []);


    return (
        <Nav color={color}>

            <Link to="/" >   <h1>Portfolio.</h1></Link>

            <ul className={seeClose ? "nav-menu" : "nav-menu active"}>
                <li><Link to="/" onClick={handleClick}>   Home</Link></li>
                <li><Link to="/about" onClick={handleClick}>  About</Link></li>
                <li><Link to="/projects" onClick={handleClick}>  Projects</Link></li>
                <li><Link to="/contact" onClick={handleClick}>  Contact</Link></li>
            </ul>

            <div className='MHamburguer-container'>

                {seeClose ? (
                    <MdOutlineMenu className='MHamburguer-icon' size={20} style={{color: "#fff"}} onClick={handleClick}/>
                ) : (
                    <MdCloseFullscreen className='MHamburguer-close' size={20} style={{color: "#fff"}} onClick={handleClick}/>
                    )
                }
                
            </div>

        </Nav>
    )
}

export default Header