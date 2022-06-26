import React from 'react'
import { Box, Typography } from '@mui/material'

import amigosImage from '../../assets/images/amigos_opa.png'
import plantaMundo from '../../assets/images/planta_mundo.svg'
import lampara from '../../assets/images/lampara_opa.svg'
import plantasBase from '../../assets/images/plantas_base_opa.png'
import plantasDerecha from '../../assets/images/plantas_derecha_opa.png'
import plantasIzquierda from '../../assets/images/plantas_izquierda_opa.png'
import { text } from '../../util/contants'

const sx = {
  box: { display: 'flex', p: 16, fontSize: '36px' },
  text: {
    fontSize: 36,
    lineHeight: '140%',
    fontWeight: 800,
    color: '#00705D',
    alignSelf: 'center',
    ml: 4
  },
  iconBox: { mx: 10 }
}

const Objetivos = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={sx.box}>
        <img
          loading="lazy"
          src={amigosImage}
          alt="amigos opa"
          width={'450px'}
        />
        <Typography sx={sx.text}>{text.first}</Typography>
      </Box>
      <Box sx={sx.box}>
        <Typography sx={sx.text}>{text.second}</Typography>
        <Box sx={sx.iconBox}>
          <img
            loading="lazy"
            src={plantaMundo}
            alt="planta mundo"
            width={'240px'}
          />
        </Box>
      </Box>
      <Box sx={sx.box}>
        <Box sx={sx.iconBox}>
          <img loading="lazy" src={lampara} alt="lampara" width={'140px'} />
        </Box>
        <Typography sx={sx.text}>{text.third}</Typography>
      </Box>
      <img
        loading="lazy"
        src={plantasBase}
        alt="lampara"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          marginBottom: '-60px',
          zIndex: '-10'
        }}
      />
      <img
        loading="lazy"
        src={plantasDerecha}
        alt="lampara"
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
      <img
        loading="lazy"
        src={plantasIzquierda}
        alt="lampara"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '20%',
          marginTop: '-40px',
          zIndex: '-10'
        }}
      />
    </Box>
  )
}

export default Objetivos
