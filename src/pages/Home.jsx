import React from 'react'
import Navbar from '../components/shared/Navbar'
import Hero from '../components/ui/Home/Hero'
import Services from '../components/Services/Services'
import Menu from '../components/Menu'
import Gallary from '../components/ui/Home/Gallary'

export default function Home() {
  return (
    <div>
      <Navbar />
     <Hero />
     <Services />
     <Menu />
     <Gallary/>
    </div>
  )
}
