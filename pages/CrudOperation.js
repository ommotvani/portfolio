import React from 'react'
import thirdproject from '../public/assets/images/Projects/crud.png'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'

function CrudOperation() {
    return (
        <div className='w-full'>
            <div className='h-[30vh] w-screen lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 ' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={thirdproject} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10'>
                    <h2 className='py-2'>Crud Operation</h2>
                    <h3>Reactjs/Reactstrap</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Crud operation</p>
                    <h2>Overview</h2>
                    <p>In This Project I have Listing Data From Api, And Perform Crud
                        Operation On Those Data. And Adding Like Unlike Functionality
                    </p>
                    <Link href='https://sparkling-gecko-c40882.netlify.app/' target='blank' >
                        <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                    </Link>
                    
                    <Link href='https://github.com/ommotvani/crud-operations' target='blank'>
                    <button className='px-8 py-2 mt-4 '>Code</button>
                    </Link>
                  
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

export default CrudOperation
