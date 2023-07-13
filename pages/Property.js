import Image from 'next/image'
import React from 'react'
import firstproject from '../public/assets/images/Projects/Furniture_website_ss.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

function Property() {
  return (
    <div className='w-full'>
      <div className='h-[30vh] w-screen lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 ' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={firstproject} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10'>
          <h2 className='py-2'>Furniture Products Website</h2>
          <h3>Reactjs/Tailwind</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Property</p>
          <h2>Overview</h2>
          <p>In This Project I have Created Ui On Base of Given Figma Using
            Bootstrap ,Scss And ReactJs, Tailwind
          </p>
          <Link href='/' >
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
      
          <button className='px-8 py-2 mt-4 '>Code</button>
        </div>

        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />React
              </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Tailwindcss
              </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Slick-slider
              </p>
            </div>
          </div>
        </div>


        <Link href='/#project'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>

    </div>
  )
}

export default Property
