'use client'
import React from 'react';





export default function Success() {


    return (
        <div className="max-w-7xl mx-auto ">
            
            <div className="flex flex-col justify-center items-center">

                <div className="font-bold text-3xl md:text-5xl my-10">
                    Order Completed
                </div>
                <div>
                    <div className="flex justify-center items-center  ">
                        <div className="w-64 h-64 bg-green-500 rounded-full flex justify-center items-center">
                            <svg className="w-32 h-32 text-white animate-tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="4 12 9 17 20 6"></polyline>
                            </svg>
                        </div>
                    </div>


                </div>
                <div className="font-semibold text-xl md:text-3xl my-10">
                    We will be in contact soon
                </div>
            
            </div>
        </div>

    )
}