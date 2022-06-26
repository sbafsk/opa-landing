import { Box } from '@mui/material'
import React from 'react'

import { text } from '../../util/contants'

const styles = { footer: { h: 10, w: '100vw', p: 5, bgcolor: '#00DDBD' } }

const Footer = () => {
  return <Box sx={styles.footer}>{text.footer}</Box>
}

export default Footer
