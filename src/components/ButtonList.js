import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const buttons = ['Home', 'About', 'Services', 'Contact', 'Blog', 'Careers', 'Events', 'Testimonials', 'FAQ', 'Gallery', 'Templates', 'Features', 'Shop', 'Pages', 'Elements', 'Typography', 'Blog', 'Portfolio', 'Shop', 'Contact', 'Blog', 'Careers', 'Events', 'Testimonials', 'FAQ', 'Gallery', 'Templates', 'Features', 'Shop', 'Pages', 'Elements', 'Typography', 'Blog', 'Portfolio', 'Shop', 'Contact', 'Blog', 'Careers', 'Events', 'Testimonials', 'FAQ', 'Gallery', 'Templates', 'Features', 'Shop', 'Pages', 'Elements', 'Typography', 'Blog', 'Portfolio', 'Shop', 'Contact', 'Blog', 'Careers', 'Events', 'Testimonials', 'FAQ', 'Gallery', 'Templates', 'Features', 'Shop', 'Pages', 'Elements', 'Typography', 'Blog', 'Portfolio', 'Shop', 'Contact', 'Blog', 'Careers', 'Events', 'Testimonials', 'FAQ', 'Gallery', 'Templates', 'Features', 'Shop', 'Pages', 'Elements', 'Typography', 'Blog', 'Portfolio', 'Shop', 'Contact', 'Blog', 'Careers', 'Events', 'Testimonials', 'FAQ', 'Gallery', 'Templates', 'Features', 'Shop', 'Pages', 'Elements', 'Typography', 'Blog', 'Portfolio', 'Shop', 'Contact', 'Blog', 'Careers', 'Events', 'Testimonials', 'FAQ', 'Gallery', 'Templates', 'Features', 'Shop', 'Pages', 'Elements', 'Typography', 'Blog', 'Portfolio', 'Shop', 'Contact', 'Blog', 'Careers', 'Events', 'Testimonials', 'FAQ', 'Gallery', 'Templates', 'Features', 'Shop', 'Pages', 'Elements', 'Typography', 'Blog', 'Portfolio', 'Shop', 'Contact', 'Blog', 'Careers', 'Events', 'Testimonials', 'FAQ', 'Gallery', 'Templates', 'Features', 'Shop', 'Pages', 'Elements', 'Typography', 'Blog', 'Portfolio', 'Shop', 'Contact', 'Blog', 'Careers', 'Events', 'Testimonials', 'FAQ', 'Gallery', 'Templates', 'Features', 'Shop', 'Pages', 'Elements', 'Typography', 'Blog', 'Portfolio', 'Shop', 'Contact', 'Blog', 'Careers', 'Events', 'Testimonials', 'FAQ',]
  return (
    <div className='flex overflow-x-auto whitespace-nowrap scrollbar-hide '> 
        {buttons.map((button, index) => <Button key={index} name={button}/> )}
    </div>
  )
}

export default ButtonList
