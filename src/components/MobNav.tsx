'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react';

const open = <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="black" font-size="28" className='text-black' height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"></path></g></svg>
const close = <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="black" font-size="38" className='text-black' height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path></g></svg>

 export const Cart = () => {
    return (
        <div>
            <div className='bg-[#f1f1f1] rounded-full w-12 h-12 flex justify-center items-center relative'>
                <ShoppingCart height={25} width={25} />
                <div className='bg-red-600 h-4 w-4 rounded-full absolute top-1 right-2 text-center'>
                    <p className='text-white text-xs'>0</p>
                </div>
            </div>
        </div>
    )
}









export default function MobNav() {
    const [isopen, setOpen] = useState(false)



    const handleNav = () => {
        setOpen(!isopen)
    }

    return (
        <div className='lg:hidden '>




            {isopen == false ?
                <div className='flex py-8 md:py-14 justify-between'>
                     <Image src={'/icons/Logo.webp'} alt='Logo' width={150} height={100} className='w-36 h-6.5' />
                    <div onClick={handleNav} className=''>
                        {open}
                    </div>
                </div>
                :

                <div onClick={handleNav} className='z-10 h-screen sticky'>

                    <div className='flex justify-between py-12'>
                        <Image src={'/icons/Logo.webp'} alt='Logo' width={150} height={100} className='w-36 h-[26px]' />
                        <div>{close}</div>
                    </div>

                    <div className='w-32 mx-auto mt-32'>
                        <ul className='list-none flex flex-col justify-center items-center gap-3'>
                            <li><Cart /></li>
                            <li className='text-base'>Female</li>
                            <li className='text-base'>Male</li>
                            <li className='text-base'>Kids</li>
                            <li className='text-base'>All Products</li>
                        </ul>
                    </div>



                </div>
            }



        </div>
    )
}
