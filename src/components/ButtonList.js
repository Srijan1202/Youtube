import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const buttons = ['Home', 'About', 'Services', 'Contact', 'Blog', 'Careers', 'Events', 'Testimonials', 'FAQs', 'Gallery', 'Portfolio', 'Team', 'Pricing', 'Services', 'Contact', 'Blog', 'Careers', 'Events', 'Testimonials', 'FAQs', 'Gallery', 'Portfolio', 'Team', 'Pricing']
  return (
    <div className='flex overflow-x-scroll w-[88vw]'> 
        {buttons.map((button) => <Button name={button}/> )}
    </div>
  )
}

export default ButtonList
