'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useSelector,useDispatch } from 'react-redux';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { getCartTotal } from '@/redux/features/cartSlice';

const open = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="black" fontSize="28" className='text-black' height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"></path></g></svg>
const close = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="black" fontSize="38" className='text-black' height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path></g></svg>

export const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.allCart)
    dispatch(getCartTotal())

    return (
        <div className='flex flex-col lg:flex-row items-center gap-x-2 gap-y-2'>
            <SignedOut>
                <Link href={'/sign-in'}><div  className='w-12 h-12 text-sm rounded-full bg-gray-100 active:bg-gray-300 flex items-center justify-center'>Login</div></Link>
            </SignedOut>
            <SignedIn>  <UserButton afterSignOutUrl="/"/></SignedIn>

            <Link href={'/cartPage'}>
                <div className='bg-[#f1f1f1] rounded-full w-12 h-12 flex justify-center items-center relative'>
                    <ShoppingCart height={25} width={25} />
                    <div className='bg-red-600 h-4 w-4 rounded-full absolute top-1 right-2 text-center'>
                        <p className='text-white text-xs'>{cart.totalQuantity}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}









export default function MobNav() {
    const [isopen, setOpen] = useState(false)



    const handleNav = () => {
        setOpen(!isopen)
    }

    return (
        <div className='lg:hidden  '>




            {isopen == false ?
                <div className='flex py-8 md:py-14 justify-between'>
                    <Link href={'/'}>
                        <Image src={'/icons/Logo.png'} alt='Logo' width={150} height={100} className='w-36 h-6.5' />
                    </Link>
                    <div onClick={handleNav} className=''>
                        {open}
                    </div>
                </div>
                :

                <div  className='z-50 h-screen w-screen bg-white fixed'>

                    <div className='flex justify-between py-12 pr-10'>
                        <Image src={'/icons/Logo.png'} alt='Logo' width={150} height={100} className='w-36 h-[26px] ' />
                        <div onClick={handleNav}>{close}</div>
                    </div>

                    <div className='w-32 mx-auto mt-32'>
                        <ul className='list-none flex flex-col justify-center items-center gap-3'>
                            <li ><Cart  /></li>
                            <Link href={'/category/female'}><li onClick={handleNav} className='text-base'>Female</li></Link>
                            <Link href={'/category/male'}><li onClick={handleNav} className='text-base'>Male</li></Link>
                            <Link href={'/category/kids'}> <li onClick={handleNav} className='text-base'>Kids</li></Link>
                            <Link href={'/allProducts'}><li onClick={handleNav} className='text-base'>All Products</li></Link>
                        </ul>
                    </div>



                </div>
            }



        </div>
    )
}
