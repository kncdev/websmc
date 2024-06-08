import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Button from '../Components/Button/Button'
import TextAnimation from '../Components/TextAnimation/TextAnimation'

function Home() {
    const navItems=[
        {name:'Home', path:'/'},
        {name:'About', path:'/about'}
    ]
    const listText=[{text:'Web Developer'},{text:'Mobile App Development'},{text:'UI Design'},{text:'3D Design'},{text:'Digital Content'}]
  return (
    <>

        <Navbar
            brandName="MyBrand"
            imageSrcPath="/path/to/logo.png"
            navItems={navItems}
            />

        <div className='bg-smc-1'>
            
            {/* Hero Section */}
            <div className="section min-h-[75vh] xl:px-[4.3rem] px-[1rem] py-[50px] mx-auto xl:container" id="hero-home">
                <div className="columns-1">
                <div className=' max-w-[500px]'>
                    <h2 className=' relative'>The Best <br /> way to grow <br /> your 
                        <div className='bg-white text-black absolute bottom-0 right-0 px-5 border-solid border-2 border-black rounded-[5px] shadow-[0_1.5rem_0_-0.8rem_#00173F]'>Business</div>
                    </h2>
                    <h4 className='py-[2rem]'>Your Cost-effective, Cross-Continental, Digital Innovation Partner</h4>
                    <Button to='#' className='btn-primary-smc ms-0 sm:ms-12'>RECENT WORKS</Button>
                </div>
                </div>
            </div>

            {/* animation text */}

            <TextAnimation 
            textItems={listText}
            boxClass="animation-text-box-1"
            />

        </div>
    </>
  )
}

export default Home
