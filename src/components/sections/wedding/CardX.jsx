'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const CardX = () => {


  useGSAP(()=>{
    gsap.from('.imgQ1',{
      y:20,
      ease:'none',
      scrollTrigger:{
        trigger:'.imgQ1',
        start:'top 80%',
        end:'top 60%',
        scrub:true,
        // markers:true
      }
    })
    gsap.from('.imgQ2',{
      y:20,
      ease:'none',
      scrollTrigger:{
        trigger:'.imgQ2',
        start:'top 80%',
        end:'top 60%',
        scrub:true,
        // markers:true
      }
    })
    gsap.from('.imgQ3',{
      y:20,
      ease:'none',
      scrollTrigger:{
        trigger:'.imgQ3',
        start:'top 80%',
        end:'top 60%',
        scrub:true,
        // markers:true
      }
    })
  },[])

  return (
    <div className="w-full h-fit flex flex-col z-20 mt-[150vh]">
      {/* div-1 */}
      <div className="w-full min-h-screen flex max-sm:flex-col">
        {/* Left */}
        <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] flex relative bg-white flex-col text-[#75171E] justify-center items-center">
          <h2 className="Font_Q">Day 1</h2>
          <h5 className="Font_Q text-[40px] leading-[40px] max-sm:text-center  mt-6">MEHENDI AND HALDI</h5>
          <h5 className="Font_Q text-[40px] leading-[40px] max-sm:text-center ">MEHENDI </h5>
          <div className=" text-[16px] mt-6 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
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

          <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
            Guests are welcomed for a relaxed and joyful afternoon as we begin
            the celebrations with Mehendi and Haldi ceremonies. These rituals
            are filled with laughter, music, and meaningful traditions shared
            with close family and friends.
          </p>

          {/* Design */}
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute top-0 left-0"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute top-0 right-0 rotate-90"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute bottom-0 right-0 rotate-180"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute bottom-0 left-0 -rotate-90"
            alt="Img"
          />
        </div>

        {/* right */}
        <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] flex flex-col bg-[#75171E] px-12 justify-center items-center">
          <div className="w-[80%] h-fit  flex flex-col justify-center items-center">
            <h2 className="Font_Q text-[#E4BD95] uppercase">OutFit</h2>
            <p className="Font_YV text-[#E4BD95] mt-4">
              Light-coloured Indian or fusion wear
            </p>
            <p className="Font_YV text-[#E4BD95]">
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

      {/* div-2 */}
      <div className="w-full min-h-screen flex max-sm:flex-col max-sm:flex-col-reverse">
        {/* Left */}
        <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] flex flex-col bg-[#75171E] px-12 justify-center items-center">
          <div className="w-[80%] h-fit  flex flex-col justify-center items-center">
            <h2 className="Font_Q text-[#E4BD95] uppercase">OutFit</h2>
            <p className="Font_YV text-[#E4BD95] mt-4">
              Light-coloured Indian or fusion wear
            </p>
            <p className="Font_YV text-[#E4BD95]">
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
        <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] bg-white flex relative flex-col text-[#75171E] justify-center items-center">
          <h2 className="Font_Q">Day 2</h2>
          <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">SANGEET Night</h5>
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

          <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
            Guests are welcomed for a relaxed and joyful afternoon as we begin
            the celebrations with Mehendi and Haldi ceremonies. These rituals
            are filled with laughter, music, and meaningful traditions shared
            with close family and friends.
          </p>

          {/* Design */}
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute top-0 left-0"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute top-0 right-0 rotate-90"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute bottom-0 right-0 rotate-180"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute bottom-0 left-0 -rotate-90"
            alt="Img"
          />
        </div>
      </div>

       {/* div-3 */}
      <div className="w-full min-h-screen flex max-sm:flex-col ">
        {/* Left */}
        <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] bg-white flex relative flex-col text-[#75171E] justify-center items-center">
          <h2 className="Font_Q">Day 3</h2>
          <h5 className="Font_Q text-[40px] leading-[40px]  mt-6">WEDDING &</h5>
          <h5 className="Font_Q text-[40px] leading-[40px] ">RECEPTION</h5>
          <div className=" text-[16px] mt-6 flex flex-col Font_YV gap-1 justify-center max-sm:text-center items-center">
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

          <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
            Guests are welcomed for a relaxed and joyful afternoon as we begin
            the celebrations with Mehendi and Haldi ceremonies. These rituals
            are filled with laughter, music, and meaningful traditions shared
            with close family and friends.
          </p>

          {/* Design */}
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute top-0 left-0"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute top-0 right-0 rotate-90"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute bottom-0 right-0 rotate-180"
            alt="Img"
          />
          <img
            src={`/svgs/WeddingDesign.svg`}
            className="w-1/5 object-cover absolute bottom-0 left-0 -rotate-90"
            alt="Img"
          />
        </div>

        {/* right */}
        <div className="w-1/2 max-sm:w-full max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] h-screen flex flex-col bg-[#75171E] px-12 justify-center items-center">
          <div className="w-[80%] h-fit  flex flex-col justify-center items-center">
            <h2 className="Font_Q text-[#E4BD95] uppercase">OutFit</h2>
            <p className="Font_YV text-[#E4BD95] mt-4">
              Light-coloured Indian or fusion wear
            </p>
            <p className="Font_YV text-[#E4BD95]">
              (Comfortable, breezy fabrics recommended)
            </p>

            <img
              src={`/demo.png`}
              alt="Img"
              className="w-full object-cover imgQ3 object-center mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardX;
