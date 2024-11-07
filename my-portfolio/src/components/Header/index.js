import React, { useState, useEffect } from 'react';
import { Nav } from './styled';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { MdCloseFullscreen } from "react-icons/md";

const Header = () => {
    const [seeClose, setClose] = useState(true);
    const [color, setColor] = useState(false);
    const [pageSelected, setPageSelected] = useState('');
    const location = useLocation();

    const handleClick = () => {
        setClose(!seeClose);
        setPageSelected(location.pathname); // Atualiza pageSelected com o pathname atual
    };

    const changeColor = () => {
        setColor(window.scrollY >= 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    useEffect(() => {
        setPageSelected(location.pathname); // Atualiza pageSelected quando a rota mudar
    }, [location]);

    return (
        <Nav color={color}>
            <Link to="/"> <h1>Portfolio.</h1></Link>

            <ul className={seeClose ? "nav-menu" : "nav-menu active"}>
                <li>
                    <Link
                        to="/"
                        onClick={handleClick}
                        className={pageSelected === '/' ? "selected" : ""}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        onClick={handleClick}
                        className={pageSelected === '/about' ? "selected" : ""}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/projects"
                        onClick={handleClick}
                        className={pageSelected === '/projects' ? "selected" : ""}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        onClick={handleClick}
                        className={pageSelected === '/contact' ? "selected" : ""}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            <div className='MHamburguer-container'>

                {seeClose ? (
                    <MdOutlineMenu className='MHamburguer-icon' size={20} style={{ color: "#fff" }} onClick={handleClick} />
                ) : (
                    <MdCloseFullscreen className='MHamburguer-close' size={20} style={{ color: "#fff" }} onClick={handleClick} />
                )
                }

            </div>

        </Nav>
    )
}

export default Header