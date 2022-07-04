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
    background: '#00DDBD',
    height: '420px'
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
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {name}
          <IconButton href={linkedin} target="_blank" size="small">
            <LinkedInIcon />
          </IconButton>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bio}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Team
