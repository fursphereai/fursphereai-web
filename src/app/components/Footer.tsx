import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5777D0] h-[364px] overflow-hidden text-center font-Inter text-[#D1D7EF]">
      <div className="w-[calc(100%-200px)] mx-[100px] mt-[51.78px] flex flex-col gap-[90px]">
        {/* Upper Section */}
        <div className="w-full flex justify-between px-10">
          {/* Left Side - Subscribe and Social */}
          <div className="flex items-center gap-3">
            <button className="bg-[#27355D] h-11 px-8 rounded-[22px] flex items-center justify-center">
              <span className="font-semibold">Subscribe</span>
            </button>
            <span className="text-sm text-[#F5F5F5] text-left">or join</span>
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="w-11 h-11 rounded-[22px] overflow-hidden">
                <Image
                  src="/discord.svg"
                  alt="Discord"
                  width={44}
                  height={44}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Right Side - Links */}
          <div className="flex gap-[60px] text-left text-white">
            {/* Company Links */}
            <div className="w-[97px] flex flex-col gap-5">
              <b className="tracking-[-0.04em]">Company</b>
              <div className="flex flex-col gap-3">
                <Link href="#" className="tracking-[-0.04em]">Terms of Use</Link>
                <Link href="#" className="tracking-[-0.04em]">Support</Link>
                <Link href="#" className="tracking-[-0.04em]">Privacy Policy</Link>
              </div>
            </div>

            {/* Contact Links */}
            <div className="w-[60px] flex flex-col gap-5">
              <b className="tracking-[-0.04em]">Contact</b>
              <div className="flex flex-col gap-3">
                <Link href="#" className="tracking-[-0.04em]">Linkedin</Link>
                <Link href="#" className="tracking-[-0.04em]">Youtube</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex justify-between items-end px-10">
          <div className="relative w-[307px] h-[61.8px]">
            <div className="absolute top-[calc(50%+16.88px)] left-[calc(50%-144.5px)] tracking-[-0.04em] text-sm text-[#E8EBF6]">
              Copyright © 2025 FurSphere. All rights reserved.
            </div>
            <div className="absolute top-0 left-0 w-[126px] h-[38.4px] text-white font-['Baloo_2']">
              <div className="absolute top-[6.44px] left-[calc(50%-21.3px)] text-[16.05px] font-extrabold">
                FurSphere
              </div>
              <Image
                src="/Group 34142.svg"
                alt="FurSphere Logo"
                width={27}
                height={27}
                className="absolute h-[71.35%] w-[21.75%] top-[14.06%] right-[71.43%] bottom-[14.58%] left-[6.83%]"
              />
            </div>
          </div>

          <b className="text-[40px] tracking-[-0.04em] font-['Baloo_2'] bg-gradient-to-b from-white to-white bg-clip-text text-transparent">
            Start Caring More.
          </b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

