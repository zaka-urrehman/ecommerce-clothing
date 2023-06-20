import React from 'react'
import ProductSlider from './sharred/productslider'

export default function Products() {
  return ( 
  <section className='max-w-7xl mx-auto '>
    <div className='text-[#0062f5] text-center text-sm font-semibold my-4 mt-20'>Products</div>
    <h3 className='font-bold text-3xl text-center mb-6'>Check What We Have</h3>
    <ProductSlider/>
  </section>
  )
}
