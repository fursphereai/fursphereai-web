import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

// Section1-5的基础容器样式
const sectionBaseStyles = "flex flex-col md:flex-row items-center justify-between max-w-[1440px] w-full min-h-[640px] mx-auto px-4 md:px-8 lg:px-20 py-10 md:py-16";

// Section2 组件
const Section2: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="w-full relative bg-white h-[560px] overflow-hidden text-left text-[32px] text-[#505D90] font-Ubuntu">
      <div className="absolute top-0 left-[calc(50%-620px)] w-[1240px] flex flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-[520px] flex flex-col items-start gap-8">
          <h1 className="text-[32px] text-[#505D90] font-Ubuntu tracking-[-0.04em] leading-[120%]">
            Compare prices across <br />
            <span className="text-[#5777D0]">10+</span> stores best pet <br />
            supplies.
          </h1>
          <button className="rounded-[22px] bg-[#5777D0] h-11 overflow-hidden flex flex-row items-center justify-center px-8 text-white font-semibold">
            Sign up
          </button>
        </div>

        {/* Right Content - Video */}
        <div className="w-[630px] relative bg-white h-[560px]">
          <video
            ref={videoRef}
            className="absolute top-[calc(50%-280px)] left-[calc(50%-315px)] w-[630px] h-[560px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/page1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

// Section3 组件
const Section3: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="w-full relative bg-white h-[560px] overflow-hidden text-left text-[32px] text-[#505D90] font-Ubuntu">
      <div className="absolute top-0 left-[calc(50%-620px)] w-[1240px] flex flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-[520px] flex flex-col items-start gap-8">
          <div className="w-[520px] tracking-[-0.04em] leading-[120%]">
            <span>Track your pets' </span>
            <b className="text-[#5777D0]">health records </b>
            <span>and get reminders for upcoming appointments.</span>
          </div>
          
          <div className="flex flex-row items-center justify-end text-center text-base text-white font-Inter">
            <button className="rounded-[22px] bg-[#5777D0] h-11 overflow-hidden flex flex-row items-center justify-center px-8">
              <span className="font-semibold">Get Started</span>
            </button>
          </div>
        </div>

        {/* Right Content - Video */}
        <div className="w-[630px] relative bg-white h-[560px]">
          <video
            ref={videoRef}
            className="absolute top-[calc(50%-280px)] left-[calc(50%-315px)] w-[630px] h-[560px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/page2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

// Section4 组件
const Section4: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="w-full relative bg-white h-[560px] overflow-hidden text-left text-[32px] text-[#505D90] font-Ubuntu">
      <div className="absolute top-0 left-[calc(50%-620px)] w-[1240px] flex flex-row items-center justify-between">
        <div className="w-[520px] flex flex-col items-start gap-8">
          <div className="w-[520px] tracking-[-0.04em] leading-[120%]">
            <span>Convert medical records into </span>
            <b className="text-[#5777D0]">pet parent-friendly </b>
            <span>terms for easier understanding.</span>
          </div>
          
          <Link href="https://discord.gg/676cBXbZhW">
            <button className="relative rounded-[22px] bg-[#5777D0] w-full h-[44px] overflow-hidden flex flex-row items-center justify-center px-8 box-border text-center text-base text-white font-Inter font-semibold hover:bg-[#4666BF] transition-colors">
              Join Discord
            </button>
          </Link>
        </div>

        {/* Right Content - Video with iPhone frame */}
        <div className="w-[630px] relative bg-white h-[560px] text-center text-[8.5px] text-[#0D0D0E] font-['SF_Pro_Text']">
          <video
            ref={videoRef}
            className="absolute top-[calc(50%-280px)] left-[calc(50%-315px)] w-[630px] h-[560px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/page3.mp4" type="video/mp4" />
          </video>
          {/* Highlight Effect */}
          <div className="absolute top-[127.5px] left-[396.5px] shadow-[0px_10px_40px_#7EABFA] rounded-full bg-[rgba(175,191,236,0.5)] border-5 border-solid border-white box-border w-9 h-9 opacity-0" />
        </div>
      </div>
    </section>
  );
};

export {
    Section2,
    Section3,
    Section4
};