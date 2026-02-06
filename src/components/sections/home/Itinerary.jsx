'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const Itinerary = () => {

  // useGSAP(() => {

  //   gsap.from('.ImgTDcont', {
  //     yPercent: 20,
  //     opacity: 0,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.ImgTDcont',
  //       start: 'top 90%',
  //       end: 'top 60%',
  //       scrub: true,
  //       // markers:true
  //     }
  //   })
  //   gsap.from('.animate1TDIMGANDTEXT', {
  //     yPercent: 20,
  //     opacity: 0,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.animate1TDIMGANDTEXT',
  //       start: 'top 90%',
  //       end: 'top 60%',
  //       scrub: true,
  //       // markers:true
  //     }
  //   })
  //   gsap.from('.animate2TDIMGANDTEXT', {
  //     yPercent: 20,
  //     opacity: 0,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.animate2TDIMGANDTEXT',
  //       start: 'top 90%',
  //       end: 'top 60%',
  //       scrub: true,
  //       // markers:true
  //     }
  //   })
  //   gsap.from('.animate3TDIMGANDTEXT', {
  //     yPercent: 20,
  //     opacity: 0,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.animate3TDIMGANDTEXT',
  //       start: 'top 90%',
  //       end: 'top 60%',
  //       scrub: true,
  //       // markers:true
  //     }
  //   })
  //   gsap.from('.animate4TDIMGANDTEXT', {
  //     yPercent: 20,
  //     opacity: 0,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.animate4TDIMGANDTEXT',
  //       start: 'top 90%',
  //       end: 'top 65%',
  //       scrub: true,
  //       // markers:true
  //     }
  //   })
  //   gsap.from('.animate5TDIMGANDTEXT', {
  //     yPercent: 20,
  //     opacity: 0,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.animate5TDIMGANDTEXT',
  //       start: 'top 90%',
  //       end: 'top 60%',
  //       scrub: true,
  //       // markers:true
  //     }
  //   })
  //   gsap.from('.animate6TDIMGANDTEXT', {
  //     yPercent: 20,
  //     opacity: 0,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.animate6TDIMGANDTEXT',
  //       start: 'top 90%',
  //       end: 'top 60%',
  //       scrub: true,
  //       // markers:true
  //     }
  //   })

  // }, [])

  return (
    <>
      <div className='w-full min-h-screen bg-white flex flex-col relative px-10 overflow-hidden'>
        {/* 
      <img src={`/svgs/WeddingDesign.svg`} className=' absolute object-cover object-center top-0 left-0 w-1/4' alt="IMG" />
      <img src={`/svgs/WeddingDesign.svg`} className=' absolute object-cover object-center top-0 right-0 w-1/4 rotate-[90deg]' alt="IMG" /> */}

        {/* Titile */}
        <div className='w-full h-[50vh]  max-sm:h-fit flex justify-center items-center mt-[30vh] max-sm:mt-[10vh] mb-[20vh] max-sm:mb-[10vh] ImgTDcont'>
          {/* <img src={`/svgs/WeddingTitle.svg`} alt="IMG" className=' sm:h-full max-sm:w-full object-cover object-center  ' /> */}
          <div className='w-fit flex flex-col text-[#7b1e24]' >
            <h1 className='Font_YIV text-[7rem] translate-y-10 leading-[7rem]'>The</h1>
            <h1 className='Font_Q text-[7rem] leading-[7rem] uppercase'>Wedding</h1>
            <h1 className='Font_Q text-[7rem] leading-[7rem] uppercase'>ITINERARY.</h1>
            <div className='Font_YV mt-5 w-full flex flex-col text-center'>
              <p>A series of sacred ceremonies and joyful </p>
              <p>celebrations as we begin our new journey together</p>
            </div>
          </div>
        </div>

        {/* 1 */}
        {/* <div className='w-full h-fit flex max-sm:flex-col max-sm:flex-col-reverse justify-center items-center my-20'>

  
        <div className='w-1/2 h-fit relative flex justify-center max-sm:w-full max-sm:mt-10 '>
          <img src={`/imgs/home/imgH4.webp`} alt="Img" className='w-2/3 max-sm:w-full object-cover object-center' />
          <img src={`/svgs/Day01BG.svg`} alt="Img" className='w-2/3 max-sm:hidden object-cover animate1TDIMGANDTEXT object-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
        </div>


        <div className='w-1/2 h-fit animate2TDIMGANDTEXT max-sm:w-full max-sm:mt-[5vh]'>
          <div className="w-full text-center flex flex-col justify-center items-center px-6 ">
            <p className='Font_YV'>25 March 2026</p>
            
            <div className='w-full'>
              <h1 className='Font_Q text-[7rem] text-center  mb-5 text-[#7b1e24]'>Day 01</h1>
            </div>
           
            <h3 className="Font_Q text-[#7b1e24] leading-snug">
              MEHENDI AND HALDI
              <br />
              CEREMONY
            </h3>

            
            <p className="mt-3 Font_YV tracking-wide text-[#7b1e24]">
              4:00 PM
            </p>

          
            <span className="mt-6 w-1/2 max-sm:w-full text-[18px] leading-[18px] Font_YV tracking-widest capitalize text-gray-500">
              A SERIES OF SACRED CEREMONIES AND JOYFUL
              CELEBRATIONS AS WE BEGIN OUR NEW JOURNEY
              TOGETHER
            </span>

        
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

      </div> */}

        {/* 2 */}
        {/* <div className='w-full h-fit flex max-sm:flex-col max-sm:w-full justify-center items-center my-20 max-sm:my-10'>

       
        <div className='w-1/2 h-fit animate3TDIMGANDTEXT max-sm:w-full'>
          <div className="w-full text-center flex flex-col justify-center items-center px-6 ">
            <p className='Font_YV'>26 March 2026</p>
            <div className='w-full'>
              <h1 className='Font_Q text-[7rem] text-center  mb-5 text-[#7b1e24]'>Day 02</h1>
            </div>
            
            <h3 className="Font_Q text-[#7b1e24] leading-snug uppercase">
              Sangeet
            </h3>

           
            <p className="mt-3 Font_YV tracking-wide text-[#7b1e24]">
              4:00 PM
            </p>

            
            <span className="mt-6 w-1/2 max-sm:w-full text-[18px] leading-[18px] Font_YV tracking-widest text-gray-500">
              A SERIES OF SACRED CEREMONIES AND JOYFUL
              CELEBRATIONS AS WE BEGIN OUR NEW JOURNEY
              TOGETHER
            </span>

            
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


        

        <div className='w-1/2 max-sm:w-full h-fit relative flex max-sm:mt-15  justify-center'>
          <img src={`/imgs/home/imgH5.webp`} alt="Img" className='w-2/3 max-sm:w-full object-cover object-center' />
          <img src={`/svgs/Day02BG.svg`} alt="Img" className='w-2/3 max-sm:hidden animate4TDIMGANDTEXT object-cover object-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
        </div>

      </div> */}

        {/* 3 */}
        {/* <div className='w-full h-fit flex max-sm:flex-col max-sm:flex-col-reverse justify-center items-center mt-20 mb-[30vh] max-sm:mb-[10vh]'>

        
        <div className='w-1/2 h-fit max-sm:w-full relative flex justify-center max-sm:mt-10 '>
          <img src={`/imgs/home/imgH6.webp`} alt="Img" className='w-2/3 max-sm:w-full object-cover object-center' />
          <img src={`/svgs/Day03BG.svg`} alt="Img" className='w-2/3 max-sm:hidden animate5TDIMGANDTEXT object-cover object-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
        </div>

      
        <div className='w-1/2 max-sm:w-full h-fit animate6TDIMGANDTEXT'>
          <div className="w-full text-center flex flex-col justify-center items-center px-6 max-sm:mt-10 ">
            <p className='Font_YV'>27 March 2026</p>
            <div className='w-full'>
              <h1 className='Font_Q text-[7rem] text-center  mb-5 text-[#7b1e24]'>Day 03</h1>
            </div>
            
            <h3 className="Font_Q text-[#7b1e24] leading-snug">
              MEHENDI AND HALDI
              <br />
              CEREMONY
            </h3>

           
            <p className="mt-3 Font_YV tracking-wide text-[#7b1e24]">
              4:00 PM
            </p>

          
            <span className="mt-6 w-1/2 text-[18px] max-sm:w-full leading-[18px] Font_YV tracking-widest text-gray-500">
              A SERIES OF SACRED CEREMONIES AND JOYFUL
              CELEBRATIONS AS WE BEGIN OUR NEW JOURNEY
              TOGETHER
            </span>

         
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

      </div> */}


        {/* ========================================================================================================= */}
      </div>

      {/* ================================ */}

      <div className="w-full h-fit flex flex-col z-20 bg-white ">
        {/* div-1 Sangeet */}
        <div className="w-full min-h-screen flex max-sm:flex-col">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] flex relative bg-white flex-col COLOR_TEXT_RED justify-center items-center">
            <h2 className="Font_Q">Day 1</h2>
            <h5 className="Font_Q text-[40px] leading-[40px] max-sm:text-center  mt-6 uppercase ">Sangeet</h5>
            
            <div className=" text-[16px] mt-6 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span>
                <span className="font-semibold">DATE:</span> 25 March 2006
              </span>
              <span>
                <span className="font-semibold">TIME:</span> 7:30 PM
              </span>
              <span>
                <span className="font-semibold">VENUE:</span> La
                Mamounia,Marrakech
              </span>
             
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Short description for wedding e-vite- This love story was never meant to be subtle. Join us for a sangeet packed with rhythm, energy, and main-character moments.
            </p>

             <span className='Text_YV font-semibold py-4 text-[14px] capitalize '>(No white red or gold )</span>
          </div>

          {/* right */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-[80%] h-fit  flex flex-col justify-center items-center">
              <h2 className="Font_Q  uppercase">OutFit</h2>
              <p className="Font_YV  mt-4">
                Light-coloured Indian or fusion wear
              </p>
              <p className="Font_YV ">
                (Comfortable, breezy fabrics recommended)
              </p>

              <img
                src={`/demo.png`}
                alt="Img"
                className="w-full imgQ1 object-cover object-center mt-4"
              />
            </div>
          </div>
        </div>

        {/* Div - 2*/}
        <div className='w-full min-h-screen relative flex '>
          {/* Left */}
          <div className='w-1/2 h-screen sticky top-0 left-0 flex justify-center items-center COLOR_TEXT_RED'>
            <div className="w-[80%] h-fit  flex flex-col justify-center items-center">
              <h3 className="Font_Q  uppercase">OutFit</h3>
              <p className="Font_YV  mt-4">
                Light-coloured Indian or fusion wear
              </p>
              <p className="Font_YV ">
                (Comfortable, breezy fabrics recommended)
              </p>

              <img
                src={`/demo.png`}
                alt="Img"
                className="w-full object-cover imgQ2 object-center mt-4"
              />
            </div>
          </div>

          {/* Right */}
          <div className='w-1/2 min-h-screen bg-white relative top-0 ml-auto'>
            {/* Day Sticky */}
            <div className='w-full h-fit sticky top-0 left-0 flex justify-center items-center mt-[5vh] pt-[5vw] pb-[2.5vw] bg-white z-60 '>
              <h2 className="Font_Q COLOR_TEXT_RED">Day 2</h2>
            </div>

            {/* 1 Detail Haldi */}
            <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Haldi</h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold">DATE:</span> 22 September 2026
                </span>
                <span>
                  <span className="font-semibold">TIME:</span> 10 AM
                </span>
                <span>
                  <span className="font-semibold">VENUE:</span> La
                  Mamounia,Marrakech
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                Where tradition meets sunshine and a great playlist. Come celebrate our haldi with vibrant colors, music, and nonstop dancing
              </p>
              <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
                Steeped in tradition and splashed with sunshine. Come celebrate our haldi with lively music, dancing, and happy moments.
              </p>

               <span className='Text_YV font-semibold py-4 text-[14px] capitalize '>(Yellow )</span>

            </div>


            {/* 2 Detail */}
            <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Barat</h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold">DATE:</span> 25 March 2006
                </span>
                <span>
                  <span className="font-semibold">TIME:</span> 3 PM
                </span>
                <span>
                  <span className="font-semibold">VENUE:</span> La
                  Mamounia,Marrakech
                </span>
              </div>

              {/* <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Guests are welcomed for a relaxed and joyful afternoon as we begin
              the celebrations with Mehendi and Haldi ceremonies. These rituals
              are filled with laughter, music, and meaningful traditions shared
              with close family and friends.
            </p> */}

             <span className='Text_YV font-semibold py-4 text-[14px] capitalize '>( No White Red )</span>

            </div>

            {/* 3 Detail Standing Barat (girls side) */}
            <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Standing Barat (girls side)</h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold">DATE:</span> 25 March 2006
                </span>
                <span>
                  <span className="font-semibold">TIME:</span> 4:00 PM
                </span>
                <span>
                  <span className="font-semibold">VENUE:</span> La
                  Mamounia,Marrakech
                </span>
              </div>

              {/* <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Guests are welcomed for a relaxed and joyful afternoon as we begin
              the celebrations with Mehendi and Haldi ceremonies. These rituals
              are filled with laughter, music, and meaningful traditions shared
              with close family and friends.
            </p> */}

            </div>

            {/* 4 Wedding */}
            <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Wedding</h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold">DATE:</span> 25 March 2006
                </span>
                <span>
                  <span className="font-semibold">TIME:</span> 6 PM
                </span>
                <span>
                  <span className="font-semibold">VENUE:</span> La
                  Mamounia,Marrakech
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                Beneath carved arches and golden skies, we promise each other forever. Join us for a wedding steeped in tradition, grace, and enduring love.
              </p>
              <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
                Amidst timeless beauty and sacred rituals, our forever begins. Join us as love is celebrated with grace, heritage, and quiet grandeur.
              </p>

            </div>

            {/* 5 Wedding Dinner*/}
            <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Wedding Dinner</h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold">DATE:</span> 25 March 2006
                </span>
                <span>
                  <span className="font-semibold">TIME:</span> 7:00 PM
                </span>
                <span>
                  <span className="font-semibold">VENUE:</span> La
                  Mamounia,Marrakech
                </span>
              </div>

              {/* <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Guests are welcomed for a relaxed and joyful afternoon as we begin
              the celebrations with Mehendi and Haldi ceremonies. These rituals
              are filled with laughter, music, and meaningful traditions shared
              with close family and friends.
            </p> */}

            </div>


          </div>
        </div>

        {/* Div - 3*/}
        <div className='w-full min-h-screen relative flex '>


          {/* left */}
          <div className='w-1/2 min-h-screen bg-white relative top-0 mr-auto'>
            {/* Day Sticky */}
            <div className='w-full h-fit sticky top-0 left-0 flex justify-center items-center mt-[5vh] pt-[5vw] pb-[2.5vw] bg-white z-60 '>
              <h2 className="Font_Q COLOR_TEXT_RED">Day 3</h2>
            </div>

            {/* 1 Detail Pool Party & Lunch */}
            <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Pool Party & Lunch</h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold">DATE:</span> 23 September 2026
                </span>
                <span>
                  <span className="font-semibold">TIME:</span> 10 AM
                </span>
                <span>
                  <span className="font-semibold">VENUE:</span> La
                  Mamounia,Marrakech
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                Sun out, volume up, worries off. Join us poolside for a beach-club-inspired party made for dancing, and soaking it all in.
              </p>

               <span className='Text_YV font-semibold py-4 text-[14px] capitalize'>( no white )</span>
              {/* <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              Steeped in tradition and splashed with sunshine. Come celebrate our haldi with lively music, dancing, and happy moments.
            </p> */}

            </div>

            {/* 2 Detail Cocktail Hour */}
            <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Cocktail Hour</h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold">DATE:</span> 23 September 2026
                </span>
                <span>
                  <span className="font-semibold">TIME:</span>  7:00 PM
                </span>
                <span>
                  <span className="font-semibold">VENUE:</span> La
                  Mamounia,Marrakech
                </span>
              </div>

               <span className='Text_YV font-semibold py-4 text-[14px] capitalize'>( no white red & gold )</span>

              {/* <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Sun out, volume up, worries off. Join us poolside for a beach-club-inspired party made for dancing, and soaking it all in.
            </p> */}
              {/* <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              Steeped in tradition and splashed with sunshine. Come celebrate our haldi with lively music, dancing, and happy moments.
            </p> */}

            </div>

            {/* 3 Reception */}
            <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Reception</h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold">DATE:</span> 23 September 2026
                </span>
                <span>
                  <span className="font-semibold">TIME:</span> 8:00 PM
                </span>
                <span>
                  <span className="font-semibold">VENUE:</span> La
                  Mamounia,Marrakech
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                Candlelight, old-world beauty, and a night made to celebrate. Come toast to love in a reception filled with warmth, rhythm, and refined revelry.
              </p>
              {/* <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              Steeped in tradition and splashed with sunshine. Come celebrate our haldi with lively music, dancing, and happy moments.
            </p> */}

              <span className='Text_YV font-semibold py-4 text-[14px] capitalize'>( no white red & gold )</span>

            </div>

            {/* 4 After Party */}
            <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Reception</h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold">DATE:</span> 23 September 2026
                </span>
                <span>
                  <span className="font-semibold">TIME:</span> 12:00 AM
                </span>
                <span>
                  <span className="font-semibold">VENUE:</span> La
                  Mamounia,Marrakech
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                Sleep is optional. Meet us after dark for a high-energy after party where the music doesn’t stop and neither do we.
              </p>
              {/* <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              Steeped in tradition and splashed with sunshine. Come celebrate our haldi with lively music, dancing, and happy moments.
            </p> */}

              <span className='Text_YV font-semibold py-4 text-[14px] capitalize'>( no white & gold )</span>

            </div>



          </div>

          {/* right */}
          <div className='w-1/2 h-screen sticky top-0 right-0 flex justify-center items-center COLOR_TEXT_RED'>
            <div className="w-[80%] h-fit  flex flex-col justify-center items-center">
              <h3 className="Font_Q  uppercase">OutFit</h3>
              <p className="Font_YV  mt-4">
                Light-coloured Indian or fusion wear
              </p>
              <p className="Font_YV ">
                (Comfortable, breezy fabrics recommended)
              </p>

              <img
                src={`/demo.png`}
                alt="Img"
                className="w-full object-cover imgQ2 object-center mt-4"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Itinerary
