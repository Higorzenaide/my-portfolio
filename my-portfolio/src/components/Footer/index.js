import React from 'react'

import {
    Nav,
    FooterContainer,
    Left,
    Right,
    Location,
    P,
    Phone,
    Email,
    Social} from './styled.js'

import { FaMapLocation } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";




const Footer = () => {
  return (
    <Nav>
        <FooterContainer>
            <Left>
                <Location>
                    <FaMapLocation size={25} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <P>Sumaré - SP</P>
                    </div>
                </Location>

                <Phone>
                    <FaWhatsapp size={25} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <P>+55 &#40; 19 &#41; 98406-6526</P>
                    </div>
                </Phone>

                <Email>
                    <PiMicrosoftOutlookLogoFill size={25} style={{color:"#fff", marginRight: "2rem"}}/>

                    <div>
                        <P>zenaidehigor@gmail.com</P>
                    </div>

                </Email>
            </Left>

            <Right>
                    <h4>About the WebSite</h4>
                    <h6>the site was created to showcase my personal projects, 
                        and training in programming, all directors reserved.</h6>
                
                        <Social>
                            <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={25} />
                            </a>
                            <a href="https://github.com/Higorzenaide" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={25} />
                            </a>
                            <a href="https://w.app/STQ3Im" target="_blank" rel="noopener noreferrer">
                                <FaWhatsappSquare size={25} />
                            </a>
                        </Social>

            </Right>
        </FooterContainer>
    </Nav>
  )
}

export default Footer