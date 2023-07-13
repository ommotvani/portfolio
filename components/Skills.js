import Image from 'next/image'
import React from 'react'
import html from '../public/assets/images/skills/html.png'
import css from '../public/assets/images/skills/css.png'
import js from '../public/assets/images/skills/javascript.png'
import tailwind from '../public/assets/images/skills/tailwind.png'
import react from '../public/assets/images/skills/react.png'
import next from '../public/assets/images/skills/nextjs.png'
import materialui from '../public/assets/images/skills/materialui.png'
import firebase from '../public/assets/images/skills/firebase.png'

function Skills() {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] flex flex-col justify-center h-full m-auto'>
                <h2 className='text-xl tracking-widest uppercase text-[#5651e5] py-4 '>Skills</h2>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='gird grid-cols-2 gap-4  justify-center items-center'>

                            <div className='m-auto'>
                                <Image src={html} alt='html' width={64} height={64} />
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <h3>Html</h3>
                            </div>

                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='gird grid-cols-2 gap-4  justify-center items-center'>

                            <div className='m-auto'>
                                <Image src={css} alt='html' width={64} height={64} />
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <h3>Css</h3>
                            </div>

                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='gird grid-cols-2 gap-4  justify-center items-center'>

                            <div className='m-auto'>
                                <Image src={js} alt='html' width={64} height={64} />
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <h3>Javascript</h3>
                            </div>

                        </div>
                    </div>



                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='gird grid-cols-2 gap-4  justify-center items-center'>

                            <div className='m-auto'>
                                <Image src={tailwind} alt='html' width={64} height={64} />
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <h3>Tailwind</h3>
                            </div>

                        </div>
                    </div>


                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='gird grid-cols-2 gap-4  justify-center items-center'>

                            <div className='m-auto'>
                                <Image src={react} alt='html' width={64} height={64} />
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <h3>React</h3>
                            </div>

                        </div>
                    </div>


                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='gird grid-cols-2 gap-4  justify-center items-center'>

                            <div className='m-auto'>
                                <Image src={next} alt='html' width={64} height={64} />
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <h3>Next js</h3>
                            </div>

                        </div>
                    </div>


                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='gird grid-cols-2 gap-4  justify-center items-center'>

                            <div className='m-auto'>
                                <Image src={firebase} alt='html' width={64} height={64} />
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <h3>firebase</h3>
                            </div>

                        </div>
                    </div>


                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='gird grid-cols-2 gap-4  justify-center items-center'>

                            <div className='m-auto'>
                                <Image src={materialui} alt='html' width={64} height={64} />
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <h3>MaterialUi</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
