import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { Parallax } from 'react-parallax'

import ContactForm from '../Form'
import { text } from '../../util/contants'
import bgImage from '../../assets/images/bg_contact.jpg'

const styles = {
  contactBox: {
    p: 10,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  textBox: {
    p: 5,
    mt: 8,
    width: '60%',
    color: '#FFF'
  },
  formBox: {
    width: '30%'
  }
}

const Contacto = () => {
  return (
    <Parallax
      bgImage={bgImage}
      bgImageStyle={{ width: '100vw', opacity: 0.75 }}
      strength={150}
      bgImageAlt="hero image"
    >
      <Box sx={styles.contactBox} name="contact">
        <Box sx={styles.textBox}>
          <Typography variant={'h4'}>{text.contact}</Typography>
          <Divider />
        </Box>
        <Box sx={styles.formBox}>
          <ContactForm />
        </Box>
      </Box>
    </Parallax>
  )
}
export default Contacto
