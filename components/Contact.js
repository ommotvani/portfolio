import Image from 'next/image'
import React, { useRef } from 'react'
import contactus from '../public/assets/images/contact.jpg'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef()

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     console.log('e: ', e);

    //     emailjs.sendForm('service_k75cknl', 'template_aov1v1o', form.current, '5V5QJahW4H6TG1Px6')
    //     .then((result) => {
    //        alert(result.text)
    //        alert("email sent suceefully")
    //     }, (error) => {
    //         alert(error.text)
    //     });

    // }
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='m-auto px-2 py-16 max-w-[1240px] w-full '>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
                <h2 className=' py-4'>Get In Touch</h2>

                <div className='grid lg:grid-cols-5 gap-8'>

                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full '>
                            <div>
                                <Image src={contactus} className='rounded-xl hover:scale-105 ease-in duration-300' alt='/' />
                            </div>
                            <div>
                                <h2 className='py-2'>Om Motvani</h2>
                                <p className=''>Frontend Devloper</p>
                                <p className='py-4'>I Am Available For Freelance Or Full-Time Position. Contact Me And Let's Talk</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex justify-between items-center py-4'>
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


                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>

                            <form action='https://formspree.io/f/xpzgwwez' method='POST'>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input type='text' className='border-2 rounded-lg  p-3 flex border-gray-300' name='name' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input type='text' className='border-2 rounded-lg  p-3 flex border-gray-300' />
                                    </div>
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input type='email' className='border-2 rounded-lg  p-3 flex border-gray-300'  name='email' />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input type='text' className='border-2 rounded-lg  p-3 flex border-gray-300' />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-r rounded-lg p-3 border-gray-300' rows={10} name='message'/>
                                </div>

                                <button type='submit' className='w-full p-4  mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white'>Send Message</button>

                            </form>

                        </div>
                    </div>


                </div>

                <div className='flex justify-center py-12'>
                    <Link href=''>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp size={30} className='text-[#5651e5]' />
                        </div>

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact
