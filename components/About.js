import React from 'react'
import AboutImg from '../public/assets/images/About.jpg'
import Image from 'next/image'

function About() {
    return (
        <div id='about' className='w-full md:h-scrren p-2 py-16 items-center'>

            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <p className='py-2 text-gray-600'>
                        I specialize in building mobile responsive front-end UI applications
                        that connect with API's and other  technologies. I'm
                        passionate about learning new technologies and understand there is
                        more than one way to accomplish a task. Though I am most proficient
                        in building front-end applications using HTML, CSS, Javascript, and
                        React, I am a quick learner and can pick up new tech stacks as
                        needed. I believe that being a great developer is not using one
                        specific language, but choosing the best tool for the job.
                    </p>
                    <p className='py-2 text-gray-600'>
                        I don't like to define myself by the work I've done. I define myself
                        by the work I want to do. Skills can be taught, personality is
                        inherent. I prefer to keep learning, continue challenging myself,
                        and do interesting things that matter
                    </p>

                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={AboutImg} className='rounded-xl' alt='about section image' />

                </div>
            </div>
        </div>
    )
}

export default About
