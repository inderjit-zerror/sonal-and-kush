'use client'
import React, { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const TravelInfo = () => {

  const row1 = useRef(null)
  const row2 = useRef(null)
  const row3 = useRef(null)

  useGSAP(() => {
    const createMarquee = (el, direction = 1) => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" }
      })

      tl.fromTo(
        el,
        { xPercent: 0 },
        {
          xPercent: direction === 1 ? -50 : 50,
          duration: 20,
        }
      )

      return tl
    }


    const tl1 = createMarquee(row1.current, 1)   // right
    const tl2 = createMarquee(row2.current, -1)  // left
    const tl3 = createMarquee(row3.current, 1)   // right

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const velocity = self.getVelocity()
        const speed = gsap.utils.clamp(0.5, 4, Math.abs(velocity) / 300)

        tl1.timeScale(speed)
        tl2.timeScale(speed)
        tl3.timeScale(speed)
      },
      onStop: () => {
        gsap.to([tl1, tl2, tl3], {
          timeScale: 1,
          duration: 0.6,
          ease: "power3.out",
        })
      },
    })
  }, [])

  return (
    <section className="relative bg-[#7A0F16] py-32 px-6 overflow-hidden">

      {/* Background oversized text */}
      <div className="absolute inset-0 flex flex-col justify-center gap-10 text-[#E4BD95] opacity-5 pointer-events-none">

        {/* ROW 1 */}
        <div className="flex whitespace-nowrap uppercase Font_Q" ref={row1}>
          {[...Array(16)].map((_, i) => (
            <h5 key={i} className="text-[7vw] leading-[7vw] max-sm:text-[20vw] max-sm:leading-[20vw]">
              Travel Information
            </h5>
          ))}
        </div>

        {/* ROW 2 */}
        <div className="flex whitespace-nowrap uppercase Font_Q -ml-[90vw] " ref={row2}>
          {[...Array(16)].map((_, i) => (
            <h5 key={i} className="text-[7vw] leading-[7vw] max-sm:text-[20vw] max-sm:leading-[20vw]">
              Travel Information
            </h5>
          ))}
        </div>

        {/* ROW 3 */}
        <div className="flex whitespace-nowrap uppercase Font_Q" ref={row3}>
          {[...Array(16)].map((_, i) => (
            <h5 key={i} className="text-[7vw] leading-[7vw] max-sm:text-[20vw] max-sm:leading-[20vw]">
              Travel Information
            </h5>
          ))}
        </div>

      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center flex flex-col justify-center items-center">

        <p className=" uppercase mb-6 text-[#E4BD95]">
          Travel Information
        </p>

        <div className="Font_Q  mb-10 flex flex-col gap-4 max-sm:gap-1 text-[#E4BD95] max-sm:text-white max-sm:uppercase">
          <h2> The Way To</h2>  <h2>Travel</h2>
        </div>

        <div className="space-y-6 max-sm:space-y-4 ">
          <p className="uppercase Font_YV text-[#E4BD95]">
            Nearest Airport :
          </p>

          <p className="  Font_YV  text-white">
            Marrakech Menara Airport <br />
            <span className=" opacity-80 Font_YV">(20 Mins)</span>
          </p>

          <p className=" opacity-90 mt-8 Font_YV text-white">
            Note: Airport transfers will be arranged <br />
            for all guests. Coordinator details to <br />
            follow.
          </p>
        </div>
         <div className='w-fit h-[46px] select-none mt-5 cursor-pointer flex justify-center items-center px-[17px] py-[6px] text-[16px] text-[white] bg-[#5F171D] hover:bg-[#632127]'>
            View Location
          </div>
      </div>
    </section>
  );
};

export default TravelInfo;
