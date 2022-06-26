import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import QueueAnim from 'rc-queue-anim'
import { Parallax } from 'react-parallax'

import ContactForm from '../Form'
import { text } from '../../util/contants'
import bgImage from '../../assets/images/bg_contact.jpg'

const styles = {
  contactBox: {
    p: 10,
    height: '100vh',
    display: 'flex',
    alignItems: 'center'
  },
  animBox: {
    display: 'flex',
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

const animation = {
  type: {
    queue: 'bottom',
    one: {
      y: '+=30',
      opacity: 0,
      type: 'from',
      ease: 'easeOutQuad'
    }
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
      <Box sx={styles.contactBox}>
        <QueueAnim
          key="text"
          type={animation.type.queue}
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          style={styles.animBox}
        >
          <Box sx={styles.textBox}>
            <Typography variant={'h4'}>{text.contact}</Typography>
            <Divider />
          </Box>
          <Box sx={styles.formBox}>
            <ContactForm />
          </Box>
        </QueueAnim>
      </Box>
    </Parallax>
  )
}
export default Contacto
