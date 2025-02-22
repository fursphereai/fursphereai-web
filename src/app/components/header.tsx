import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="flex justify-center fixed top-0 bg-white border-b border-[#E8EBF6] z-10 w-full overflow-x-auto border-t-0">
      <div className="flex items-center justify-between px-[30px] md:px-[80px] py-[10px] w-full max-w-[1440px] h-[40px] sm:h-[50px] md:h-[70px] lg:h-[100px]">
        
        <button 
          className="hidden max-lg:block w-[35px] h-[24px] border-none relative"
          onClick={toggleMenu}
        >
          <img src="/toggle.png" alt="Toggle Menu" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] top-[8px]" />
        </button>

        <div className="relative w-[96px] h-[28.8px] sm:w-[120px] sm:h-[36px] md:w-[180px] md:h-[54px] lg:w-[210px] lg:h-[64px] max-[290px]:hidden">
          <Image 
            src="/logo.svg" 
            alt="FurSphere Logo" 
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="flex">
          <nav className="hidden lg:flex justify-end items-center gap-[50px] relative mr-[50px]">
            <Link href="#home" className="text-[16px] py-[8px] text-[#1A1D1F] hover:text-[#5676CF] transition-colors">Home</Link>
            <Link href="#MBTI" className="text-[16px] py-[8px] text-[#1A1D1F] hover:text-[#5676CF] transition-colors">MBTI</Link>
            <Link href="#Partnership" className="text-[16px] py-[8px] text-[#1A1D1F] hover:text-[#5676CF] transition-colors">Partnership</Link>
            <Link href="#about" className="text-[16px] py-[8px] text-[#1A1D1F] hover:text-[#5676CF] transition-colors">About</Link>
          </nav>
          <button className="relative w-[59.6px] h-[24px] sm:w-[74.5px] sm:h-[30px] md:w-[111.75px] md:h-[45px] lg:w-[149px] lg:h-[45px] bg-gradient-to-r from-[#5676CF] to-[#AFBFE9] text-white text-[6.4px] sm:text-[8px] md:text-[12px] lg:text-[16px] font-bold rounded-[24px] border-none hover:brightness-75 transition-all">
            Sign up
          </button>
        </div>
      </div>

      <nav className={`fixed top-0 left-[-250px] w-[200px] h-screen bg-[#5676CF] shadow-md z-[100] flex flex-col items-start pt-[5%] pl-[20px] transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-[250px]' : ''}`}>
        <button className="mb-[40px]" onClick={toggleMenu}>
          <img src="/close.png" alt="Close Menu" className="w-[24px] h-[24px] top-[8px]" />
        </button>
        <Link href="#home" className="text-[16px] py-[8px] text-white hover:text-opacity-75 transition-colors" onClick={closeMenu}>Home</Link>
        <Link href="#MBTI" className="text-[16px] py-[8px] text-white hover:text-opacity-75 transition-colors" onClick={closeMenu}>MBTI</Link>
        <Link href="#Partnership" className="text-[16px] py-[8px] text-white hover:text-opacity-75 transition-colors" onClick={closeMenu}>Partnership</Link>
        <Link href="#about" className="text-[16px] py-[8px] text-white hover:text-opacity-75 transition-colors" onClick={closeMenu}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
