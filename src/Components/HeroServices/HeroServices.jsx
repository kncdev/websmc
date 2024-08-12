import React from 'react'
import CardCover from '../CardCover/CardCover'
import Button from '../Button/Button'

function HeroServices({bgImg,title,ctaText,ctaLink,projectDone,established}) {
  return (
    <>
       <div className="services-smc-content_wrapper w-full max-w-[76.25rem] mx-auto translate-y-[2rem]">
            <CardCover selectCard="cc13" bg={`bg-[white] ${bgImg} bg-cover bg-center bg-no-repeat`}>
              <div className="services-smc_content flex flex-col md:gap-[3rem] gap-[0.75rem] md:p-[2.5rem] md:pb-[3.5rem] p-[1.5rem]">
                <div className="services-smc-start_content w-full lg:max-w-[45rem] max-w-[20rem]"><h1 className='text-[#00173F] lg:text-[6.25rem] sm:text-[4rem] text-[2.5rem]'>{title}</h1></div>
                <div className="services-smc-mid_content">
                  <div className="block"><Button btn="btn1" to={ctaLink} className='btn-primary-smc'>{ctaText}</Button></div>
                </div>
                <div className="services-smc-end_content flex md:items-center flex-nowrap md:flex-row flex-col md:gap-[1.25rem] gap-[0.75rem] text-[#000]">
                  <div className="project-done flex flex-nowrap items-center gap-[0.625rem]"><h2 className="font-bold md:text-[4.5rem] text-[2rem]">{projectDone}</h2> <p className='font-bold w-full md:max-w-[4.75rem] text-[1.25rem]'>Project Done</p></div>
                  <div className="project-done md:h-full md:min-h-[6.813rem] md:w-[0.813rem] w-full h-[0.813rem] rounded-[1.438rem] bg-[#FFDD60]"></div>
                  <div className="project-done flex flex-nowrap items-center gap-[0.625rem]"><h2 className="font-bold md:text-[4.5rem] text-[2rem]">{established}</h2> <p className='font-bold w-full max-w-[4.75rem] text-[1.25rem]'>Established</p></div>
                </div>
              </div>
            </CardCover>
          </div>
    </>
  )
}

export default HeroServices
