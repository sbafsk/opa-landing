import React from 'react'

import {
  Hero,
  Objetivos,
  Equipo,
  Contacto,
  Footer
} from '../../components/Home'
import { Navbar } from '../../components/Navbar'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Objetivos />
      <Equipo />
      <Contacto />
      <Footer />
    </>
  )
}
