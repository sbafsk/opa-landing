import React from 'react'
import { Box, Slide, Typography } from '@mui/material'

import amigosImage from '../../assets/images/amigos_opa.png'
import plantaMundo from '../../assets/images/planta_mundo.svg'
import lampara from '../../assets/images/lampara_opa.svg'
import plantasBase from '../../assets/images/plantas_base_opa.png'
import plantasDerecha from '../../assets/images/plantas_derecha_opa.png'
import plantasIzquierda from '../../assets/images/plantas_izquierda_opa.png'
import instagram from '../../assets/images/instagram_opa_2.svg'
import { text, urls } from '../../util/contants'
import { useScroll } from '../Navbar/useScroll'

const sx = {
  box: {
    display: 'flex',
    direction: { md: 'row', sm: 'column', xs: 'column' },
    px: 16,
    py: 8,
    fontSize: '36px'
  },
  text: {
    fontSize: 36,
    lineHeight: '140%',
    fontWeight: 800,
    color: (theme) => theme.pallete.primary.main,
    alignSelf: 'center',
    ml: 4
  },
  iconBox: { mx: 10 }
}

const Objetivos = () => {
  const [scroll] = useScroll()

  const startAnimation = scroll > 500 && scroll < 1800

  const startAnimationBottom = scroll > 1300

  return (
    <Box sx={{ position: 'relative' }} name="objetives">
      <Box sx={sx.box}>
        <img src={amigosImage} alt="amigos opa" width={'450px'} />
        <Typography sx={sx.text}>{text.first}</Typography>
      </Box>
      <Box sx={sx.box}>
        <Typography sx={sx.text}>{text.second}</Typography>
        <Box sx={sx.iconBox}>
          <img src={plantaMundo} alt="planta mundo" width={'240px'} />
        </Box>
      </Box>
      <Box sx={sx.box}>
        <Box sx={sx.iconBox}>
          <img src={lampara} alt="lampara" width={'140px'} />
        </Box>
        <Typography sx={sx.text}>{text.third}</Typography>
      </Box>
      <Box sx={{ ...sx.box, flexDirection: 'column', alignItems: 'center' }}>
        <a href={urls.instagram} target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram" width={'160px'} />{' '}
        </a>

        <Typography
          sx={{ ...sx.text, fontFamily: 'Amatic SC, cursive', fontSize: 66 }}
        >
          Seguinos!
        </Typography>
      </Box>
      <Slide direction="up" in={startAnimationBottom} timeout={1000}>
        <img
          src={plantasBase}
          alt="plantas base"
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            marginBottom: '-60px',
            zIndex: '-10'
          }}
        />
      </Slide>
      <Slide direction="left" in={startAnimation} timeout={2000}>
        <img
          src={plantasDerecha}
          alt="plantas derecha"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '20%',
            marginTop: '-40px',
            zIndex: '-10'
          }}
          width="20%"
        />
      </Slide>
      <Slide direction="right" in={startAnimation} timeout={2000}>
        <img
          src={plantasIzquierda}
          alt="plantas izquierda"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '20%',
            marginTop: '-40px',
            zIndex: '-10'
          }}
        />
      </Slide>
    </Box>
  )
}

export default Objetivos
