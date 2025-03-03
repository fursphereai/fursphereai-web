import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import DiscoverButton from '../common/DiscoverButton';
import SignupButton from '../common/SignupButton';
// Section1-5的基础容器样式
const sectionBaseStyles = "flex flex-col md:flex-row items-center justify-between max-w-[1440px] w-full min-h-[640px] mx-auto px-4 md:px-8 lg:px-20 py-10 md:py-16";


// Section1.5 组件
const Section1_2: React.FC = () => {
  

  return (
    <div className='mt-[40px] md:mt-[80px] bg-[#F8F7F8]'>
    <section className=" max-w-[1240px] h-[384px] mx-auto  ">
      
      <div className="
      flex flex-col
      mt-[40px] md:mt-[60px]
      items-center 
      w-full
      h-[325px] md:h-[162px]
      gap-y-[20px]">
        <h1 className="
        w-full
        text-[32px] md:text-[48px]
        text-center
        font-UbuntuLight 
        text-[#505D90] 
        leading-[38.4px] md:leading-[57.6px] 
        tracking-[-1.2px] md:tracking-[-1.92px]">
          Fluffy mastermind or daydreaming artist? 
         </h1>
         <h2 className="
        w-full
        text-[16px] md:text-[16px]
        text-center
        font-[Inter]
        text-[#505D90] 
        leading-normal">
          Discover your pet’s MBTI personality!
         </h2>
         <div className="
         w-full
         flex flex-row items-center justify-center
         ">
         <DiscoverButton onClick={() => {
           // Add your click handler logic here
           console.log('Discover clicked');
         }}/>
         </div>

         <div className=" max-w-[768px] max-h-[143px]">
         <Image
          src="/page1_2.svg"
          alt="Fursphere Logo"
          width={768}
          height={143}
          className="w-full h-full object-cover relative"
        />
         </div>


         
       
      </div>

       
        
      
    </section>
    </div>
  );
};

// Section2 组件
const Section2: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="
    mt-[40px] md:mt-[80px]
    max-w-[1240px]
    mx-auto
    overflow-hidden ">
      <div className="  w-full  flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className=" mt-[40px] md:mt-[0px]  md:max-w-[620px] flex flex-col items-center md:items-start gap-y-[20px] md:gap-y-[32px]">
          <h1 className="text-[24px] md:text-[32px] text-[#505D90] text-center md:text-left font-Ubuntu 
          tracking-[-0.96px] md:tracking-[-1.28px] 
          leading-[28.8px] md:leading-[38.4px]">
            Compare prices across
            <span className="text-[#5777D0]"> 10+ </span> 
            stores best <br />
            pet supplies. 
          </h1>
          
          <div className="
          w-[74.5px] md:w-full 
          h-[30px] md:h-full
          text-[8px] md:text-[16px] ">
          <SignupButton 
            className="
            w-[74.5px] md:w-[123px]
            h-[30px] md:h-[44px]"
            onClick={() => {
            // Add your click handler logic here
            console.log('Signup clicked');
          }}/>
          </div>

        </div>
      
        {/* Right Content - Video */}
        <div className=" w-1/2">
          <div className=" w-full h-full">
          <video
            ref={videoRef}
            className=" w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            select-none
          >
            <source src="/video/page1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};


// Section3 组件
const Section3: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="
    mt-[40px] md:mt-[80px]
    max-w-[1240px]
    mx-auto
    overflow-hidden ">
      <div className=" w-full  flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="mt-[40px] md:mt-[0px] md:max-w-[620px]  flex flex-col items-center md:items-start gap-y-[20px] md:gap-y-[32px]">
          <h1 className="text-[24px] md:text-[32px] text-[#505D90] text-center md:text-left font-Ubuntu 
          tracking-[-0.96px] md:tracking-[-1.28px] 
          leading-[28.8px] md:leading-[38.4px]">
            <span>Help you know </span>
            <b className="text-[#5777D0]">everything </b>
            <span> about your <br/>
            pet, even when not at home.</span>
          </h1>
          
          <div className="
          w-[74.5px] md:w-full 
          h-[30px] md:h-full
          text-[8px] md:text-[16px]
           ">
          <SignupButton 
            className="
            w-[74.5px] md:w-[123px]
            h-[30px] md:h-[44px]"
            onClick={() => {
            // Add your click handler logic here
            console.log('Signup clicked');
          }}/>
          </div>

        </div>
      
        {/* Right Content - Video */}
        <div className="  w-1/2">
          <div className=" w-full h-full">
          <video
            ref={videoRef}
            className=" w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            select-none
          >
            <source src="/video/page2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section4 组件
const Section4: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="
    mt-[40px] md:mt-[80px]
    max-w-[1240px]
     mx-auto
    overflow-hidden ">
      <div className=" w-full  flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="mt-[40px] md:mt-[0px] md:max-w-[620px] flex flex-col items-center md:items-start gap-y-[20px] md:gap-y-[32px]">
          <h1 className="text-[24px] md:text-[32px] text-[#505D90] text-center md:text-left font-Ubuntu 
          tracking-[-0.96px] md:tracking-[-1.28px] 
          leading-[28.8px] md:leading-[38.4px]">
            <span>Convert medical records into </span>
            <b className="text-[#5777D0]">pet <br/> parent-friendly </b>
            <span> terms for easier <br/>
            understanding.</span>
          </h1>
          
          <div className="
          w-[74.5px] md:w-full 
          h-[30px] md:h-full
          text-[8px] md:text-[16px] ">
          <SignupButton 
            className="
            w-[74.5px] md:w-[123px]
            h-[30px] md:h-[44px]"
            onClick={() => {
            // Add your click handler logic here
            console.log('Signup clicked');
          }}/>
          </div>

        </div>
      
        {/* Right Content - Video */}
        <div className=" w-1/2">
          <div className=" w-full h-full">
          <video
            ref={videoRef}
            className=" w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            select-none
          >
            <source src="/video/page3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};



export {
    Section1_2,
    Section2,
    Section3,
    Section4
};