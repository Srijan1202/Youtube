import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const buttons = ['Home', 'About', 'Services', 'Contact', 'Blog', 'Careers', 'Events', 'Testimonials', 'FAQs', 'Gallery', 'Portfolio', 'Team', 'Pricing', 'Services', 'Contact', 'Blog', 'Careers', 'Events', 'Testimonials', 'FAQs', 'Gallery', 'Portfolio', 'Team', 'Pricing']
  return (
    <div className='flex  overflow-x-scroll w-full px-4'> 
        {buttons.map((button,index) => <Button key={index} name={button}/> )}
    </div>
  )
}

export default ButtonList
