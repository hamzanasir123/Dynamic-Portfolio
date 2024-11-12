"use client"
import React, { useEffect, useState } from 'react'
import { Pacifico } from 'next/font/google'
import Image from 'next/image'

const Pacific = Pacifico({ weight: '400', subsets: ['latin'] })


function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark'){
      setDarkMode(true);
      document.body.classList.add('dark');
    }
  })

  const handleThemeToggle = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme' , newTheme ? 'dark' : 'light')
    if(newTheme){
      document.body.classList.add('dark')
    }else{
      document.body.classList.remove('dark')
    }
  }
  return (
    <>
    <nav className='grid grid-cols-2 bg-transparent mb-20 sm:mb-0'>
       <div className='flex sm:h-16 sm:px-4 sm:m-10 m-5 '>
            <h1 className={`${Pacific.className} mr-1 text-[#FF9C1A]`}>Hamza</h1>
            <h1 className={`${Pacific.className} text-[#FF9C1A]`}>Nasir</h1>
       </div>
       <div className='text-end'>
        <button onClick={handleThemeToggle}>
            <Image src={"/ph_moon.png"} alt='Moon' height={56} width={56} className='sm:m-10 m-5'/>
        </button>
       </div>
    </nav>
    </>
  )
}

export default Header