import Image from 'next/image'
import React from 'react'
import { ShoppingCart } from 'lucide-react'


const Hero = () => {
    
    return (
        <section className='max-w-7xl mx-auto py-[10px] md:py-[25px] lg:py-[32px] mt-2 sm:mt-4 md:mt-8 grid lg:grid-cols-[50%,50%] '>

            <div className='pt-8'>
                <div className='w-[120px] h-[40px] bg-blue-100 text-center py-2 text-blue-600 font-bold rounded-md'                >
                    Sale 70%
                </div>
                <h3 className='font-bold text-5xl md:text-6xl mt-10 mr-16'>An Industrial Take on Streetwear</h3>
                <p className='mt-10 max-w-sm text-gray-600'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
                <button className='flex mt-10 py-[17px] w-[200px] bg-black  text-white font-semibold justify-center items-center px-4 pr-6 '>
                    <ShoppingCart className='mr-2' />
                    Start Shopping
                </button>

                <div className='grid grid-cols-2 md:grid-cols-4 justify-around lg:justify-between mt-10 lg:mt-32 gap-4 '>

                    <Image src={'/icons/1.png'} alt='logos' height={80} width={100}/>
                    <Image src={'/icons/2.png'} alt='logos' height={80} width={100}/>
                    <Image src={'/icons/3.png'} alt='logos' height={80} width={100}/>
                    <Image src={'/icons/4.png'} alt='logos' height={80} width={100}/>
                    
                </div>
            </div>



            <div className='hidden lg:flex justify-center relative'>
                <div className='bg-[#ffece3] rounded-full h-[600px] w-[600px] flex flex-shrink-0 object-contain '></div>
                <Image
                    src={'/images/hero.jpg'} alt='Hero Section Image'
                    height={650} width={650}
                    className='absolute -top-10 h-[650px] w-[650px] flex flex-shrink-0 object-cover ' />
            </div>
        </section>
    )
}

export default Hero