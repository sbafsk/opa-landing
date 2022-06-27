import React from 'react'
import { Box } from '@mui/material'

import Team from '../Team/Card'
import { members } from '../../util/contants'

const styles = {
  teamBox: {
    py: 10,
    background: 'linear-gradient( #00DDBD,#00705D)',
    display: 'flex',
    flexDirection: { md: 'row', sm: 'column' },
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

const Equipo = () => {
  return (
    <Box sx={styles.teamBox} name="team">
      {members.map((t) => (
        <Team key={t.name} {...t} />
      ))}
    </Box>
  )
}
export default Equipo
