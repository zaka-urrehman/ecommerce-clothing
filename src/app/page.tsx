import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import MobNav from '@/components/MobNav'
import Navigation from '@/components/Navigation'
import Newsletter from '@/components/Newsletter'
import Products from '@/components/Products'
import Promotions from '@/components/Promotions'
import Sanity from '@/components/sharred/productslider'
// import Swiperr from '@/components/swiper'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='mx-4 md:mx-5 lg:mx-12 pr-3 overflow-hidden'>
      
      <Hero/>
      <Promotions/>
      <Products/>
      <Features/>
      <Newsletter/>
     
      
      
    </div>
  )
}
