import React from 'react'
import { BiLogoMongodb, BiLogoTailwindCss } from 'react-icons/bi'
import { FaBootstrap, FaNode, FaReact } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'

const Skill = () => {
  return (
    <>
        <div className='lg:px-50 py-15 px-5 sm:h-screen h-full w-full'>
            <div>
                {/* heading  */}
                <h1 className='text-white font-bold text-4xl text-center pb-10'>My Skills</h1>
                {/* skills in boxes  */}
                <div className='flex gap-[20px] flex-row flex-nowrap justify-center items-center content-center'>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><FaReact className='text-blue-400 text-6xl' /> <h1 className='text-white'>React.js</h1></div>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><SiExpress className='text-black text-6xl' /> <h1 className='text-white'>Express.js</h1></div>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><FaNode className='text-green-400 text-6xl' /> <h1 className='text-white'>Node.js</h1></div>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><BiLogoMongodb className='text-green-700 text-6xl' /> <h1 className='text-white'>MongoDB</h1></div>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><BiLogoTailwindCss className='text-blue-400 text-6xl' /> <h1 className='text-white'>Tailwind CSS</h1></div>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><FaBootstrap className='text-purple-800 text-6xl' /> <h1 className='text-white'>Bootstrap</h1></div>
                </div>
                <div className='flex gap-[20px] flex-row flex-nowrap justify-center items-center content-center'>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><FaReact className='text-blue-400 text-6xl' /> <h1 className='text-white'>React.js</h1></div>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><SiExpress className='text-black text-6xl' /> <h1 className='text-white'>Express.js</h1></div>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><FaNode className='text-green-400 text-6xl' /> <h1 className='text-white'>Node.js</h1></div>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><BiLogoMongodb className='text-green-700 text-6xl' /> <h1 className='text-white'>MongoDB</h1></div>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><BiLogoTailwindCss className='text-blue-400 text-6xl' /> <h1 className='text-white'>Tailwind CSS</h1></div>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><FaBootstrap className='text-purple-800 text-6xl' /> <h1 className='text-white'>Bootstrap</h1></div>
                </div>
                <div className='flex gap-[20px] flex-row flex-nowrap justify-center items-center content-center'>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><FaReact className='text-blue-400 text-6xl' /> <h1 className='text-white'>React.js</h1></div>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><SiExpress className='text-black text-6xl' /> <h1 className='text-white'>Express.js</h1></div>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><FaNode className='text-green-400 text-6xl' /> <h1 className='text-white'>Node.js</h1></div>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><BiLogoMongodb className='text-green-700 text-6xl' /> <h1 className='text-white'>MongoDB</h1></div>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><BiLogoTailwindCss className='text-blue-400 text-6xl' /> <h1 className='text-white'>Tailwind CSS</h1></div>
                    <div className='grow-[2] p-6 font-bold text-xl rounded-3xl flex flex-col items-center gap-2'><FaBootstrap className='text-purple-800 text-6xl' /> <h1 className='text-white'>Bootstrap</h1></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skill