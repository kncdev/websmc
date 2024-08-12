import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'

function Build() {
  const listText=[
    {text:'Web Developer'},
    {text:'Mobile App Development'},
    {text:'UI Design'},
    {text:'3D Design'},
    {text:'Digital Content'}
    ];
    const listText2=[
      {text:'Our Work'},
      {text:'Our Work'},
      {text:'Our Work'},
      {text:'Our Work'},
      {text:'Our Work'}
    ];
    const [cardAnim1, setIsCardAnim1] = useState(false);
    const [cardAnim2, setIsCardAnim2] = useState(false);

    const toggleCardAnim1 = () => {
        setIsCardAnim1(!cardAnim1);
    };
    const toggleCardAnim2 = () => {
        setIsCardAnim2(!cardAnim2);
    };

  return (
    <>
      <Navbar ns="nv2"/>

    <div className="container min-h-[100vh] p-[2rem] mt-[10rem] bg-white flex flex-col gap-[1rem]">
<a href="/erp-dev">ERP Page</a>
<a href="/web-app-dev">WEB / App Developement Page</a>
<a href="/maintenance">Software Maintenance Page</a>
<a href="/it-consulting">IT Consulting Page</a>
<a href="/custom-solution">Presentation Design Page</a>
<a href="/digital-product-design">Digital Product Design Page</a>
<a href="/custom-solution">Digital Banner Design Page</a>
<a href="/custom-solution">Motion Graphic Page</a>
<a href="/custom-solution">Illustration Page</a>
<a href="/copywriting-google-service">Google Service Page</a>
<a href="/ads-service">Social Media Activation & ADS Page</a>
<a href="/seo-service">SEO Page</a>
<a href="/maintenance">Web Maintenance Page</a>
<a href="/copywriting-service">Copywriting Page</a>

    </div>
    </>
  )
}

export default Build
