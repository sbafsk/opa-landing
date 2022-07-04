import React from 'react'
import { Box, IconButton } from '@mui/material'
import { Instagram as InstagramIcon } from '@mui/icons-material'

import { text, urls } from '../../util/contants'

const styles = {
  footer: {
    w: '100vw',
    py: 1,
    background: (theme) => theme.pallete.primary.main,
    textAlign: 'center',
    color: (theme) => theme.pallete.secondary.main
  }
}

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      {text.footer}
      <IconButton
        href={urls.instagram}
        target="_blank"
        size="small"
        sx={{ ml: 2 }}
      >
        <InstagramIcon
          sx={{ color: (theme) => theme.pallete.secondary.main }}
        />
      </IconButton>
    </Box>
  )
}

export default Footer
