import React from 'react'

const Projects = () => {
  return (
    <>
    <div className="lg:px-52 py-15 px-6 min-h-screen w-full overflow-x-hidden">
        <div>
          {/* heading */}
          <h1 className="text-white font-bold sm:text-4xl text-3xl text-center sm:pb-15 pb-8">
            My Projects    
          </h1>
          {/* projects grid box  */}
          <div>
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-4'>
                <div className='bg-gray-500 w-full h-80'></div>
                <div className='bg-gray-500 w-full h-80'></div>
                <div className='bg-gray-500 w-full h-80'></div>

            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Projects