import React from 'react'
import { AppBar, Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { Drawer } from './Drawer'
import { NavItems } from './NavItems'
import { useDisclosure } from '../../hooks/useDisclosure'
import logo from '../../assets/images/opa_logo.png'

const Navbar = () => {
  const { isOpen, open, close } = useDisclosure()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={sxStyles.navbarBox}>
        <img src={logo} alt="logo" width={'100px'} />

        <NavItems direction={'row'} sx={sxStyles.navbarItems} />

        <IconButton
          onClick={open}
          edge="end"
          aria-label="menu"
          sx={sxStyles.iconButton}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Drawer isOpen={isOpen} open={open} close={close} />
    </Box>
  )
}

const sxStyles = {
  navbarBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: 'none',
    height: 70,
    boxShadow: 'none',
    px: 12,
    position: 'fixed'
  },
  navbarItems: {
    display: { xs: 'none', sm: 'flex' }
  },
  iconButton: {
    ml: 2,
    display: { xs: 'flex', sm: 'none' }
  }
}

export default Navbar
