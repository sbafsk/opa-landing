import React from 'react'
import { Box } from '@mui/material'

import Team from '../Team/Card'
import { members } from '../../util/contants'

const styles = {
  teamBox: {
    p: 10,
    height: '70vh',
    background: '#00DDBD',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

const Equipo = () => {
  return (
    <Box sx={styles.teamBox}>
      {members.map((t) => (
        <Team key={t.name} {...t} />
      ))}
    </Box>
  )
}
export default Equipo
