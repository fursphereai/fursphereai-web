import React from 'react';

const Section5: React.FC = () => {
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

export default Section5; 