import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material'

import plantasBase from '../../assets/images/plantas_base_opa.png'

import { LinkedIn as LinkedInIcon } from '@mui/icons-material'

const styles = {
  cardBox: {
    maxWidth: 345,
    width: { md: '240px', sm: '70%' },
    position: 'relative',
    borderRadius: '10px',
    height: '420px',
    background: '#00DDBD'
  }
}

const Team = ({ name, bio, img, linkedin }) => {
  return (
    <Card sx={styles.cardBox}>
      <CardMedia
        component="img"
        alt="foto del equipo"
        height="200"
        image={img}
      />
      <img
        src={plantasBase}
        alt="plantas base"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          marginBottom: '-10px'
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bio}
        </Typography>
        <IconButton href={linkedin} target="_blank" size="small" sx={{ m: 1 }}>
          <LinkedInIcon />
        </IconButton>
      </CardContent>
    </Card>
  )
}

export default Team
