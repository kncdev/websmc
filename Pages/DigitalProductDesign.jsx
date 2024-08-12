import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Discus from '../Components/Discus/Discus'
import Footer from '../Components/Footer/Footer'
import HeroServices from '../Components/HeroServices/HeroServices'
import quoteIcon from '../assets/img/quote-icon.svg'
import human from '../assets/img/human.png'
import starTesti from '../assets/img/star-testi.svg'
import CardCover from '../Components/CardCover/CardCover'
import Carousel from '../Components/Carousel/Carousel'
import work1 from '../assets/img/work-1.svg'
import TextAnimation from '../Components/TextAnimation/TextAnimation'
import Button from '../Components/Button/Button'


function DigitalProductDesign() {

  const listText=[
    {text:'Our Work'},
    {text:'Our Work'},
    {text:'Our Work'},
    {text:'Our Work'},
    {text:'Our Work'}
];

  return (
    <>
       <Navbar ns='nv1'/>

       <section className="section-services-smc w-full xl:px-0 px-4 bg-[#3747FF]">
        <div className="xl:container mx-auto">
          <HeroServices 
          title="Digital Product Design"
          bgImg="bg-[url('../src/assets/img/bg-service.png')]"
          ctaText="Lets’s discuss"
          ctaLink="#cta"
          projectDone="100+"
          established="2Y"
          />
        </div>
      </section>

      <section className="section- w-full xl:px-0 px-4">
        <div className="xl:container mx-auto">
          <div className="-content_wrapper">
            <div className="-start_content"></div>
            <div className="-mid_content"></div>
            <div className="-end_content"></div>
          </div>
        </div>
      </section>


      <section className='section-text-animation w-full'>
        <div className="text-animation_wrapper">
          <TextAnimation 
            textItems={listText}
            boxClass="animation-text-box-1"
            ts="c1"
            />
        </div>
     </section>

     <section className="section-our-work w-full xl:px-0 px-4 background-primary">
      <div className="xl:container mx-auto">
        <div className="our-work-content_wrapper bg-[url('../src/assets/img/bg-work.svg')] bg-cover bg-center bg-no-repeat pt-[2.188rem] pb-[5.938rem] flex flex-col">
          <div className="our-work-start_content w-full max-w-[71.25rem] mx-auto flex flex-col xl:flex-row xl:gap-[5rem] gap-[1rem]">
            <h3 className='text-color-alternate text-[2rem]'>Our lastest work</h3>
            <div className="our-work-start_desk flex flex-col md:flex-row gap-[2.5rem]">
              <CardCover selectCard="cc3" bg="bg-[white]">
                <p className='text-black font-bold leading-4 text-[0.75rem] w-full max-w-[31.875rem]'>Business challenges are tough, but we will be committed to helping you find themthe best technology solutions for their business growth</p>
              </CardCover>
              <div className="block"><Button btn="btn1" to='#' className='btn-primary-smc'>RECENT WORKS</Button></div>
            </div>
          </div>
          <div className="our-work-end_content text-color-alternate">
            <Carousel cs='cwork'>
              <div className="our-work-content_slide flex justify-center sm:flex-row flex-col sm:gap-[3.375rem] py-[2.625rem]">
                <div className="slide-work_img w-full max-w-[30.875rem]"><img src={work1} alt="" /></div>                
                <div className="slide-work_detail flex flex-col gap-[2.5rem] w-full max-w-[29.125rem] pt-[2.5rem]">
                  <h3>FirLife App</h3>
                  <p className='text-[1.25rem]'>A useful application to assist users in carrying out sports with tracking features during exercise. Apart from that, there is also a weekly user report while exercising using this application</p>
                </div>                
              </div>
              <div className="our-work-content_slide flex justify-center sm:flex-row flex-col sm:gap-[3.375rem] py-[2.625rem]">
                <div className="slide-work_img w-full max-w-[30.875rem]"><img src={work1} alt="" /></div>                
                <div className="slide-work_detail flex flex-col gap-[2.5rem] w-full max-w-[29.125rem] pt-[2.5rem]">
                  <h3>FirLife App</h3>
                  <p className='text-[1.25rem]'>A useful application to assist users in carrying out sports with tracking features during exercise. Apart from that, there is also a weekly user report while exercising using this application</p>
                </div>                
              </div>
              <div className="our-work-content_slide flex justify-center sm:flex-row flex-col sm:gap-[3.375rem] py-[2.625rem]">
                <div className="slide-work_img w-full max-w-[30.875rem]"><img src={work1} alt="" /></div>                
                <div className="slide-work_detail flex flex-col gap-[2.5rem] w-full max-w-[29.125rem] pt-[2.5rem]">
                  <h3>FirLife App</h3>
                  <p className='text-[1.25rem]'>A useful application to assist users in carrying out sports with tracking features during exercise. Apart from that, there is also a weekly user report while exercising using this application</p>
                </div>                
              </div>
            </Carousel>
          </div>
        </div>
      </div>
     </section>


      <section className="section-testimonial">
      <div className="xl:container xl:px-0 px-4 mx-auto">
        <div className="testimonial-content_wrapper text-black w-full max-w-[59.313rem] mx-auto flex flex-col gap-[2.813rem] lg:p-[5rem_0_6.25rem] p-[2.5rem]">
          <div className="testimonial-start_content flex flex-col gap-[1.125rem] text-center">
            <p className='md:text-[1.5rem] font-bold'>Testimonial</p>
            <h3 className='md:text-[2.5rem] text-[1.5rem] text-black'>From our clients for us</h3>
          </div>
          <div className="testimonial-end_content flex flex-col gap-[2.938rem]">
            <div className="testimonial-card_wrapper flex flex-col gap-[2.813rem]">
              <CardCover selectCard='cc4'>
                  <div className="card-testimonial flex flex-col gap-[1.875rem]">
                      <div className="icon-quote"><img src={quoteIcon} alt="" /></div>
                      <p className='font-bold sm:text-start text-center'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                      <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-[1.875rem]">
                          <div className="client-testimonial flex flex-nowrap gap-[1.5rem]">
                              <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                              <div className="client-testimonial-detail flex flex-col gap-[0.313rem]">
                                  <h6 className='m-0'>Marc Andre</h6>
                                  <span className='text-gray-400 text-[12px]'>CEO WARUNG PINTAR</span>
                              </div>
                          </div>
                          <div className="client-feedback flex sm:flex-row flex-col gap-[0.313rem] items-center">
                              <h4 className="m-0">5.0</h4>
                              <div className="star-point flex flex-nowrap items-center">
                                  <img src={starTesti} alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
              </CardCover>
              <CardCover selectCard='cc4'>
                  <div className="card-testimonial flex flex-col gap-[1.875rem]">
                      <div className="icon-quote"><img src={quoteIcon} alt="" /></div>
                      <p className='font-bold sm:text-start text-center'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                      <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-[1.875rem]">
                          <div className="client-testimonial flex flex-nowrap gap-[1.5rem]">
                              <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                              <div className="client-testimonial-detail flex flex-col gap-[0.313rem]">
                                  <h6 className='m-0'>Marc Andre</h6>
                                  <span className='text-gray-400 text-[12px]'>CEO WARUNG PINTAR</span>
                              </div>
                          </div>
                          <div className="client-feedback flex sm:flex-row flex-col gap-[0.313rem] items-center">
                              <h4 className="m-0">5.0</h4>
                              <div className="star-point flex flex-nowrap items-center">
                                  <img src={starTesti} alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
              </CardCover>
              <CardCover selectCard='cc4'>
                  <div className="card-testimonial flex flex-col gap-[1.875rem]">
                      <div className="icon-quote"><img src={quoteIcon} alt="" /></div>
                      <p className='font-bold sm:text-start text-center'>“Smart Multi Creative is very organized and very easy to work with and very friendly so it is easy to understand. very easy and fast steps in the work stage.”</p>
                      <div className="footer-testimonial flex sm:justify-between justify-center flex-wrap gap-[1.875rem]">
                          <div className="client-testimonial flex flex-nowrap gap-[1.5rem]">
                              <div className="client-testimonial-img w-[50px] h-[50px] overflow-hidden"><img src={human} alt="" className='w-[50px] h-[50px]' /></div>
                              <div className="client-testimonial-detail flex flex-col gap-[0.313rem]">
                                  <h6 className='m-0'>Marc Andre</h6>
                                  <span className='text-gray-400 text-[12px]'>CEO WARUNG PINTAR</span>
                              </div>
                          </div>
                          <div className="client-feedback flex sm:flex-row flex-col gap-[0.313rem] items-center">
                              <h4 className="m-0">5.0</h4>
                              <div className="star-point flex flex-nowrap items-center">
                                  <img src={starTesti} alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
              </CardCover>
            </div>
          </div>
        </div>
      </div>
     </section>

       <Discus/>
       <Footer/>
    </>
  )
}

export default DigitalProductDesign