import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Discus from '../Components/Discus/Discus'
import Footer from '../Components/Footer/Footer'
import HeroServices from '../Components/HeroServices/HeroServices'
import humanAsk from '../assets/img/human-ask.png'
import CardCover from '../Components/CardCover/CardCover'
import waIcon from "../assets/img/wa-icon.svg"
import Faq from '../Components/Faq/Faq'
import Button from '../Components/Button/Button'

function SeoService() {

  const faq=[
    {
      title: 'What service do you provide?',
      details: 'We have many capabilities that are in our services. We have 2 types of capabilities in which there are various services, such as in custom solutions we have ERP Development services, WEB / App Development, Maintenance, IT consulting. In creative solutions we have google service, Sosmed activation, SEO, web maintenance, copywriting, presentation design, digital product design, digital banner design, motion graphics and illustration.'
    },
    {
      title: 'Do you have an example project?',
      details: 'We have many capabilities that are in our services. We have 2 types of capabilities in which there are various services, such as in custom solutions we have ERP Development services, WEB / App Development, Maintenance, IT consulting. In creative solutions we have google service, Sosmed activation, SEO, web maintenance, copywriting, presentation design, digital product design, digital banner design, motion graphics and illustration.'
    },
    {
      title: 'Where should I go if I want to discuss',
      details: 'We have many capabilities that are in our services. We have 2 types of capabilities in which there are various services, such as in custom solutions we have ERP Development services, WEB / App Development, Maintenance, IT consulting. In creative solutions we have google service, Sosmed activation, SEO, web maintenance, copywriting, presentation design, digital product design, digital banner design, motion graphics and illustration.'
    },
    {
      title: 'How long does it take to complete the project',
      details: 'We have many capabilities that are in our services. We have 2 types of capabilities in which there are various services, such as in custom solutions we have ERP Development services, WEB / App Development, Maintenance, IT consulting. In creative solutions we have google service, Sosmed activation, SEO, web maintenance, copywriting, presentation design, digital product design, digital banner design, motion graphics and illustration.'
    },
    {
      title: 'what service do you provide?',
      details: 'We have many capabilities that are in our services. We have 2 types of capabilities in which there are various services, such as in custom solutions we have ERP Development services, WEB / App Development, Maintenance, IT consulting. In creative solutions we have google service, Sosmed activation, SEO, web maintenance, copywriting, presentation design, digital product design, digital banner design, motion graphics and illustration.'
    },
    {
      title: 'What service do you provide?',
      details: 'We have many capabilities that are in our services. We have 2 types of capabilities in which there are various services, such as in custom solutions we have ERP Development services, WEB / App Development, Maintenance, IT consulting. In creative solutions we have google service, Sosmed activation, SEO, web maintenance, copywriting, presentation design, digital product design, digital banner design, motion graphics and illustration.'
    },
  ]


  return (
    <>
       <Navbar ns='nv1'/>

       <section className="section-services-smc w-full xl:px-0 px-4 bg-[#3747FF]">
        <div className="xl:container mx-auto">
          <HeroServices 
          title="SEO <br/> Service"
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
      <section className="section-faq w-full xl:px-0 px-4">
          <div className="xl:container mx-auto">
            <div className="faq-content_wrapper text-black flex flex-col gap-[4.375rem] mx-auto w-full max-w-[72rem]">
              <div className="faq-start_content text-start flex flex-nowrap items-end gap-[1.25rem]">
                <h2>FAQ</h2><p className="text-[1.25rem] font-bold">(Frequently Asked Questions)</p>
              </div>
              <div className="faq-end_content flex md:flex-row flex-col gap-[4rem]">
                <CardCover selectCard='cc4' bg="bg-[#fff]">
                  <div className="flex flex-col gap-[2.5rem] w-full max-w-[19.25rem] mx-auto">
                    <div className="flex flex-col gap-[1.25rem]">
                      <p className="text-[1.875rem] font-bold text-center leading-[2.563rem]">SMC <br /> Public Relations</p>
                      <div className="w-full rounded-[0.625rem] h-[0.563rem] bg-[#144688]"></div>
                      <div className="flex flex-wrap gap-[1.563rem]">
                        <div className="w-[4.188rem] h-[4.188rem] rounded-full overflow-hidden border-[0.25rem] border-[#144688]"><img src={humanAsk} alt="human img" /></div>
                        <div className="flex flex-col gap-[0.313rem]">
                          <div className="text-[1.25rem] font-bold">Andine</div>
                          <div className="text-[0.75rem]">Manager SMC</div>
                        </div>
                      </div>
                      <p className='leading-[1.375rem]'>Hello, I'm Andine, you can discuss or ask about the services we have. We are open if you ask anything</p>
                    </div>
                    <div className='mx-auto'><Button btn="btn2" className='btn-primary-smc'><div className='flex flex-nowrap gap-[1.063rem]'><div>Ask a Quetion</div> <img src={waIcon} alt="" /></div></Button></div>
                  </div>
                </CardCover>
                <div className="flex flex-col gap-[2.5rem] w-full max-w-[49.375rem] mx-auto">
                  <Faq faqItems={faq}/>
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

export default SeoService