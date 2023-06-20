import React from 'react'

export default function Newsletter() {
    return (
        <section className='max-w-7xl mx-auto'>
            <div className='py-40 flex flex-col justify-center items-center gap-y-10 relative'>
                <div className='space-y-4'>
                    <h1 className='text-3xl md:text-4xl font-bold text-center '>Subscribe Our Newsletter</h1>
                    <h1 className='text-center  text-gray-600 '>Get the latest information and Promo offers directly</h1>
                </div>


                <div className='flex flex-col sm:flex-row justify-center items-center gap-y-2 gap-x-4'>

                    <input type="text" className='w-[280px] border border-gray-700 py-2 px-4' placeholder='Input Email Adress' />
                    <button
                        className='bg-black text-white font-semibold  py-2 px-4  w-[140px]  flex-grow-0'
                    >
                        Get Started
                    </button>
                </div>


                <h3 className='absolute text-7xl  md:text-9xl -z-10 text-gray-100 font-bold'>Newsletter</h3>

            </div>
        </section>
    )
}
