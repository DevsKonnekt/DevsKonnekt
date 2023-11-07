import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


// text-[2.9rem] leading-none text-gray-900 font-extrabold font-sans text-center

function Main() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center mx-auto md:px-12 md:flex-row'>
        <div className='mb-14 lg:mb-0 lg:w-1/2'>
            <h1 className='text-3xl leading-none text-gray-900 font-bold font-sans lg:text-5xl lg:text-left lg:leading-tight mb-5'>
                Connect, Collaborate, and Conquer the Coding World with DevsKonnekt
            </h1>
            <div className='flex justify-start items-center'>
                <button className='text-white text-2xl bg-indigo-600 font-medium rounded-lg px-6 py-3 w-[300px] sm:w-[60%] text-center'> Join Now </button>
            </div>
        </div>
        <div>
            <Image 
                src='/developers-img.jpeg'
                alt='/'
                width='800'
                height='700'
                loading='lazy'
                className='rounded-md'
            />
        </div>
    </div>
  )
}

export default Main