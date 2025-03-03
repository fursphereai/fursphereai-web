import React from 'react';
import Image from 'next/image';
import SocialButton from './common/SocialButton';
import SubscribeButton from './common/SubscribeButton';

const Footer = () => {
  const handleSubscribe = () => {
    // 处理订阅逻辑
    console.log('Subscribe clicked');
  };

  return (
    <div className="flex justify-center  mt-0 max-w-[1440px] w-full  bg-[#5777D0] h-[414px] md:h-[364px] overflow-hidden flex-shrink-0 text-center font-Inter text-[#D1D7EF]">
      <div className="my-[40px] md:my-[52px]  frame-group w-full max-w-[1240px]  flex flex-col items-start justify-start gap-y-[40px] md:gap-[90px]">
        {/* Upper Section */}
        
        <div className=" w-full frame-container  flex flex-col md:flex-row items-center md:items-start justify-between px-[40px] gap-y-[40px]">
          {/* Left Side - Social Links */}
          <div className="button-parent   flex flex-row items-center justify-start gap-[12px]">
            <SubscribeButton onClick={handleSubscribe} darkMode={true} />
            <div className="or-join relative text-[14px] text-[#F5F5F5] text-left">or join</div>
            <SocialButton 
              href="https://discord.gg/fursphere"
              icon="/discord-icon.svg"
              alt="Discord"
              isWhiteBg={false} // 添加 isFooter 属性
            />
            <SocialButton 
              href="https://www.instagram.com/fursphere"
              icon="/instagram.svg"
              alt="Instagram"
              isWhiteBg={true}
              variant="dark"
            />
            <SocialButton 
              href="https://www.facebook.com/fursphere"
              icon="/facebook.svg"
              alt="Facebook"
              isWhiteBg={true}
              variant="dark"
            />
          </div>

          {/* Right Side - Links */}
          <div className=" frame-div flex flex-row items-start  gap-[60px]  text-white ">
            <FooterLinkGroup title="Company" links={['Terms of Use', 'Support', 'Privacy Policy']} />
            <FooterLinkGroup title="Contact" links={['Linkedin', 'Youtube']} />
          </div>
        </div>

        {/* Bottom Section */}
        <FooterBottom />
      </div>
    </div>
  );
};

// 新增的子组件
const FooterLinkGroup = ({ title, links }: { title: string, links: string[] }) => (
  <div className={`${title.toLowerCase()}-parent   w-auto flex flex-col items-center justify-center gap-y-[20px]`}>
    <div className="company  relative tracking-[-0.64px] leading-[16px] text-[14px] md:text-[16px] font-[700]">{title}</div>
    <div className="terms-of-use-parent flex flex-col gap-[12px] text-[14px] md:text-[16px] font-[400]">
      {links.map((link, index) => (
        <div key={index}>{link}</div>
      ))}
    </div>
  </div>
);

const FooterBottom = () => (
  <div className="frame-parent1 self-stretch gap-y-[40px] md:gap-y-[0px]
  flex flex-col-reverse md:flex-row items-center md:items-end justify-between 
  px-[40px] 
  text-left text-[14px] text-[#E8EBF6]">

    <div className=" copyright-2025-fursphere-al-parent flex flex-row  md:flex-col items-center md:items-start justify-between w-[307px] h-[30px] md:h-[61.8px]">
      
      <div className="flex flex-row ml-0 md:ml-[8.6px] items-center justify-left fursphere-parent  max-w-[109px] w-full   text-white font-['Baloo_2']">
          <div className="w-[27px] h-[27px]">
            <Image
              src="/footer-logo.svg"
              alt="Fursphere Logo"
              width={27}
              height={27}
              className="frame-child w-full h-full"
          />
        </div>
        <div className="fursphere text-[14px] md:text-[16px] font-[800] ml-[5.7px]">
          Fursphere
        </div>
      </div>

      <div className="copyright-2025 ml-0 md:ml-[8.6px] text-[8px] md:text-[14px]  tracking-[-0.04em] leading-[100%]">
        Copyright © 2025 Fursphere. All rights reserved.
      </div>
    </div>

    <div className=" 
    text-[36px] md:text-[40px] font-[700] 
    tracking-[-0.04em] leading-[100%] font-['Baloo_2'] bg-gradient-to-b from-white to-white bg-clip-text text-transparent">
      Start caring more
    </div>
  </div>
);

export default Footer;

