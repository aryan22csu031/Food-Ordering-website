import React from 'react'
import { Link } from 'react-router-dom'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

function About() {
  return (
    <div className='flex flex-col my-16 items-center'>
      <div className="head flex flex-col items-center">
        <h1 className='text-7xl font-semibold'>About Us</h1>
      </div>
      <div className='flex justify-between gap-[30rem] content-center my-20'>
        <div className="github flex flex-col items-center">
          <div className='flex gap-5'>
          <h1 className='text-6xl font-light text-purple-600'>Github</h1>
          <img src={github} alt="" className='w-[4rem] h-[4rem]' />
          </div>
          <Link to="https://github.com/aryan22csu031" target='__blank' className='my-8 text-2xl hover:underline'>https://github.com/aryan22csu031</Link>
        </div>
        <div className="linkedin flex flex-col items-center">
          <div className='flex gap-5'>
          <h1 className='text-6xl font-light text-blue-600'>Linkedin</h1>
          <img src={linkedin} alt="" className='w-[4rem] h-[4rem]' />
          </div>
          <Link to="https://www.linkedin.com/in/aryan-arora-064082208" target='__blank' className='my-8 text-2xl hover:underline'>https://www.linkedin.com/in/aryan-arora-064082208</Link>
        </div>
      </div>
    </div>
  )
}

export default About
