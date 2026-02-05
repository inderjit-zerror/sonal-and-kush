'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const Itinerary = () => {

  useGSAP(()=>{

    gsap.from('.ImgTDcont',{
      yPercent:20,
      opacity:0,
      ease:'none',
      scrollTrigger:{
        trigger:'.ImgTDcont',
        start:'top 90%',
        end:'top 60%',
        scrub:true,
        // markers:true
      }
    })
    gsap.from('.animate1TDIMGANDTEXT',{
      yPercent:20,
      opacity:0,
      ease:'none',
      scrollTrigger:{
        trigger:'.animate1TDIMGANDTEXT',
        start:'top 90%',
        end:'top 60%',
        scrub:true,
        // markers:true
      }
    })
    gsap.from('.animate2TDIMGANDTEXT',{
      yPercent:20,
      opacity:0,
      ease:'none',
      scrollTrigger:{
        trigger:'.animate2TDIMGANDTEXT',
        start:'top 90%',
        end:'top 60%',
        scrub:true,
        // markers:true
      }
    })
    gsap.from('.animate3TDIMGANDTEXT',{
      yPercent:20,
      opacity:0,
      ease:'none',
      scrollTrigger:{
        trigger:'.animate3TDIMGANDTEXT',
        start:'top 90%',
        end:'top 60%',
        scrub:true,
        // markers:true
      }
    })
    gsap.from('.animate4TDIMGANDTEXT',{
      yPercent:20,
      opacity:0,
      ease:'none',
      scrollTrigger:{
        trigger:'.animate4TDIMGANDTEXT',
        start:'top 90%',
        end:'top 65%',
        scrub:true,
        // markers:true
      }
    })
    gsap.from('.animate5TDIMGANDTEXT',{
      yPercent:20,
      opacity:0,
      ease:'none',
      scrollTrigger:{
        trigger:'.animate5TDIMGANDTEXT',
        start:'top 90%',
        end:'top 60%',
        scrub:true,
        // markers:true
      }
    })
    gsap.from('.animate6TDIMGANDTEXT',{
      yPercent:20,
      opacity:0,
      ease:'none',
      scrollTrigger:{
        trigger:'.animate6TDIMGANDTEXT',
        start:'top 90%',
        end:'top 60%',
        scrub:true,
        // markers:true
      }
    })

  },[])

  return (
    <div  className='w-full min-h-screen bg-white flex flex-col relative px-10 overflow-hidden'>
{/* 
      <img src={`/svgs/WeddingDesign.svg`} className=' absolute object-cover object-center top-0 left-0 w-1/4' alt="IMG" />
      <img src={`/svgs/WeddingDesign.svg`} className=' absolute object-cover object-center top-0 right-0 w-1/4 rotate-[90deg]' alt="IMG" /> */}

      {/* Titile */}
      <div className='w-full h-[50vh]  max-sm:h-fit flex justify-center items-center mt-[30vh] max-sm:mt-[10vh] mb-[20vh] max-sm:mb-[10vh] ImgTDcont'>
        <img src={`/svgs/WeddingTitle.svg`} alt="IMG" className=' sm:h-full max-sm:w-full object-cover object-center  ' />
      </div>

      {/* 1 */}
      <div className='w-full h-fit flex max-sm:flex-col max-sm:flex-col-reverse justify-center items-center my-20'>

        {/* left */}
        <div className='w-1/2 h-fit relative flex justify-center max-sm:w-full max-sm:mt-10 '>
          <img src={`/imgs/home/imgH4.webp`} alt="Img" className='w-2/3 max-sm:w-full object-cover object-center' />
          <img src={`/svgs/Day01BG.svg`} alt="Img" className='w-2/3 max-sm:hidden object-cover animate1TDIMGANDTEXT object-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
        </div>

        {/* Right */}
        <div className='w-1/2 h-fit animate2TDIMGANDTEXT max-sm:w-full max-sm:mt-[5vh]'>
          <div className="w-full text-center flex flex-col justify-center items-center px-6 ">
            <p className='Font_YV'>25 March 2026</p>
            <img src={`/svgs/Day01.svg`} alt="img" className='w-1/2 text-[#7b1e24] object-cover object-center my-10 max-sm:my-5' />
            {/* Title */}
            <h3 className="Font_Q text-[#7b1e24] leading-snug">
              MEHENDI AND HALDI
              <br />
              CEREMONY
            </h3>

            {/* Time */}
            <p className="mt-3 Font_YV tracking-wide text-[#7b1e24]">
              4:00 PM
            </p>

            {/* Description */}
            <span className="mt-6 w-1/2 max-sm:w-full text-[18px] leading-[18px] Font_YV tracking-widest capitalize text-gray-500">
              A SERIES OF SACRED CEREMONIES AND JOYFUL
              CELEBRATIONS AS WE BEGIN OUR NEW JOURNEY
              TOGETHER
            </span>

            {/* Button */}
            <div className="mt-10 flex justify-center">
              <Link href={'/venue'} ><button className="group flex items-center gap-3 px-8 py-3 border border-gray-700 rounded-full text-xs tracking-widest transition-all duration-300 hover:bg-[#7b1e24] hover:text-white">
                VIEW DETAILS
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button></Link>
            </div>
          </div>
        </div>

      </div>

      {/* 2 */}
      <div className='w-full h-fit flex max-sm:flex-col max-sm:w-full justify-center items-center my-20 max-sm:my-10'>

        {/* left */}
        <div className='w-1/2 h-fit animate3TDIMGANDTEXT max-sm:w-full'>
          <div className="w-full text-center flex flex-col justify-center items-center px-6 ">
            <p className='Font_YV'>26 March 2026</p>
            <img src={`/svgs/Day02.svg`} alt="img" className='w-1/2 text-[#7b1e24] object-cover object-center my-10 max-sm:my-5' />
            {/* Title */}
            <h3 className="Font_Q text-[#7b1e24] leading-snug uppercase">
             Sangeet
            </h3>

            {/* Time */}
            <p className="mt-3 Font_YV tracking-wide text-[#7b1e24]">
              4:00 PM
            </p>

            {/* Description */}
            <span className="mt-6 w-1/2 max-sm:w-full text-[18px] leading-[18px] Font_YV tracking-widest text-gray-500">
              A SERIES OF SACRED CEREMONIES AND JOYFUL
              CELEBRATIONS AS WE BEGIN OUR NEW JOURNEY
              TOGETHER
            </span>

            {/* Button */}
            <div className="mt-10 flex justify-center">
             <Link href={'/venue'} > <button className="group flex items-center gap-3 px-8 py-3 border border-gray-700 rounded-full text-xs tracking-widest transition-all duration-300 hover:bg-[#7b1e24] hover:text-white">
                VIEW DETAILS
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button></Link>
            </div>
          </div>
        </div>


        {/* Right */}

        <div className='w-1/2 max-sm:w-full h-fit relative flex max-sm:mt-15  justify-center'>
          <img src={`/imgs/home/imgH5.webp`} alt="Img" className='w-2/3 max-sm:w-full object-cover object-center' />
          <img src={`/svgs/Day02BG.svg`} alt="Img" className='w-2/3 max-sm:hidden animate4TDIMGANDTEXT object-cover object-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
        </div>

      </div>

       {/* 3 */}
      <div className='w-full h-fit flex max-sm:flex-col max-sm:flex-col-reverse justify-center items-center mt-20 mb-[30vh] max-sm:mb-[10vh]'>

        {/* left */}
        <div className='w-1/2 h-fit max-sm:w-full relative flex justify-center max-sm:mt-10 '>
          <img src={`/imgs/home/imgH6.webp`} alt="Img" className='w-2/3 max-sm:w-full object-cover object-center' />
          <img src={`/svgs/Day03BG.svg`} alt="Img" className='w-2/3 max-sm:hidden animate5TDIMGANDTEXT object-cover object-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
        </div>

        {/* Right */}
        <div className='w-1/2 max-sm:w-full h-fit animate6TDIMGANDTEXT'> 
          <div className="w-full text-center flex flex-col justify-center items-center px-6 max-sm:mt-10 ">
            <p className='Font_YV'>27 March 2026</p>
            <img src={`/svgs/Day03.svg`} alt="img" className='w-1/2 text-[#7b1e24] object-cover object-center my-10 max-sm:my-5' />
            {/* Title */}
            <h3 className="Font_Q text-[#7b1e24] leading-snug">
              MEHENDI AND HALDI
              <br />
              CEREMONY
            </h3>

            {/* Time */}
            <p className="mt-3 Font_YV tracking-wide text-[#7b1e24]">
              4:00 PM
            </p>

            {/* Description */}
            <span className="mt-6 w-1/2 text-[18px] max-sm:w-full leading-[18px] Font_YV tracking-widest text-gray-500">
              A SERIES OF SACRED CEREMONIES AND JOYFUL
              CELEBRATIONS AS WE BEGIN OUR NEW JOURNEY
              TOGETHER
            </span>

            {/* Button */}
            <div className="mt-10 flex justify-center">
              <Link href={'/venue'} ><button className="group flex items-center gap-3 px-8 py-3 border border-gray-700 rounded-full text-xs tracking-widest transition-all duration-300 hover:bg-[#7b1e24] hover:text-white">
                VIEW DETAILS
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button></Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Itinerary
