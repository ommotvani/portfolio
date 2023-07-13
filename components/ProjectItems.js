import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

function ProjectItems({title , image , technogy,projecturl}) {
    return (
        <div className='relative flex justify-center items-center h-auto w-full shadow-xl rounded-xl shadow-gray-400 p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] '>
            <Image className='rounded-xl group-hover:opacity-10' src={image} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-xl tracking-wider text-center text-white'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{technogy}</p>
                <Link href={projecturl} className='text-center text-white'>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'> More Info </p>
                </Link>
            </div>
        </div>
    )
}

export default ProjectItems
