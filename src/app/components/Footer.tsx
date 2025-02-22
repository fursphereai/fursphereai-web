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
    <div className="frame-parent w-full relative bg-[#5777D0] h-[364px] overflow-hidden flex-shrink-0 text-center font-Inter text-[#D1D7EF]">
      <div className="frame-group w-[calc(100%-200px)] absolute top-[51.78px] right-[100px] left-[100px] flex flex-col items-start justify-start gap-[90px]">
        {/* Upper Section */}
        <div className="frame-container self-stretch flex flex-row items-start justify-between px-[40px]">
          {/* Left Side - Social Links */}
          <div className="button-parent flex flex-row items-center justify-start gap-[12px]">
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
          <div className="frame-div flex flex-row items-start justify-start gap-[60px] text-left text-white">
            <FooterLinkGroup title="Company" links={['Terms of Use', 'Privacy Policy']} />
            <FooterLinkGroup title="Contact" links={['Email', 'Support']} />
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
  <div className={`${title.toLowerCase()}-parent w-[97px] flex flex-col items-start justify-start gap-[20px]`}>
    <div className="company self-stretch relative tracking-[-0.04em] leading-[100%]">{title}</div>
    <div className="terms-of-use-parent self-stretch flex flex-col items-start justify-start gap-[12px]">
      {links.map((link, index) => (
        <div key={index}>{link}</div>
      ))}
    </div>
  </div>
);

const FooterBottom = () => (
  <div className="frame-parent1 self-stretch flex flex-row items-end justify-between px-[40px] text-left text-[14px] text-[#E8EBF6]">
    <div className="copyright-2025-fursphere-al-parent w-[307px] relative h-[61.8px]">
      <div className="fursphere-parent absolute top-0 left-0 w-[126px] h-[38.4px] text-[16.05px] text-white font-['Baloo_2']">
        <Image
          src="/logo.svg"
          alt="Fursphere Logo"
          width={27}
          height={27}
          className="frame-child absolute h-[71.35%] w-[21.75%] top-[14.06%] right-[71.43%] bottom-[14.58%] left-[6.83%]"
        />
        <div className="fursphere absolute top-[6.44px] left-[calc(50%-21.3px)] font-extrabold">
          Fursphere
        </div>
      </div>
      <div className="copyright-2025 absolute top-[calc(50%+16.88px)] left-[calc(50%-144.5px)] tracking-[-0.04em] leading-[100%]">
        Copyright © 2025 Fursphere. All rights reserved.
      </div>
    </div>
    <div className="start-caring-more relative text-[40px] tracking-[-0.04em] leading-[100%] font-['Baloo_2'] bg-gradient-to-b from-white to-white bg-clip-text text-transparent">
      Start caring more
    </div>
  </div>
);

export default Footer;

