import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

function About() {
  const navItems=[
    {name:'Home', path:'/'},
    {name:'About', path:'/about'}
  ]
  return (
    <div>
       <Navbar
          brandName="MyBrand"
          imageSrcPath="/path/to/logo.png"
          navItems={navItems}
        />
    </div>
  )
}

export default About
