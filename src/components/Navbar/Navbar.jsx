import React from 'react'
import { AppBar, Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { Drawer } from './Drawer'
import { NavItems } from './NavItems'
import { useDisclosure } from '../../hooks/useDisclosure'
import logo from '../../assets/images/opa_logo.png'
import { useScroll } from './useScroll'

const Navbar = () => {
  const { isOpen, open, close } = useDisclosure()

  const [scrolled] = useScroll()

  const appBarStyle =
    scrolled < 50
      ? styles.navbarBox
      : { ...styles.navbarBox, ...styles.navbarBoxScroll }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={appBarStyle}>
        <img src={logo} alt="logo" width={'100px'} />

        <NavItems direction={'row'} sx={styles.navbarItems} />

        <IconButton
          onClick={open}
          edge="end"
          aria-label="menu"
          sx={styles.iconButton}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Drawer isOpen={isOpen} open={open} close={close} />
    </Box>
  )
}

const styles = {
  navbarBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: 'none',
    height: 70,
    boxShadow: 'none',
    px: 12,
    position: 'fixed',
    transition: '0.5s'
  },
  navbarBoxScroll: {
    px: 4,
    height: 35,
    background: '#00705D'
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
