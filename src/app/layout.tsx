import Navigation from '@/components/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import MobNav from '@/components/MobNav'
import Footer from '@/components/Footer'
import Bottomline from '@/components/Bottomline'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hackathon One',
  description: 'Full Stack Ecommerce Clothing Web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>


      <div className='mx-4 md:mx-5 lg:mx-12 pr-3 '><Navigation/></div>
      <div className='mx-4 md:mx-5 lg:mx-12 pr-3 '> <MobNav/></div>
      {children}
       <div className='mx-4 md:mx-5 lg:mx-12 pr-3 '><Footer/></div>
       <hr className='border-black' />
      <div className='mx-4 md:mx-5 lg:mx-12 pr-3 '><Bottomline/></div>


      </body>
    </html>
  )
}
