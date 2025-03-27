import React from 'react'
import Hero from './Hero'
import About from './About'
import WhyUs from './WhyUs'
import ToolsTechnology from './ToolsTechnology'
import CTA from './CTA'
import Clients from './Clients'
import Testimonial from './Testimonial'

function HomeContainer() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <WhyUs></WhyUs>
      <CTA></CTA>
      <ToolsTechnology></ToolsTechnology>
      <Clients></Clients>
      <Testimonial></Testimonial>
    </div>
  )
}

export default HomeContainer