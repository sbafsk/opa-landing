import React from 'react'
import { Box, IconButton } from '@mui/material'
import { Instagram as InstagramIcon } from '@mui/icons-material'

import { text } from '../../util/contants'

const styles = {
  footer: {
    w: '100vw',
    py: 1,
    bgcolor: '#00705D',
    textAlign: 'center',
    color: '#00DDBD'
  }
}

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      {text.footer}
      <IconButton
        href={'https://www.instagram.com/opa_uy/'}
        target="_blank"
        size="small"
        sx={{ m: 1, ml: 2 }}
      >
        <InstagramIcon />
      </IconButton>
    </Box>
  )
}

export default Footer
