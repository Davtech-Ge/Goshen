import React from 'react'
import Hero from '../components/Hero'
import BoxStyles from '../components/BoxStyles'
import Cluster from '../components/Cluster'
import AboutUS from '../components/AboutUS'

const Home = () => {
  return (
    <main className='w-full min-h-screen'>
    <Hero />
    <BoxStyles />  
    <Cluster />
    <AboutUS />
    </main>
  )
}

export default Home