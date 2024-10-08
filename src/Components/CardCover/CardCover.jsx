import React from 'react'
import './CardCover.css';

function CardCover({selectCard,bg,children,titleCard,textImg}) {
  const cc1=
    <div className="card-cover">
      <div className="rounded-[5px] xl:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] transition-shadow hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
        <div className={`${bg} rounded-[5px] border-[5px] border-black solid`}>
          <div className="card-topbar bg-[#144688] mb-3">
            <div className="circle flex flex-none">
              <span className="bg-red-500 border-black solid border-[2px] rounded-full m-[14px_10px] p-3"></span>
              <span className="bg-yellow-500 border-black solid border-[2px] rounded-full m-[14px_10px] p-3"></span>
              <span className="bg-green-500 border-black solid border-[2px] rounded-full m-[14px_10px] p-3"></span>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  ;
  const cc2=
    <div className="card-cover relative min-h-[350px]">
      <div className={`${bg} absolute w-full h-full z-10 border-[5px] solid border-black rounded-[5px]`}>
        {children}
        <div className="absolute w-full h-24 bg-gradient-to-t from-black to-transparent bottom-0 flex flex-col justify-center "><h4 className="m-0 ps-2">{titleCard}</h4></div>
      </div>
      <div className="bg-[#FCCF08] absolute w-full h-full -right-5 -bottom-5 border-[5px] solid border-black rounded-[5px]"></div>
    </div>
  ;
  const cc3=
    <div className="card-cover">
      <div className="rounded-[5px] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
        <div className={`${bg} rounded-[5px] p-[1.375rem_1.75rem]`}>
          {children}
        </div>
      </div>
    </div>
  ;
  const cc4=
    <div className="card-cover">
      <div className="rounded-[5px] transition-all xl:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
        <div className={`${bg} rounded-[5px] border-[2px] border-black solid p-7`}>
          {children}
        </div>
      </div>
    </div>
  ;
  const cc5=
  <div className="card-cover relative">
    <div className={`${bg} relative z-10 border-[5px] solid border-black rounded-[5px]`}>
      {children}
    </div>
    <div className="translate-y-[-50%] bg-[#FFDD60] mx-auto w-[95%] max-w-[69.5rem] h-[2.5rem] border-[5px] solid border-black rounded-[5px]"></div>
  </div>
  ;
  const cc6=
  <div className="card-cover relative">
  <div className={`${bg} relative w-full h-full z-10 border-[2px] solid border-black rounded-[5px]`}>
    {children}
  </div>
  <div className="bg-[#FFDD60] absolute w-[90%] h-full right-[-0.688rem] top-[0.688rem] border-[2px] solid border-black rounded-[5px]"></div>
</div>
  ;
  const cc7=
  <div className="card-cover relative">
  <div className={`${bg} relative w-full h-full z-10 border-[5px] solid border-black rounded-[5px]`}>
    {children}
  </div>
  <div className="bg-[#FFDD60] absolute w-full h-full right-[-1rem] top-[1rem] border-[5px] solid border-black rounded-[5px]"></div>
</div>
  ;
  const cc8=
    <div className="card-cover">
      <div className="rounded-[5px] transition-all xl:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
       <div className="grid grid-cols-[10%_90%]">
        <div className="bg-[#FFDD60] rounded-s-[5px] border-[2px] border-black solid flex items-center justify-center">
          {/* <div style={{inlineSize:'1px',overflowWrap:'break-word'}} className='font-bold text-[#000] text-[20px]'>Creative <br /> Solution</div> */}
          <img src={textImg} alt="" />
        </div>
        <div className={`${bg} rounded-e-[5px] border-[2px] border-black solid p-7`}>
          {children}
        </div>
       </div>
      </div>
    </div>
  ;
  const cc9=
    <div className="card-cover">
      <div className="rounded-[5px] transition-all xl:shadow-[-20px_20px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[-20px_20px_0px_0px_rgba(0,0,0,1)]">
       <div className="grid grid-cols-[90%_10%]">
        <div className={`${bg} rounded-s-[5px] border-[2px] border-black solid p-7`}>
          {children}
        </div>
        <div className="bg-[#FFDD60] rounded-e-[5px] border-[2px] border-black solid flex items-center justify-center">
          {/* <div style={{inlineSize:'1px',overflowWrap:'break-word'}} className='font-bold text-[#000] text-[20px]'>Creative <br /> Solution</div> */}
          <img src={textImg} alt="" />
        </div>
       </div>
      </div>
    </div>
  ;
  const cc10=
    <div className="card-cover">
      <div className="rounded-[30px] transition-all xl:shadow-[-10px_10px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[-10px_10px_0px_0px_rgba(0,0,0,1)]">
        <div className={`${bg} rounded-[30px] border-[5px] border-white solid p-7`}>
          {children}
        </div>
      </div>
    </div>
  ;

  const cc11=
  <div className="card-cover relative">
  <div className={`${bg} relative z-10 border-[2px] solid border-black rounded-[5px]`}>
    {children}
  </div>
  <div className="bg-[#FFDD60] absolute w-full h-[2rem] right-[-0.313rem] top-[0.313rem] border-[2px] solid border-black rounded-[5px]"></div>
  </div>
  ;

  const cc12=
  <div className="card-cover relative">
  <div className={`${bg} relative w-full h-full z-10 overflow-hidden border-[5px] solid border-black rounded-[1rem]`}>
  <div className="card-topbar bg-[#AFB5FF] border-b-[5px] border-black">
            <div className="circle flex flex-none">
              <span className="bg-red-500 border-black solid border-[2px] rounded-full m-[14px_10px] p-3"></span>
              <span className="bg-yellow-500 border-black solid border-[2px] rounded-full m-[14px_10px] p-3"></span>
              <span className="bg-green-500 border-black solid border-[2px] rounded-full m-[14px_10px] p-3"></span>
            </div>
          </div>
    {children}
  </div>
  <div className="bg-[#FFDD60] absolute w-full h-full right-[-1rem] top-[1rem] border-[5px] solid border-black rounded-[1rem]"></div>
</div>
  ;

  const cc13=
  <div className="card-cover relative">
    <div className={`${bg} relative z-10  rounded-[5px]`}>
      {children}
    </div>
    <div className="translate-y-[-50%] bg-[#000] mx-auto w-[98%] h-[2.5rem] border-[5px] solid border-black rounded-[5px]"></div>
  </div>
  ;

  let ccs;

  if (selectCard === 'cc1') {
    ccs=cc1;
  } else if (selectCard === 'cc2'){
    ccs=cc2;
  } else if (selectCard === 'cc3'){
    ccs=cc3;
  }else if (selectCard === 'cc4'){
    ccs=cc4;
  }else if (selectCard === 'cc5'){
    ccs=cc5;
  }else if (selectCard === 'cc6'){
    ccs=cc6;
  }else if (selectCard === 'cc7'){
    ccs=cc7;
  }else if (selectCard === 'cc8'){
    ccs=cc8;
  }else if (selectCard === 'cc9'){
    ccs=cc9;
  }else if (selectCard === 'cc10'){
    ccs=cc10;
  }else if (selectCard === 'cc11'){
    ccs=cc11;
  }else if (selectCard === 'cc12'){
    ccs=cc12;
  }else if (selectCard === 'cc13'){
    ccs=cc13;
  }
  return (
    <>
      {ccs}
    </>
  )
}

export default CardCover
