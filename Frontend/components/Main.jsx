"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

function Main() {
  const [fadeIn, setFadeIn] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = mainRef.current.getBoundingClientRect();
      const isVisible = top < window.innerHeight;
      setFadeIn(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center mx-auto md:px-12 md:flex-row ${
        fadeIn ? 'fade-in' : ''
      }`}
      ref={mainRef}
    >
      <div className='mb-14 lg:mb-0 lg:w-1/2'>
        <br />
        <br />
        <br />
        <h1 className='text-2xl leading-none text-indigo-950 font-bold font-sans lg:text-5xl sm:text-xl sm:ml-4 text-center lg:text-left lg:leading-tight mb-5 sm:pt-14 sm:mb-12'>
          Connect, Collaborate, and Conquer the Coding World with DevsKonnekt
        </h1>
        <p className='text-indigo-950 font-light font-sans'>
          Join the ultimate platform for developers to connect, chat and explore local developer events in your community
        </p>
        <br />
        <div className='flex justify-start items-center'>
          <button className='text-white text-base sm:text-lg bg-indigo-600 font-medium rounded-lg px-6 py-3 w-[150px] sm:w-[20%] text-center'>
            Join Us
          </button>
          <button className='text-indigo-600 text-base sm:text-lg bg-white font-medium rounded-lg border border-indigo-600 px-6 py-3 ml-4 w-[150px] sm:w-[20%] text-center hover:bg-indigo-600 hover:text-white'>
            Contact
          </button>
        </div>
      </div>
      <div>
        <br />
        <br />

        <Image src='/developers-img.jpeg' alt='/' width='800' height='700' loading='lazy' className='rounded-md' />
      </div>
    </div>
  );
}

export default Main;