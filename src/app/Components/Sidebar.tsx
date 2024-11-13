import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Raleway} from 'next/font/google'

const Pacific = Raleway({ weight: '700', subsets: ['latin'] })

function Sidebar() {
  return (
    <>
    <div className=' sm:ml-20 ml-5 mb-20 mt-2 h-[700px] w-[350px] bg-white rounded-[20px] relative'>
        <div className='relative'>
            <Image 
            src={"/abbc111e-1fe2-46f5-aebf-678e03b9e25a.jpg"}
            alt='Hamza'
            height={150}
            width={150}
            className='rounded-[20px] ml-[100px]  -mt-[75px] absolute'
            />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 className={`text-center text-3xl font-bold text-[#0B0909] ${Pacific.className}`}>Hamza Nasir</h1>
            <h1 className='text-center text-md '>Frontend Developer</h1>
        </div>
        <div className='flex flex-wrap m-4 gap-7'>
            <Link href={"https://www.facebook.com/profile.php?id=100013306129157&mibextid=kFxxJD"} target='_blank' className='bg-[#EBF2FA] rounded-[9px]'>
            <Image src={"/Vector (6).png"} width={10} height={19} alt='F' className='m-5'/>
            </Link>
            <Link href={"https://www.linkedin.com/in/hamza-nasir-bb02142b5/"} target='_blank' className='bg-[#EBF2FA] rounded-[9px]'>
            <Image src={"/ri_linkedin-fill.png"} width={20} height={20} alt='L' className='m-5'/>
            </Link>
            <Link href={"https://www.instagram.com/hamzaking9531/profilecard/?igsh=NDU1ZHo0M3I4NDg="} target='_blank' className='bg-[#EBF2FA] rounded-[9px]'>
            <Image src={"/ri_twitter-fill.png"} width={20} height={20} alt='T' className='m-5'/>
            </Link>
            <Link href={"https://github.com/hamzanasir123"} target='_blank' className='bg-[#EBF2FA] rounded-[9px]'>
            <Image src={"/ri_github-fill.png"} width={20} height={20} alt='G' className='m-5'/>
            </Link>
        </div>
        <div className='grid grid-rows-4 bg-[#F2F5F9] h-[350px] m-6 rounded-[20px] w-[300px]'>
            <div className='flex flex-wrap w-[256px] h-[63px] ml-4 mt-3'>
                <Image src={"/Phone.png"} alt='Phone' height={43} width={43} className='m-2'/>
                <div>
                <p className='text-gray-400 mt-2'>Phone</p>
                <p>+923122449908</p>
                </div>
            </div>
            <div className='flex flex-wrap  w-[256px] h-[63px] ml-4 mt-3'>
            <Image src={"/Email.png"} alt='Email' height={43} width={43} className='m-2'/>
            <div>
                <p className='text-gray-400 mt-2'>Email</p>
                <p>hk435981@gmail.com</p>
                </div>
            </div>
            <div className='flex flex-wrap  w-[256px] h-[63px] ml-4 mt-3'>
            <Image src={"/Location.png"} alt='Location' height={43} width={43} className='m-2'/>
            <div>
                <p className='text-gray-400 mt-2'>Location</p>
                <p>Karachi,Pakistan</p>
                </div>
            </div>
            <div className='w-[256px] h-[63px] ml-4 mt-3 relative'>
            <Image src={"/Vector (1).png"} alt='!' height={16} width={16} className='absolute ml-14 mt-1'/>
            <Link href={"https://hackathon-1-beta-drab.vercel.app/"} target='_blank' className='bg-gradient-to-r from-[#FF9C1A] to-[#E80505] px-5 py-3 rounded-[20px] text-white ml-10 pl-10 '>
            Download Resume
            </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar