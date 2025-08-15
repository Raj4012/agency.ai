
import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"


const Services = () => {

    const servicesData =[
       {
        title: 'Advertising',
        description:'We turn bold ideas into powerful digital solutions that connect, engage...',
        icon:assets.ads_icon
       },
       {
        title: 'Content-marketing',
        description:'We help you turn your vision into reality-executing your plan with precision and delivering results ',
        icon:assets.marketing_icon
       },
       {
        title: 'Content-writing',
        description:'We turn bold ideas into powerful digital solutions that connect, engage, and elevate',
        icon:assets.content_icon
       },
       {
        title: 'Social media',
        description:'We help you to build a strong online presence and connect with your audience.',
        icon:assets.social_icon
       },

    ]

  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    transition={{staggerChildren:0.2}}

    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />
         <Title title='How can we help ?' description='From strategy to execution, we craft digital solutions that move your bussiness forward.' />
         <div className='grid grid-cols-1 md:grid-cols-2'>
            {servicesData.map((service, index)=>(
                <ServiceCard key={index} service={service} index={index} />
            ))}
         </div>
    </motion.div>
  )
}

export default Services