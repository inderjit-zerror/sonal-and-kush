"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Itinerary = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".imgQ1");

    images.forEach((img) => {
      const strength = 20; // magnetic move
      const rotateStrength = 10; // 3D tilt

      const moveImage = (e) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const moveX = percentX * strength;
        const moveY = percentY * strength;

        const rotateY = percentX * rotateStrength;
        const rotateX = -percentY * rotateStrength;

        gsap.to(img, {
          x: moveX,
          y: moveY,
          rotateX: rotateX,
          rotateY: rotateY,
          duration: 0.3,
          ease: "power3.out",
          transformPerspective: 800,
          transformOrigin: "center",
        });
      };

      const resetImage = () => {
        gsap.to(img, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      img.addEventListener("mousemove", moveImage);
      img.addEventListener("mouseleave", resetImage);
    });
  }, []);

  return (
    <>
      <div className="w-full -h-fit COLOR_BG_CREAM flex flex-col relative px-10 overflow-hidden">
        {/* Titile */}
        <div className="w-full h-fit  max-sm:h-fit flex justify-center  items-center mt-[10vh] max-sm:mt-[10vh] mb-[1vh] max-sm:mb-[10vh] ImgTDcont">
          <div className="w-fit flex flex-col COLOR_TEXT_RED">
            <h1 className="Font_YIV text-[7rem] translate-y-10 max-sm:translate-y-5 leading-[7rem] max-sm:text-[15vw] max-sm:leading-[16vw]">
              The
            </h1>
            <h1 className="Font_Q text-[7rem] leading-[7rem] max-sm:text-[15vw] max-sm:leading-[16vw] uppercase">
              Wedding
            </h1>
            <h1 className="Font_Q text-[7rem] leading-[7rem] max-sm:text-[15vw] max-sm:leading-[16vw] uppercase">
              ITINERARY.
            </h1>
            <div className="Font_YV mt-5 w-full flex flex-col text-center">
              <p>A series of sacred ceremonies and joyful </p>
              <p>celebrations as we begin our new journey together</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================================ */}

      <div className="w-full h-fit flex flex-col z-20 COLOR_BG_CREAM  ">
        {/* div-3 */}
        <div className="w-full min-h-screen  max-sm:min-h-fit  flex max-sm:flex-col max-sm:py-[5vh]">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[2vh] max-sm:px-[20px] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 1</p>
            <h5 className="Font_Q text-[40px] leading-[40px] max-sm:text-center  mt-4 uppercase px-[10%] text-center">
              Checkins, Vidhi, Sangeet
            </h5>

            <div className=" text-[16px] mt-6 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span>
                <span className="font-semibold"></span> 21/09/26
              </span>
              <span>
                <span className="font-semibold"></span> 11:00 AM - 7:30 PM
              </span>
              <span>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Welcome to our wedding getaway! Arrive, unwind, and settle into a
              weekend filled with love, laughter, and unforgettable
              celebrations. Our hospitality team will be there to ensure your
              stay begins seamlessly
            </p>

            {/* <span className="Text_YV font-semibold py-4 text-[14px] capitalize ">
              (No white red or gold )
            </span> */}
            <div className="w-full h-fit flex gap-5 justify-center items-center mt-5">
              <Link href="/wedding">
                <button
                  className="button"
                  style={{ backgroundColor: "#551301" }}
                >
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="10"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="10"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy "
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  Know More
                </button>
              </Link>
            </div>
          </div>

          {/* right */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:pb-[10vh] max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-1/2 h-fit  flex flex-col justify-center img3d-wrapper items-center">
              <img
                src={`/imgs/icon3.png`}
                alt="Img"
                className="w-full imgQ1 object-cover object-center mt-4"
              />
            </div>
          </div>
        </div>

        {/* div-2  */}
        <div className="w-full min-h-screen  max-sm:min-h-fit  flex max-sm:flex-col flex-row-reverse max-sm:py-[5vh]">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[2vh] max-sm:px-[20px] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 2</p>
            <h5 className="Font_Q text-[40px] leading-[40px] max-sm:text-center  mt-4 uppercase px-[10%] text-center ">
              Chooda, Haldi, Safa Bandhi, Baraat, Varmala, Phere
            </h5>

            <div className=" text-[16px] mt-6 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span className=" uppercase">
                <span className="font-semibold"></span> 22/09/26
              </span>
              <span className=" uppercase">
                <span className="font-semibold"></span> 8:30 AM - 11:30 PM
              </span>
              <span className=" uppercase">
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              An intimate ceremony woven with emotion and tradition. The bride
              is adorned with her chooda, symbolising love, prosperity, and the
              start of a beautiful new chapter.
            </p>

            {/* <span className="Text_YV font-semibold py-4 text-[14px] capitalize ">
              (No white red or gold )
            </span> */}
            <div className="w-full h-fit flex gap-5 justify-center items-center mt-5">
              <Link href="/wedding">
                <button
                  className="button"
                  style={{ backgroundColor: "#551301" }}
                >
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="10"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="10"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy "
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  Know More
                </button>
              </Link>

              {/* --------------------------------------------- */}
            </div>
          </div>

          {/* right */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[0vh] max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-2/3 max-sm:w-1/2 h-fit  flex flex-col justify-center items-center img3d-wrapper">
              <img
                src={`/imgs/icon1.png`}
                alt="Img"
                className="w-full imgQ1 object-cover object-center mt-4"
              />
            </div>
          </div>
        </div>

        {/* div-3 */}
        <div className="w-full min-h-screen  max-sm:min-h-fit  flex max-sm:flex-col max-sm:py-[5vh]">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[2vh] max-sm:px-[20px] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 3</p>
            <h5 className="Font_Q text-[40px] leading-[40px] max-sm:text-center  mt-4 uppercase  px-[10%] text-center">
              Pool Party, Cocktail Hour, Reception, After Party
            </h5>

            <div className=" text-[16px] mt-6 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span>
                <span className="font-semibold"></span> 23/09/26
              </span>
              <span>
                <span className="font-semibold"></span> 11:30 AM - 11:30 PM
              </span>
              <span>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Sun, splashes, and effortless fun. A relaxed poolside celebration
              to soak in the final moments of the wedding festivities together.
            </p>

            {/* <span className="Text_YV font-semibold py-4 text-[14px] capitalize ">
              (No white red or gold )
            </span> */}
            <div className="w-full h-fit flex gap-5 justify-center items-center mt-5">
              <Link href="/wedding">
                <button
                  className="button"
                  style={{ backgroundColor: "#551301" }}
                >
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="10"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="10"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy "
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  Know More
                </button>
              </Link>
            </div>
          </div>

          {/* right */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:pb-[10vh] max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-1/2 h-fit  flex flex-col justify-center img3d-wrapper items-center">
              <img
                src={`/imgs/icon4.png`}
                alt="Img"
                className="w-full imgQ1 object-cover object-center mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Itinerary;
