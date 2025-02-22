import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

// Section1-5的基础容器样式
const sectionBaseStyles = "flex flex-col md:flex-row items-center justify-between max-w-[1440px] w-full min-h-[640px] mx-auto px-4 md:px-8 lg:px-20 py-10 md:py-16";

// Section1 组件
const Section1 = () => {
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const textSequence = ["HEALTH", "FOOD", "DAILY LIVES"];
  const [displayText, setDisplayText] = useState(textSequence[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const videoInterval = setInterval(() => {
      const video = video1Ref.current;
      if (video) {
        video.play();
        setTimeout(() => {
          video.pause();
        }, video.duration * 1000);
      }
    }, 20000);

    let textIndex = 0;
    const textInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        textIndex = (textIndex + 1) % textSequence.length;
        setDisplayText(textSequence[textIndex]);
        setFade(true);
    }, 2000);
    }, 3000);

    return () => {
      clearInterval(videoInterval);
      clearInterval(textInterval);
    };
  }, []);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="w-screen bg-white flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-20">
      {/* 左侧内容 */}
      <div className="flex flex-col items-center w-full md:w-1/2 aspect-[1440/640] object-cover">
        <video
          className="relative w-[72vw] md:w-full max-w-[700px] aspect-[700/630]"
          ref={video1Ref}
          autoPlay
          loop={false}
          muted
          style={{
            clipPath: "inset(1% 1% 1% 1%)",
          }}
        >
          <source src="/video/landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 右侧内容 */}
      <div className="items-center flex flex-col text-left gap-y-[20px] lg:gap-y-[32px] w-full md:w-1/2 md:items-start">
        <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-UbuntuLight text-[#505D90] lg:w-[447px] max-w-[480px] text-center md:text-left md:leading-[48.8px] lg:leading-[57.6px] tracking-[-0.04em] md:ml-[45px] lg:ml-[80px]">
          A pet concierge that<br />
          manages your pets' <br />
          <span className="font-balooExtraBold text-[32px] md:text-[48px] lg:text-[64px] bg-gradient-to-t from-[#AFBFE9] via-[#5777D0] to-[#AFBFE9] bg-clip-text text-transparent">
            {displayText}
          </span>
        </h1>

        {/* Email subscription and Discord link */}
        <div className="flex flex-row items-center w-[250.76px] md:w-[443px] space-x-[10px] md:space-x-[9px] lg:space-x-[12px] md:ml-[45px] lg:ml-[80px]">
          {/* 邮件订阅框 */}
          <div className="flex items-center bg-[#E8EBF6] rounded-full shadow-md w-[260px] md:w-[260px] lg:w-[321px] aspect-[321/50] max-w-[321px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent text-[9.33px] md:text-[13px] outline-none text-gray-600 placeholder-gray-400 px-4"
            />
            <button 
              className="bg-custom-gradient text-white font-[700] w-[73.92px] md:w-[100px] lg:w-[132px] aspect-[132/50] max-w-[132px] ml-[-9.17vw] rounded-full shadow-md flex items-center justify-center transition duration-10 hover:brightness-75 h-full"
              onClick={handleOpenPopup}
            >
              <span className="text-[9.33px] md:text-[13px] lg:text-[16px] max-w-[132px]">
                Subscribe
              </span>
            </button>
          </div>

          {/* Discord链接 */}
          <span className="relative text-[8px] md:text-[11px] lg:text-[13px] max-w-[38px] text-[#A4AAC2] whitespace-nowrap">
            or join
          </span>

          <Link href="https://discord.gg/676cBXbZhW">
            <Image
              src="/discord-icon.svg"
              alt="Discord Icon"
              width={50}
              height={50}
              className="w-[28px] md:w-[41px] lg:w-[50px] max-w-[50px] h-auto transition duration-10 hover:brightness-75"
            />
          </Link>
        </div>

        {/* 应用商店按钮 */}
        <div className="flex items-center space-x-[25px] lg:space-x-[31px] md:w-[300px] lg:w-[433px] md:ml-[45px] lg:ml-[80px]">
          <Image
            src="/apple-logo.svg"
            alt="Apple"
            width={201}
            height={59.21}
            className="h-auto transition duration-300 hover:brightness-75 w-[116px] md:w-[160px] lg:w-[201px]"
          />
          <Image
            src="/google-logo.svg"
            alt="Google"
            width={201}
            height={59.21}
            className="h-auto transition duration-300 hover:brightness-75 w-[116px] md:w-[160px] lg:w-[201px]"
          />
        </div>
      </div>

      {/* 订阅成功弹窗 */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-md w-full transform transition-transform duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-[#505D90] mb-4">
              Success!
            </h2>
            <p className="text-gray-600 mb-6">
              Please check your email address for additional instructions
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleClosePopup}
                className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Section2 组件
const Section2 = () => {
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
const Section3 = () => {
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
const Section4 = () => {
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

// Section5 组件
const Section5 = () => {
  return (
    <section className="w-screen bg-[#E8EBF6] overflow-x-hidden">
      <div className="w-full flex justify-center px-4 md:px-8 lg:px-[100px]">
        <div className="w-full max-w-[1440px] h-[383px] flex flex-row items-center justify-center gap-[29px]">
          <div className="relative w-[497px] leading-[120%] text-[32px] text-[#3E3E3E] font-Ubuntu">
            <p className="m-0">
              <span className="font-medium">
                FurSphere gives you an all-in-one{" "}
              </span>
            </p>
            <p className="m-0">
              <b className="text-[#5777D0]">AI pet care companion</b>
            </p>
            <p className="m-0">anytime, anywhere</p>
          </div>
          
          <div className="relative w-[418.3px] h-[382.9px]">
            <img
              src="/page5.svg"
              alt="FurSphere Features"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// 主Sections组件
const Sections = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-20 md:space-y-32">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default Sections;