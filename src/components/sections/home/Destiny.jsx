'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import AccordGallery from './AccordGallery '

gsap.registerPlugin(ScrollTrigger)

const Destiny = () => {

    useEffect(() => {
        const TLD = gsap.timeline({
            scrollTrigger: {
                trigger: '.Destiny_cont',
                start: 'top top',
                end: 'top -20%',
                scrub: true,
                // markers: true
            }
        })
        // TLD.to('.innderDestinyCont', {
        //     // opacity: 1,
        //     ease: 'none'
        // }, 'b1')


        // --------------------------------------

        gsap.to('.SecondInnerContDestiny', {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.SecondInnerContDestiny',
                start: 'top 70%',
                end: 'top 40%',
                scrub: true,
                // markers: true
            }
        })

    }, [])

    useGSAP(() => {

        // gsap.from('.DCD1', {
        //     yPercent: 20,
        //     opacity: 0,
        //     ease: 'none',
        //     scrollTrigger: {
        //         trigger: '.DCD1',
        //         start: 'top 70%',
        //         end: 'top 45%',
        //         scrub: true,
        //         // markers:true
        //     }
        // })
        gsap.from('.T2T2T', {
            yPercent: 20,
            opacity: 0,
            stagger: {
                each: 1,
                ease: 'none'
            },
            ease: 'none',
            scrollTrigger: {
                trigger: '.innderDestinyCont',
                start: 'top 80%',
                end: 'top 50%',
                scrub: true,
                // markers: true
            }
        })
        gsap.from('.TT2T', {
            yPercent: 20,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.TT2T',
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                // markers: true
            }
        })
        gsap.from('.TT3T', {
            yPercent: 5,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.TT3T',
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                // markers: true
            }
        })

        // gsap.from('.DCD2', {
        //     yPercent: 20,
        //     opacity: 0,
        //     ease: 'none',
        //     scrollTrigger: {
        //         trigger: '.DCD2',
        //         start: 'top 70%',
        //         end: 'top 45%',
        //         scrub: true,
        //         // markers:true
        //     }
        // })
        // gsap.from('.DCD3', {
        //     yPercent: 20,
        //     opacity: 0,
        //     ease: 'none',
        //     scrollTrigger: {
        //         trigger: '.DCD3',
        //         start: 'top 70%',
        //         end: 'top 45%',
        //         scrub: true,
        //         // markers:true
        //     }
        // })
        // gsap.from('.DCD4', {
        //     yPercent: 20,
        //     opacity: 0,
        //     ease: 'none',
        //     scrollTrigger: {
        //         trigger: '.DCD4',
        //         start: 'top 70%',
        //         end: 'top 45%',
        //         scrub: true,
        //         // markers:true
        //     }
        // })
        // gsap.from('.DCD5', {
        //     yPercent: 20,
        //     opacity: 0,
        //     ease: 'none',
        //     scrollTrigger: {
        //         trigger: '.DCD5',
        //         start: 'top 70%',
        //         end: 'top 45%',
        //         scrub: true,
        //         // markers:true
        //     }
        // })
        // gsap.from('.DCD6', {
        //     yPercent: 20,
        //     opacity: 0,
        //     ease: 'none',
        //     scrollTrigger: {
        //         trigger: '.DCD6',
        //         start: 'top 70%',
        //         end: 'top 45%',
        //         scrub: true,
        //         // markers:true
        //     }
        // })
    }, [])

    return (
        <div className='w-full h-fit Destiny_cont relative p-10 max-sm:px-[10px] '>

            {/* Bg */}
            <img src={`/imgs/home/imgH2.webp`} className='w-full h-full object-cover fixed top-0 left-0 object-center z-[-1]' alt="BG-IMG" />

            <div className='w-full h-fit bg-white flex flex-col px-[5vw] innderDestinyCont opacity-100 mt-[100vh] max-sm:pt-[10vh] '>
                {/* <div className='w-full h-full px-[10vw] max-sm:px-3 pt-[10vw] flex flex-col gap-[2rem]  '>
                    <div className='w-full h-fit flex justify-center T2T2T items-center'> <span className='Font_YV uppercase text-[1rem] text-[#5F171D] font-semibold '>Our story</span></div>
                    <img src={`/svgs/Title1Destiny.svg`} className='w-full T2T2T object-cover' alt="SVG" />
                </div>

                <div className='w-full h-fit flex mt-[5vw] TT2T'>
                    <div className='w-1/2 pr-[10vw] max-sm:w-full max-sm:text-justify max-sm:pr-0'>
                        <p className='Font_YV'> Our story didn’t begin with grand gestures or dramatic moments. It began with tradition, with families coming together, and with a quiet sense of trust. Guided by shared values and mutual respect, we were brought into each other’s lives at just the right time.</p>
                    </div>
                    <div className='w-1/2 pl-[10vw] max-sm:hidden'>
                        <p className='Font_YV'>In those early moments, everything felt simple. There was curiosity, respect, and an unspoken understanding that allowed us to be ourselves. No rush, no expectations—just space to grow and learn about one another.</p>
                    </div>
                </div>


          
                <div className='w-full h-fit flex max-sm:flex-col mt-[5vw] mb-[50vh] max-sm:mb-[20vh] gap-[5vw] relative TT3T will-change-transform '>
                
                    <div className='w-2/4 relative z-20 DCD1 max-sm:w-full '>
                        <div className='w-full h-auto'>
                            <img src={`/imgs/home/imgH3.webp`} className='w-full aspect-[2/3] object-cover object-center z-20 ' alt="IMG" />
                        </div>
                    </div>

                    
                    <div className='w-full relative z-20 DCD2 '>
                        <div className='w-full h-auto'>
                            <img src={`/imgs/Same2img.webp`} className='w-full aspect-[2/2] max-sm:aspect-auto object-cover object-center z-20 ' alt="IMG" />
                        </div>
                    </div>

                
                    <div className='w-full h-full absolute bottom-0  left-0 uppercase text-[#75171d38] flex flex-wrap text-wrap z-10 '>
                        <img src={`/svgs/BGTxtDestiny.svg`} alt="IMG" className='w-full h-full object-cover object-center ' />
                    </div>
                </div> */}

                <AccordGallery />
                <div className='w-full h-fit flex max-sm:flex-col  justify-start items-end max-sm:justify-center '>
                    {/* Left */}
                    <div className='w-1/2 h-full DCD5 max-sm:w-full '>
                        <div className='w-1/2 h-fit max-sm:w-full'>
                            
                            <div className='w-[280px] fit uppercase Font_YV'>
                                <p className='mt-8'>to know him and his family, her family felt confident and happy about the match. </p>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className='w-1/2 h-fit max-sm:w-full flex justify-end DCD6 max-sm:justify-center '>

                        <div className='w-1/2 h-fit flex flex-col max-sm:w-full max-sm:mt-[2vw]'>

                            <img src={`/svgs/LastimgDestiny2.svg`} className='w-full max-sm:w-2/3 max-sm:mt-[5vw] max-sm:ml-auto mt-[2.5vw] object-center object-cover' alt="IMG" />

                        </div>

                    </div>
                </div>



                {/* ------------------------------------------------------------------------------------------------------------ */}
                {/* ------------------------------------------------------------------------------------------------------------ */}
                {/* ------------------------------------------------------------------------------------------------------------ */}
                {/* ------------------------------------------------------------------------------------------------------------ */}

                <div className='w-full h-fit flex flex-col mb-[10vh] max-sm:mb-8 relative SecondInnerContDestiny opacity-0  mt-[30vh]'>
                    <div className='w-full relative'>
                        <div className='w-1/2 flex mb-[80vh] max-sm:mb-[40vh] relative flex-col max-sm:w-[80%]'>
                            <div className='w-full h-fit flex justify-start items-center T2T2T mb-[2rem]'> <span className='Font_YV uppercase text-[1rem] text-[#5F171D] font-semibold '>Our story</span></div>
                            <h1 className=' uppercase text-[8vw] leading-[8vw] Font_Q text-[#5F171D]' >Together</h1>
                            <h1 className=' uppercase text-[8vw] leading-[8vw] Font_Q text-[#5F171D]' >as</h1>
                            <h1 className=' uppercase text-[8vw] leading-[8vw] Font_Q text-[#5F171D]' >one</h1>
                        </div>

                        {/* 2Img-COMT */}
                        <div className='w-full h-fit flex justify-center  items-center absolute top-[30%] max-sm:top-[18%] left-0'>
                            {/* left */}
                            <div className='w-[380px] h-[500px] max-sm:w-full max-sm:h-[200px]   rotate-z-[5deg] z-30 relative DCD3'>
                                <img src={`/imgs/home/img1Destiny2.webp`} alt="IMG" className='w-full h-full object-cover object-center' />
                                {/* Random text */}
                                <img src={`/svgs/randomText.svg`} className='w-[100px] absolute top-[110%] left-1/2 object-cover object-center' alt="IMG" />
                            </div>

                            {/* Right */}
                            <div className='w-[380px] h-[500px] max-sm:w-full max-sm:h-[200px] overflow-hidden -rotate-z-[5deg] z-20 translate-y-[-10%] DCD4'>
                                <img src={`/imgs/home/img2Destiny2.webp`} alt="IMG" className='w-full h-full object-cover object-center' />
                            </div>
                        </div>

                        <div className='w-full h-fit flex max-sm:flex-col  justify-start items-end '>
                            {/* Left */}
                            <div className='w-1/2 h-full DCD5 max-sm:w-full '>
                                <div className='w-1/2 h-fit max-sm:w-full'>
                                    <div className='w-[270px] h-[204px] max-sm:w-full max-sm:h-[300px] overflow-hidden flex flex-col '>
                                        <img src={`/imgs/home/img3Destiny2.webp`} className=' w-full object-center object-cover' alt="IMG" />
                                    </div>
                                    <div className='w-[280px] fit uppercase Font_YV'>
                                        <p className='mt-8'>to know him and his family, her family felt confident and happy about the match. </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right */}
                            <div className='w-1/2 h-fit max-sm:w-full flex justify-end DCD6'>

                                <div className='w-1/2 h-fit flex flex-col max-sm:w-full max-sm:mt-[10vw]'>
                                    <div className="flex gap-8 max-sm:gap-4 items-end max-w-5xl w-full">

                                        {/* Left Image – Shorter */}
                                        <div className="flex-1">
                                            <img
                                                src={`/imgs/home/img2Destiny2.webp`}
                                                alt="Couple"
                                                className="w-full h-[250px] object-cover object-center"
                                            />
                                        </div>

                                        {/* Right Image – Taller */}
                                        <div className="flex-1">
                                            <img
                                                src={`/imgs/home/img2Destiny2.webp`}
                                                alt="Couple"
                                                className="w-full h-[270px] object-cover object-center"
                                            />
                                        </div>

                                    </div>
                                    <img src={`/svgs/LastimgDestiny2.svg`} className='w-full max-sm:w-2/3 max-sm:mt-[5vw] max-sm:ml-auto mt-[2.5vw] object-center object-cover' alt="IMG" />

                                </div>

                            </div>
                        </div>
                    </div>



                </div>


            </div>



        </div>
    )
}

export default Destiny
