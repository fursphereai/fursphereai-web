import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import SocialButton from '../common/SocialButton';
import SubscribeButton from '../common/SubscribeButton';
import SuccessPopup from '../common/SuccessPopup';

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
      <section className="
        flex flex-col md:flex-row 
        mt-[96px] md:mt-[100px]
        w-screen max-w-[768px] md:max-w-[1440px] 
        mx-auto 
        items-center justify-center">
        <VideoSection videoRef={video1Ref} />
        <ContentSection 
          displayText={displayText} 
          onSubscribe={handleOpenPopup} 
        />
        <SuccessPopup 
          isOpen={isPopupOpen} 
          onClose={handleClosePopup} 
        />
      </section>
    );
  };

const VideoSection = ({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement> }) => (
  
    <div className="relative 
    flex flex-col 
    max-w-[768px] md:max-w-[700px] 
    items-center justify-center">
      <div className=" 
      flex flex-col items-center justify-center
      h-full w-full  ">
        <video
          className="
          w-full 
          h-full
          select-none
           "
          ref={videoRef}
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
        {/* <div className="absolute bottom-0 left-0 w-full">
          <img className="w-full" src="Change Shadow Type.png" alt="" />
        </div> */}
      </div>
    </div>
  
);

const ContentSection = ({ 
  displayText, 
  onSubscribe 
}: { 
  displayText: string;
  onSubscribe: () => void;
}) => (
  <div className="
   frame-group 
  mt-[40px] md:mt-[0px]
  flex flex-col 
  items-center md:items-start
  w-[704px] md:w-[501px] 
 
  gap-y-[20px] md:gap-y-[32px]">
    <TitleSection displayText={displayText} />
    <StoreButtons />
    <SocialSection onSubscribe={onSubscribe} />
  </div>
);

const TitleSection = ({ displayText }: { displayText: string }) => (
  // [@media(max-width:560px)]:w-1/2
    <h1 className="
    w-full max-[535px]:w-2/3 max-[464px]:w-1/2
    text-[32px] md:text-[48px]
    text-center md:text-left
    font-UbuntuLight 
    text-[#505D90] 
    leading-[38.4px] md:leading-[57.6px] 
    tracking-[-1.2px] md:tracking-[-1.92px]">
      A pet concierge that
      manages your pets' <br />
      <span className="
      font-balooExtraBold 
      leading-[57.6px] md:leading-[76.8px]
      text-[48px] md:text-[64px] 
      bg-gradient-to-t from-[#AFBFE9] via-[#5777D0] to-[#AFBFE9] bg-clip-text text-transparent">
        {displayText}
      </span>
    </h1>
 
);

const StoreButtons = () => (
  <div className="button-parent w-full flex flex-row items-center justify-center md:justify-start gap-[16px] md:gap-[24px]">
    <StoreButton 
      href="https://apps.apple.com/fursphere"
      src="/apple-logo.svg"
      alt="Apple Store"
    />
    <StoreButton 
      href="https://play.google.com/store/apps/details?id=com.fursphere"
      src="/google-logo.svg"
      alt="Google Play"
    />
  </div>
);

const StoreButton = ({ href, src, alt }: { href: string; src: string; alt: string }) => (
  <Link 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="button w-[150.3px] h-[43.8px] rounded-[30.957px] bg-white border-[1.82px] border-[#EFEFEF] overflow-hidden hover:opacity-80 transition-opacity"
  >
    <Image 
      src={src}
      alt={alt}
      width={150.3}
      height={43.8}
      className="w-full h-full object-cover"
      priority
    />
  </Link>
);

const SocialSection = ({ onSubscribe }: { onSubscribe: () => void }) => (
  <div className="button-parent flex flex-row items-center justify-center md:justify-start gap-[12px] w-full text-center font-Inter">
    <SubscribeButton onClick={onSubscribe} />
    <div className="or-join relative text-[13px] leading-[24px] tracking-[-0.01em] text-[#A4AAC2] text-left">
      or join
    </div>
    <SocialButton 
      href="https://discord.gg/fursphere"
      icon="/discord-icon.svg"
      alt="Discord"
    />
    <SocialButton 
      href="https://www.instagram.com/fursphere"
      icon="/instagram.svg"
      alt="Instagram"
      isWhiteBg={true}
      variant="light"
    />
    <SocialButton 
      href="https://www.facebook.com/fursphere"
      icon="/facebook.svg"
      alt="Facebook"
      isWhiteBg={true}
      variant="light"
    />
  </div>
);

export default Section1; 