"use client";

import React,{ useEffect, useRef, useState } from 'react';
import Header from './components/header';
import Sections from './components/Sections';
import Footer from './components/Footer';

const Home = () => {



  const [avatarUrl, setAvatarUrl] = useState(''); 

  useEffect(() => {
    const avatarPath = 'widget-avatars/rJ5W3JR1ALahUS4QSt7MhVatf89Vn9LSSY1dUzaRQQ8/lURE0N8GGwPSIoS_wZ4AwK99qHJFsa7PVsTTJ6TUkgmhwVn7d5HLVbC3yw8Ts-xHjwWkUelmtOzVvqWJbw0';
    setAvatarUrl(`/api/proxy/${encodeURIComponent(avatarPath)}`);
  }, []);



  // const hasPlayed = useRef([false, false, false]); 


  // useEffect(() => {
  //   const observers = videoRefs.map((videoRef, index) => {
  //     const video = videoRef.current;

  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         console.log(`Video ${index + 1} intersection ratio:`, entry.intersectionRatio);
  //         if (entry.isIntersecting && entry.intersectionRatio >= 0.99 && !hasPlayed.current[index]) {
  //           console.log(`Playing video ${index + 1} due to scroll...`);
  //           video?.play();
  //           hasPlayed.current[index] = true; 
  //         }
  //       },
  //       { threshold: 0.99 } 
  //     );

  //     if (video) {
  //       observer.observe(video);
  //     }

  //     return observer;
  //   });


  //   return () => {
  //     observers.forEach((observer, index) => {
  //       const video = videoRefs[index].current;
  //       if (video) {
  //         observer.unobserve(video);
  //       }
  //     });
  //   };
  // }, []);


  return (
    <main>
      <Header />
      <Sections />
      <Footer />
    </main>
  );
};

export default Home;
