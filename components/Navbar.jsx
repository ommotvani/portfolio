import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useRouter } from 'next/router'


function Navbar() {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navbg, setNavbg] = useState('#ecf0f3')
  const [linkcolor, setLinkcolor] = useState('#1f2937')

  const router = useRouter()

  useEffect(() => {
    if (router.asPath === '/Property' || router.asPath === '/CrudOperation' || router.asPath === '/ProductsListing') {
      setNavbg('transparent')
      setLinkcolor('#ecf0f3')
    }
    else {
      setNavbg('#ecf0f3')
      setLinkcolor('#1f2937')
    }
  }, [])




  const handleNav = () => setNav(!nav)

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
      window.addEventListener('scroll', handleShadow)
    }
  }, [])


  return (
    <div style={{ backgroundColor: `${navbg}` }}
      className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20  z-[100]'}>
      <div className='flex justify-end items-center w-full h-full px-2 2xl:px-16'>


        <div>
          <ul style={{ color: `${linkcolor}` }} className='hidden md:flex'>
            <Link href='/' >
              <li className='ml-10  text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about' >
              <li className='ml-10  text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#skills' >
              <li className='ml-10  text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/#projects' >
              <li className='ml-10  text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/#contact' >
              <li className='ml-10  text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>

          <div className='md:hidden' onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0  w-full h-screen bg-black/40' : ''}>
        <div className={nav ? 'fixed left-0 top-0  w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-[#ecf0f3] p-10 ease-in duration-500'
          : 'fixed left-[-100%] top-0   p-10 ease-in duration-500'}>
          <div>
            <div className='flex  w-full justify-end  items-center'>

              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer' onClick={handleNav}>
                <AiOutlineClose />
              </div>
            </div>

            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>  </p>
            </div>

            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/#about'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                </Link>
                <Link href='/#skills'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                </Link>
                <Link href='/#projects'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                </Link>
                <Link href='/#contact'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                </Link>
              </ul>
              <div className='pt-40'>
                <p className='uppercase tracking-wide text-[#5651e5]'>Let's Connect</p>

                <div className='flex item-center justify-between my-4 w-full '>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link href='https://www.linkedin.com/in/om-motvani-75135020b/' target='_blank' >
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link href='https://github.com/ommotvani' target='_blank' >
                      <FaGithub />
                    </Link>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ommotwani06@gmail.com' target='_blank' >
                      <AiOutlineMail />
                    </Link>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link href='#contact' target='_blank' >
                      <BsFillPersonLinesFill />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Navbar
