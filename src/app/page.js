import React from 'react'
import Navbar from '@/components/Navbar/Navbar.jsx'
import Hero from '@/components/Hero.jsx'
import Clients from '@/components/Clients.jsx'
import Featured from '@/components/Featured.jsx'
import OurServices from '@/components/OurServices.jsx'
const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Featured />
      <OurServices />
    </>
  )
}

export default page