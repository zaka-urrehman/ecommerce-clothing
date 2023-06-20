import Image from 'next/image'
import React from 'react'

export default function Features() {
    return (
        <section className='max-w-7xl mx-auto '>
            <div className='grid lg:grid-cols-[60%,40%]'>
                <div></div>
                <h2 className='lg:  text-4xl md:text-5xl font-bold '>Unique and Authentic Vintage Designer Jewellery</h2>
            </div>



            <div className='mt-10 grid lg:grid-cols-2 grid-cols-1 gap-x-20 gap-y-10 '>


                <div className=' grid grid-cols-2 gap-y-8 gap-x-12 sm:gap-x-36 relative'>
                    <div>
                        <h3 className='font-bold text-xl my-4'>Using Good Quality Materials</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className='gap-3'>
                        <h3 className='font-bold text-xl my-4'>100% Handmade Products</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className='gap-3'>
                        <h3 className='font-bold text-xl my-4'>Modern Fashion Design</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className='gap-3'>
                        <h3 className='font-bold text-xl my-4'>Discount for Bulk Orders</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>

                    <h5 className='absolute font-extrabold text-gray-200/50 -z-10 text-9xl'>Different from others</h5>


                </div>




                <div className='sm:flex sm:gap-x-10 '>
                    <Image 
                    className='flex flex-shrink-0 mx-auto sm:mx-1 my-10 '
                    src={'/images/feature.png'} alt='features image' height={400} width={270}/>

                    <div className='flex flex-col justify-center gap-y-6'>
                        <p>This piece is ethically crafted in our small family-owned workshop in Peru
                             with unmatched attention to detail and care. The Natural color is the 
                             actual natural color of the fiber, undyed and 100% traceable.</p>
                        <button 
                           className='bg-black text-white font-semibold  py-2 px-5  w-[180px] lg:w-[120px] xl:w-[180px] flex-grow-0'
                        >
                          See All Products
                        </button>
                    </div>
                </div>

            </div>

        </section>
    )
}
