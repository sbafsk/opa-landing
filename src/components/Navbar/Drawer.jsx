import React from 'react'
import { Box, SwipeableDrawer } from '@mui/material'

import { NavItems } from './NavItems'

export const Drawer = ({ isOpen, open, close }) => {
  return (
    <SwipeableDrawer
      anchor={'right'}
      open={isOpen}
      onClose={close}
      onOpen={open}
    >
      <Box sx={{ width: 250 }} role="presentation" onClick={close}>
        <NavItems direction={'column'} />
      </Box>
    </SwipeableDrawer>
  )
}
