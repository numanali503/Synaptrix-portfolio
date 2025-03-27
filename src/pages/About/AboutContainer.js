import React from 'react'
import Hero from '../About/Hero'
import WhyUs from '../home/WhyUs'
import Clients from '../home/Clients'
import MissionVission from './MissionVission'
import CTA from '../home/CTA'

function AboutContainer() {
    return (
        <div>
            <Hero></Hero>
            <MissionVission></MissionVission>
            <WhyUs></WhyUs>
            <Clients></Clients>
            <div className='mt-16'>
                <CTA></CTA>
            </div>
        </div>
    )
}

export default AboutContainer