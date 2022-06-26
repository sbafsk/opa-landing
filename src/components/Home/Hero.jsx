import React from 'react'
import { Box, Typography } from '@mui/material'
import { Background, Parallax } from 'react-parallax'

import background from '../../assets/images/bg_hero.jpg'
import instaButton from '../../assets/images/instagram_opa_1.svg'
import { text } from '../../util/contants'

const styles = {
  heroBox: {
    p: 10,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    h1: {
      color: '#FFF'
    }
  },
  heroImage: {
    width: '100vw',
    opacity: 0.75
  }
}

const Hero = () => {
  return (
    <Parallax strength={150}>
      <Background>
        <img
          loading="lazy"
          src={background}
          alt="hero background image"
          style={styles.heroImage}
        />
      </Background>

      <Box sx={styles.heroBox} id="hero">
        <Typography
          variant="h1"
          sx={{ fontFamily: '"Amatic SC", cursive', fontWeight: 'bold' }}
        >
          {text.hero}
        </Typography>
        <a
          alt="OPA Instagram"
          href="https://www.instagram.com/opa_uy/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            loading="lazy"
            src={instaButton}
            alt="OPA Instagram"
            width={'80px'}
          />
        </a>
      </Box>
    </Parallax>
  )
}

export default Hero
