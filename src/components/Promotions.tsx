import Image from 'next/image'
import React from 'react'

export default function Promotions() {
    return (
        <section className='max-w-7xl mx-auto mt-20'>
            <h1 className='text-[#0062f5] text-center text-sm font-semibold my-4'>PROMOTIONS</h1>
            <h3 className=' text-center text-4xl font-bold my-4'>Our Promotion Events</h3>


            <div className='grid lg:grid-cols-4 gap-4'>
                <div className='sm:col-span-2 bg-[#d6d6d8] flex flex-col md:flex-row justify-center md:items-center h-auto lg:h-[200px] order-first'>
                    <div className='ml-4'>
                        <h3 className=' text-3xl  mt-5 md:text-4xl font-semibold font-[sans-serif]  '>GET UP TO 60%</h3>
                        <h3 className='text-xl'>For the summer season</h3>
                    </div>
                    <Image src={'/images/promo1.webp'} alt={'promotions'} width={250} height={250}/>
                </div>

                <div className='sm:row-span-2 bg-[#efe1c7] h-auto'>
                    <h3 className='mt-4 mx-2' > Flex Sweatshirt</h3>
                    <div className='flex'>
                        <p className='line-through text-lg m-2'>$100.00</p>
                        <p className='font-bold  text-lg m-2'>$75.00</p>
                    </div>

                    <Image src={'/images/promo2.webp'} alt='promotions' height={400} width={260} className='mx-auto bottom-0'/>
 
                </div>


                <div className='sm:row-span-2 bg-[#d7d7d9] h-auto order-last '>
                    <h3  className='mt-4 mx-2'>Flex Push Button Bomber</h3>
                    <div className='flex'>
                        <p className='line-through text-lg m-2'>$225.00</p>
                        <p className='font-bold  text-lg m-2'>$190.00</p>
                    </div>

                    <Image src={'/images/promo3.webp'} alt='promotions' height={400} width={260} className='mx-auto bottom-0'/>

                </div>




                <div className='sm:col-span-2 bg-[#212121] py-6 flex justify-center md:items-center h-auto lg:h-[200px] -order-2 lg:order-last'>
                    <div>
                        <h3 className='text-4xl  font-[sans-serif] text-white font-bold text-center  '>GET 30% OFF</h3>
                        <h3 className='text-md mt-5 text-white text-center'>USE PROMO CODE</h3>
                        <h5 className='px-8 py-2 bg-[#474747] rounded-lg font-bold text-white font-[sans-serif] text-center spacing '>DINEWEEKENDSALE</h5>
                    </div>
              </div>

            </div>

        </section>
    )
}
