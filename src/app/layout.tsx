import Navigation from '@/components/navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import MobNav from '@/components/mobNav'
import Footer from '@/components/footer'
import Bottomline from '@/components/bottomline'
import Providers from '@/redux/provider'
import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dine Market',
  description: 'Full Stack Ecommerce Clothing Web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang="en">
          <body className={inter.className}>

            <div className='mx-4 md:mx-5 lg:mx-12 pr-3 '><Navigation /></div>
            <div className='mx-4 md:mx-5 lg:mx-12 pr-3 '> <MobNav /></div>
            {children}
            <div className='mx-4 md:mx-5 lg:mx-12 pr-3 '><Footer /></div>
            <hr className='border-black' />
            <div className='mx-4 md:mx-5 lg:mx-12 pr-3 '><Bottomline /></div>


          </body>
        </html>
      </Providers>
    </ClerkProvider>
  )
}
