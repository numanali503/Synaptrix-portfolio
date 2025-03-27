import React from 'react'
import Hero from './Hero'
import Details from './Details'
import ServicesCard from './ServicesCard'
import CTA from '../home/CTA'

function ServiceContainer() {
  return (
    <div>
      <Hero></Hero>
      <Details></Details>
      <ServicesCard></ServicesCard>
      <CTA></CTA>
    </div>
  )
}

export default ServiceContainer