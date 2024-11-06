import React, { useState } from 'react'
import {HeroContainer } from './styled'
import introImg from '../../assets/intro-bg.jpg'
import { Link  } from 'react-router-dom'

const HeroHome = () => {
  return (
    <HeroContainer>

      <div className='mask'>
          <img className='into-img' src={introImg}
          alt='IntroImg'/>
      </div>

      <div className='content'>
        <p>I´M A FREELANCER</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/projects" className='btn'>Projects</Link>
          <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
      </div>

    </HeroContainer >
  )
}

export default HeroHome