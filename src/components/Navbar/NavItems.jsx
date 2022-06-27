import React from 'react'
import { List, ListItem, Stack } from '@mui/material'
import { Link } from 'react-scroll'

const items = [
  {
    text: 'Inicio',
    to: 'hero'
  },
  {
    text: 'Objetivos',
    to: 'objetives'
  },
  {
    text: 'Nosotros',
    to: 'team'
  },
  {
    text: 'Contacto',
    to: 'contact'
  }
]

export const NavItems = ({ sx, direction, sxItems }) => {
  return (
    <List component={Stack} direction={direction} sx={sx}>
      {items.map((item, i) => {
        return (
          <ListItem
            sx={{
              ...styles.listItem,
              color: '#FFF',
              '&:hover': {
                color: (theme) => theme.pallete.secondary.main
              },
              ...sxItems
            }}
            key={i}
          >
            <Link to={item.to} spy={true} smooth={true} duration={666}>
              {item.text}
            </Link>
          </ListItem>
        )
      })}
    </List>
  )
}

const styles = {
  listItem: {
    fontSize: '14px',
    cursor: 'pointer'
  }
}
