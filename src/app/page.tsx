import Features from '@/components/features'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import MobNav from '@/components/mobNav'
import Navigation from '@/components/navigation'
import Newsletter from '@/components/newsletter'
import Products from '@/components/products'
import Promotions from '@/components/promotions'
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
