import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <div className='flex flex-col items-center justify-center my-10 gap-[1rem]'>
      <h1 className='text-6xl font-extrabold my-[4rem]'>CONTACT US</h1>
      <h2 className='text-4xl font-semibold'>looks Empty :(</h2>
      <h2 className='my-[4rem]'>
        <Link to="/about" className='font-mono text-2xl text-blue-500 hover:underline'>About Us {">>>"}</Link>
      </h2>
    </div>
  )
}

export default Contact