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
      <div className="
      flex items-center justify-between 
      px-[40px] md:px-[100px] 
      w-full max-w-[1440px] 
      h-[56px] md:h-[100px]">
        
        <button 
          className="block lg:hidden w-[35px] h-[24px] border-none relative"
          onClick={toggleMenu}
        >
          <img src="/toggle.png" alt="Toggle Menu" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] top-[8px]" />
        </button>

        <div className="relative 
          w-[131px] lg:w-[210px] 
          h-[40px] lg:h-[64px]">
          <Image 
            src="/logo.svg" 
            alt="FurSphere Logo" 
            fill
          />
        </div>

        <div className="flex">
          <nav className="
            hidden lg:flex
            flex-row
            justify-between items-center
            w-[382.67px] 
            gap-y-[20px]
            mr-[54px]">
            <Link href="#home" className="text-[16px]  text-[#1A1D1F] font-[Inter] hover:text-[#5676CF] transition-colors">Home</Link>
            <Link href="#product" className="text-[16px] text-[#1A1D1F] font-[Inter] hover:text-[#5676CF] transition-colors">Product</Link>
            <Link href="#quiz" className="text-[16px]  text-[#1A1D1F] font-[Inter] hover:text-[#5676CF] transition-colors">Quiz</Link>
            <Link href="#about" className="text-[16px]  text-[#1A1D1F] font-[Inter] hover:text-[#5676CF] transition-colors">About</Link>
          </nav>
          <button className="relative 
          hidden md:block
           md:w-[123px] 
           md:h-[44px] 
          bg-gradient-to-r from-[#5676CF] to-[#AFBFE9] text-white 
           md:text-[16px]
          font-bold rounded-[22px] border-none hover:brightness-75 transition-all">
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
