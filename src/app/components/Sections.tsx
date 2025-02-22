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

  return (
    <section className={`${sectionBaseStyles} mt-[70px] md:mt-[100px]`}>
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
        <video
          className="w-full max-w-[700px] rounded-[20px] md:rounded-[40px]"
          ref={video1Ref}
          autoPlay
          loop={false}
          muted
          style={{ clipPath: "inset(1% 1% 1% 1%)" }}
        >
          <source src="/video/landing.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 md:space-y-8">
        <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-UbuntuLight text-[#505D90] lg:w-[447px] max-w-[480px] text-center md:text-left md:leading-[48.8px] lg:leading-[57.6px] tracking-[-0.04em] md:ml-[45px] lg:ml-[80px]">
          A pet concierge that<br />
          manages your pets' <br />
          <span className="font-balooExtraBold text-[32px] md:text-[48px] lg:text-[64px] bg-gradient-to-t from-[#AFBFE9] via-[#5777D0] to-[#AFBFE9] bg-clip-text text-transparent">
            {displayText}
          </span>
        </h1>

        {/* Email subscription and Discord link */}
        <div className="flex flex-row items-center w-[250.76px] md:w-[443px] space-x-[10px] md:space-x-[9px] lg:space-x-[12px] md:ml-[45px] lg:ml-[80px]">
          {/* ... 其余Section1的JSX代码 ... */}
        </div>
      </div>
    </section>
  );
};

// Section2 组件
const Section2 = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className={sectionBaseStyles}>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 md:space-y-8 order-2 md:order-1">
        <h1 className="text-[24px] md:text-[36px] lg:text-[48px] text-[#505D90] font-Ubuntu text-center md:text-left">
          Compare prices across <br />
          <span className="text-[#5777D0]">10+</span> stores best pet <br />
          supplies.
        </h1>
        <button className="w-[120px] md:w-[149px] h-[48px] bg-gradient-to-br from-[#5676CF] to-[#AFBFE9] text-white rounded-full">
          Sign up
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
        <video
          className="w-full max-w-[700px] rounded-[20px] md:rounded-[40px]"
          ref={videoRef}
          autoPlay
          loop
          muted
          style={{ clipPath: "inset(1% 1% 1% 1%)" }}
        >
          <source src="/video/page1.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

// Section3 组件
const Section3 = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className={sectionBaseStyles}>
      <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
        <video
          className="w-full max-w-[700px] rounded-[20px] md:rounded-[40px]"
          ref={videoRef}
          autoPlay
          loop={false}
          muted
          onMouseEnter={handleMouseEnter}
          style={{ clipPath: "inset(1% 1% 1% 1%)" }}
        >
          <source src="/video/page2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 md:space-y-8 order-1 md:order-2">
        <h1 className="text-[24px] md:text-[36px] lg:text-[48px] text-[#505D90] font-Ubuntu text-right md:text-left">
          Help you know{" "}
          <span className="text-[#5777D0]">everything</span> <br />
          about your pet, even when<br />
          not at home.
        </h1>
        <button className="w-[120px] md:w-[149px] h-[48px] bg-gradient-to-br from-[#5676CF] to-[#AFBFE9] text-white rounded-full">
          Subscribe
        </button>
      </div>
    </section>
  );
};

// Section4 组件
const Section4 = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className={sectionBaseStyles}>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 md:space-y-8 order-2 md:order-1">
        <h1 className="text-[24px] md:text-[36px] lg:text-[48px] text-[#505D90] font-Ubuntu text-center md:text-left">
          Convert medical records <br />
          into{" "}
          <span className="text-[#5777D0]">pet parent-friendly</span> <br />
          terms for easier understanding.
        </h1>
        <Link href="https://discord.gg/676cBXbZhW">
          <button className="w-[120px] md:w-[149px] h-[48px] bg-gradient-to-br from-[#5676CF] to-[#AFBFE9] text-white rounded-full">
            Join Discord
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
        <video
          className="w-full max-w-[700px] rounded-[20px] md:rounded-[40px]"
          ref={videoRef}
          autoPlay
          loop={false}
          muted
          onMouseEnter={handleMouseEnter}
          style={{ clipPath: "inset(1% 1% 1% 1%)" }}
        >
          <source src="/video/page3.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

// Section5 组件
const Section5 = () => {
  return (
    <section className="max-w-[1240px] w-[95%] mx-auto mt-10 mb-10 bg-[#E8EBF6] rounded-[25px] overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-[24px] md:text-[36px] lg:text-[48px] text-[#505D90] font-Ubuntu leading-tight">
            FurSphere gives you an <br />
            all-in-one <span className="text-[#5777D0]">AI pet care</span> <br/>
            <span className="text-[#5777D0]">companion</span> <br />
            anytime, anywhere
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/page5.svg"
            alt="Example"
            className="w-full max-w-[500px] h-auto"
          />
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