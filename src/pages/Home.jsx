import React from 'react'
import Navbar from '../components/shared/Navbar'
import Hero from '../components/ui/Home/Hero'
import Services from '../components/Services/Services'
import Menu from '../components/Menu'

export default function Home() {
  return (
    <div>
      <Navbar />
     <Hero />
     <Services />
     <Menu />
    </div>
  )
}
