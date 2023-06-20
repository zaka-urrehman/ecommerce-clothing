
import Image from 'next/image'
import React from 'react'
import { Search, ShoppingCart } from 'lucide-react';
import { Cart } from './MobNav';

export default function Navigation() {
    return (
        <div className='max-w-7xl mx-auto  justify-between  py-8  items-center hidden lg:flex'>


            <div>
                <Image src={'/icons/Logo.webp'} alt='Logo' width={140} height={100} className='w-36 h-6' />
            </div>

            <div>
                <ul className='list-none flex gap-x-12 items-baseline'>
                    <li className='text-base'>Female</li>
                    <li className='text-base'>Male</li>
                    <li className='text-base'>Kids</li>
                    <li className='text-base'>All Products</li>
                </ul>
            </div>

            <div className='flex h-7 items-center border-2 border-gray-200 rounded-md lg:w-[300px] xl:w-[360px] px-2'>
                <Search height={15} width={15} />
                <input type="search" className='focus:outline-none px-2 text-xs' placeholder='What are you looking for' />
            </div>

            <div><Cart /></div>


        </div>
    )
}
