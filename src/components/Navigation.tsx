
import Image from 'next/image'
import React from 'react'
import { Search, ShoppingCart } from 'lucide-react';
import { Cart } from './mobNav'
import Link from 'next/link';

export default function Navigation() {
    return (
        <div className='max-w-7xl mx-auto  justify-between  py-8  items-center hidden lg:flex'>


            <div>
                <Link href={'/'}>
                    <Image src={'/icons/Logo.png'} alt='Logo' width={140} height={100} className='w-36 h-6' />
                </Link>
            </div>

            <div>
                <ul className='list-none flex gap-x-12 items-baseline'>
                    <Link href={'/category/female'}>  <li className='text-base'>Female</li></Link>
                    <Link href={'/category/male'}><li className='text-base'>Male</li></Link>
                <Link href={'/category/kids'}><li className='text-base'>Kids</li></Link>
            <Link href={'/allProducts'}><li className='text-base'>All Products</li></Link>
                </ul >
            </div >

            <div className='flex h-7 items-center border-2 border-gray-200 rounded-md lg:w-[300px] xl:w-[360px] px-2'>
                <Search height={15} width={15} />
                <input type="search" className='focus:outline-none px-2 text-xs' placeholder='What are you looking for' />
            </div>

            <div><Cart /></div>


        </div >
    )
}
