import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Main() {
    let router = useRouter()
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center  items-center'>
                <div>
                   
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Om</span></h1>
                    <h2 className='py-2 text-gray-700'>A Front-End  Web Developer</h2>
                    <p className='py-4 text-gray-600  max-w-[70%] m-auto'>
                    I'm A Front-end Developer. I've Build Responvie Website And Webapp Using Diffrent Front-end Technologies. I'm Passionate About Creating Great User Experiences And Have A Strong Understanding Of Usability And Accessibility Standards.
                    </p>

                    <div className='flex justify-between items-center max-w-[330px] py-4 m-auto'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>

                            <Link href='https://www.linkedin.com/in/om-motvani-75135020b/' target='_blank' >
                                <FaLinkedinIn />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://github.com/ommotvani' target='_blank' >
                                <FaGithub />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ommotwani06@gmail.com' target='_blank' > 
                             <AiOutlineMail />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Link href='#contact' target='_blank' >
                                <BsFillPersonLinesFill />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
