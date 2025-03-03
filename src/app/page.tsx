"use client";

import React from 'react';
import Header from './components/header';
import Section1 from './components/sections/Section1';
import  {Section1_2, Section2, Section3, Section4}  from './components/sections/Sections';
import Section5 from './components/sections/Section5';
import Footer from './components/Footer';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex flex-col w-full  ">
        <Section1 />
        <Section1_2 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
