import React from 'react'
import { Box } from '@mui/material'

import { text } from '../../util/contants'

const styles = {
  footer: { w: '100vw', p: 2, bgcolor: '#00705D', textAlign: 'center' }
}

const Footer = () => {
  return <Box sx={styles.footer}>{text.footer}</Box>
}

export default Footer
