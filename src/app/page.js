import React from 'react'
import Navbar from '@/components/Navbar/Navbar.jsx'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients.jsx'
import Featured from '@/components/Featured'
import OurServices from '@/components/OurServices'
import Industries from '@/components/Industries.jsx'
import Insights from '@/components/insights'
import Achievments from '@/components/Achievments.jsx'
import Contact from '@/components/Contact.jsx'
import Carriers from '@/components/Carriers.jsx'
import UsersProfile from '@/components/UsersProfile.jsx'
import Footer from '@/components/Footer.jsx'
const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServices />
      <Clients />
      <Featured />
      <Industries />
      <Insights />
      <Achievments />
      <Carriers />
      <UsersProfile />
      <Contact />
      <Footer />
    </>
  )
}

export default page