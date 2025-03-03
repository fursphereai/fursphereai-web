import React from 'react';

const Section5: React.FC = () => {
    return (
      <section className="w-full max-w-[1440px] mx-auto 
      h-[224px] md:h-[383px]
      bg-[#E8EBF6] 
      mt-[40px] md:mt-[80px] ">
        <div className=" w-full h-full flex flex-row justify-center justify-center">
            
            <div className=" ml-[70px] md:ml-[0px] w-1/2 flex flex-col items-end justify-center 
            leading-[120%] text-[23.16px] md:text-[32px] text-[#3E3E3E] font-Ubuntu">
              <div className=" text-start  leading-[120%]  text-[#3E3E3E] font-Ubuntu">
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
            </div>


            <div className="  mr-[70px] md:mr-[0px] w-1/2 flex flex-col items-start justify-center">
             {/* <div className='flex flex-row items-center justify-center'> */}
             <div className="w-full h-full ml-[20px] md:ml-[29px]">
              <img
                src="/page5.svg"
                alt="FurSphere Features"
                className="w-full h-full "
              />
             </div>
             </div>
            </div>
          {/* </div> */}
       
      </section>
    );
  };

export default Section5; 