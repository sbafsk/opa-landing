import React from 'react'
import { Box, Typography } from '@mui/material'
import { Parallax } from 'react-parallax'

import background from '../../assets/images/bg_hero.jpg'
import instaButton from '../../assets/images/instagram_opa_1.svg'

const Hero = () => {
  return (
    <Parallax
      bgImage={background}
      bgImageStyle={{ width: '100vw', opacity: 0.75 }}
      strength={-250}
      bgImageAlt="hero image"
    >
      <Box sx={sxStyles.heroBox} id="hero">
        <Typography
          variant="h1"
          sx={{ fontFamily: '"AmaticSC"', fontWeight: 'bold' }}
        >
          Sumate a opa y aporta tu <br />
          granito de arena al planeta
        </Typography>
        <a
          alt="OPA Instagram"
          href="https://www.instagram.com/opa_uy/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instaButton} alt="OPA Instagram" width={'80px'} />
        </a>
      </Box>
    </Parallax>
  )
}

const sxStyles = {
  heroBox: {
    paddingTop: 10,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    h1: {
      color: '#FFF'
    }
  }
}

export default Hero
