import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

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
        {/* 左侧视频部分 */}
        <div className="flex flex-col items-center w-full md:w-1/2 aspect-[1440/640] object-cover">
          <div className="relative w-[700px] h-[630px]">
            <div className="change-shadow-type-parent relative w-full h-full">
              <video
                className="absolute w-full h-full"
                ref={video1Ref}
                autoPlay
                loop={false}
                muted
                style={{
                  clipPath: "inset(1% 1% 1% 1%)",
                }}
              >
                <source src="/video/landing.mp4" type="video/mp4" />
              </video>
              {/* 添加阴影效果层 */}
              <div className="absolute bottom-0 left-0 w-full">
                <img className="w-full" src="Change Shadow Type.png" alt="" />
              </div>
            </div>
          </div>
        </div>
  
        {/* 右侧内容部分 */}
        <div className="frame-group flex flex-col items-start w-full md:w-1/2 gap-8 pl-8">
          {/* 标题部分 */}
          <div className="a-pet-concierge-that-manage-yo-parent">
            <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-UbuntuLight text-[#505D90] leading-[120%] tracking-[-0.04em]">
              A pet concierge that<br />
              manages your pets' <br />
              <span className="font-balooExtraBold text-[32px] md:text-[48px] lg:text-[64px] bg-gradient-to-t from-[#AFBFE9] via-[#5777D0] to-[#AFBFE9] bg-clip-text text-transparent">
                {displayText}
              </span>
            </h1>
          </div>
  
          {/* 应用商店按钮 */}
          <div className="button-parent w-full relative flex flex-row items-center justify-start gap-[24px]">
            <Link 
              href="https://apps.apple.com/fursphere" 
              target="_blank"
              rel="noopener noreferrer"
              className="button w-[140px] h-[42px] rounded-[30.96px] bg-white border-[1.8px] border-[#EFEFEF] overflow-hidden hover:opacity-80 transition-opacity"
            >
              <Image 
                src="/apple-logo.svg"
                alt="Apple Store"
                width={201}
                height={59.21}
                className="w-full h-full object-cover"
                priority
              />
            </Link>
            <Link 
              href="https://play.google.com/store/apps/details?id=com.fursphere" 
              target="_blank"
              rel="noopener noreferrer"
              className="button w-[140px] h-[42px] rounded-[30.96px] bg-white border-[1.8px] border-[#EFEFEF] overflow-hidden hover:opacity-80 transition-opacity"
            >
              <Image 
                src="/google-logo.svg"
                alt="Google Play"
                width={201}
                height={59.21}
                className="w-full h-full object-cover"
                priority
              />
            </Link>
          </div>

          {/* 社交媒体按钮和链接 */}
          <div className="button-parent flex flex-row items-center justify-start gap-[12px] w-full text-center font-Inter">
            <button 
              onClick={handleOpenPopup}
              className="button h-[44px] bg-[#5777D0] rounded-[22px] overflow-hidden flex flex-row items-center justify-center px-[32px] py-[16px] box-border"
            >
              <div className="button-1 relative font-semibold text-[16px] text-white">Subscribe</div>
            </button>
            <div className="or-join relative text-[13px] leading-[24px] tracking-[-0.01em] text-[#A4AAC2] text-left">or join</div>
            <Link 
              href="https://discord.gg/fursphere"
              target="_blank"
              rel="noopener noreferrer"
              className="discord-icon w-[44px] h-[44px] relative rounded-[22px] overflow-hidden flex-shrink-0"
            >
              <Image
                src="/discord-icon.svg"
                alt="Discord"
                width={44}
                height={44}
                className="w-full h-full"
              />
            </Link>
            <Link 
              href="https://www.instagram.com/fursphere"
              target="_blank"
              rel="noopener noreferrer"
              className="discord-icon w-[44px] h-[44px] relative rounded-[22px] overflow-hidden flex-shrink-0 border border-[#C3C3C3] bg-[#F5F5F5] flex items-center justify-center"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </Link>
            <Link 
              href="https://www.facebook.com/fursphere"
              target="_blank"
              rel="noopener noreferrer"
              className="discord-icon w-[44px] h-[44px] relative rounded-[22px] overflow-hidden flex-shrink-0 border border-[#C3C3C3] bg-[#F5F5F5] flex items-center justify-center"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </Link>
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

export default Section1; 