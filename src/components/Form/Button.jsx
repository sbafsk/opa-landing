import React from 'react'
import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/system'

const CustomButton = styled(MuiButton)(({ theme }) => ({
  color: '#FFF',
  height: '36px',
  borderRadius: '15px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: theme.pallete.secondary.main,
  '&:hover': {
    backgroundColor: theme.pallete.primary.main
  }
}))

const Button = ({ disabled, text }) => {
  return (
    <CustomButton
      type="submit"
      variant="contained"
      disabled={disabled}
      fullWidth
    >
      {text}
    </CustomButton>
  )
}

export default Button
