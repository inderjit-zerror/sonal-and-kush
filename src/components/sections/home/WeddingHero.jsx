'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
import Line from "@/components/sections/home/Line";

const WeddingHero = () => {

   useGSAP(() => {
        gsap.from('.WHD1', {
            yPercent: 50,
            opacity: 0,
            stagger:{
              each:0.5,
              ease:'none'
            },
            ease: 'none',
            scrollTrigger: {
                trigger: '.WHD1',
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
                // markers:true
            }
        })
    }, [])


  return (
    <section className="h-fit flex items-center justify-center bg-white px-4 pt-[20vh] max-sm:px-[20px] pb-[4vh]">
      <div className="text-center max-w-3xl  ">
        {/* Bride Name */}
        <h1 className="Font_Q text-[#7A2E2E] text-5xl md:text-6xl tracking-wide uppercase WHD1">
          Henna Lakhia
        </h1>

        {/* And */}
        <p className="italic Font_YIV text-[#7A2E2E] my-4 text-sm WHD1">
          and
        </p>

        {/* Groom Name */}
        <h2 className="Font_Q text-[#7A2E2E] text-5xl md:text-6xl tracking-wide uppercase WHD1">
          Benjamin Melnich
        </h2>

        {/* Description */}
        <p className="mt-10 Font_YV  tracking-widest uppercase text-[#7A2E2E] leading-relaxed WHD1">
          Request the pleasure of your company <br />
          to celebrate their wedding on
        </p>

        {/* Date */}
        <div className="mt-6 flex items-center justify-center gap-4 text-[#7A2E2E] WHD1">
          <span className="text-xs tracking-widest uppercase">
            March
          </span>

          <span className="text-2xl md:text-[40px] font-serif">
            25<sup className="text-sm">th</sup> – 27<sup className="text-sm">th</sup>
          </span>

          <span className="text-xs tracking-widest uppercase">
            2026
          </span>
        </div>
      </div>

    </section>
  );
};

export default WeddingHero;
