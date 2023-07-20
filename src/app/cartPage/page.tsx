'use client'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { urlForImage } from '../../../sanity/lib/image'
import { getCartTotal ,remove, fetchDbData } from '@/redux/features/cartSlice'
import { Trash2 } from 'lucide-react'
import { Toaster, toast } from "react-hot-toast";
import { useAuth } from '@clerk/nextjs'
import { useEffect } from 'react'


const CartPage = () => {
    const { userId } = useAuth()
    const dispatch: any = useDispatch()
    const { cart, totalQuantity, totalAmount } = useSelector((state: any) => state.allCart)
    useEffect(() => {
        dispatch(fetchDbData(userId as string)); // Dispatch the fetchData action with the user id
    }, [dispatch, userId]);
    dispatch(getCartTotal())



    const deleteFromDb = async (id: string) => {

        const rest = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/removeitem/${id}`, { method: "DELETE" })
        if (!rest.ok) {
            console.log('operation unsuccessful')

        }

    }


    const handleRemove = async (id: string) => {
        deleteFromDb(id);

        dispatch(remove(id))
        toast.success('Removed from Cart')
    }


    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='font-bold text-2xl ml-4'>Shopping Cart</h1>
            <div className='lg:grid grid-cols-[65%,35%] py-10 gap-x-4'>
                <div className=''>
                    {
                        cart?.map((product: any) => (
                            <div key={product.id} className='m-4 p-4 bg-zinc-50 shadow-lg md:grid md:grid-cols-3 '>
                                {/* <Image src={urlForImage(product.image).url()} alt='img' height={100} width={150} className='mx-auto md:mx-2 rounded-lg' /> */}
                                <Image src={product.image} alt='img' height={100} width={150} className='mx-auto md:mx-2 rounded-lg' />

                                <div className='flex flex-col justify-around mx-auto gap-y-2 text-center md:mx-2'>
                                    <p className='my-1 text-lg lg:text-xl'>{product.title}</p>
                                    <p className=' font-semibold text-gray-400 lg:-mt4'>{product.type}</p>
                                    <p className='font-bold'>Delivery Estimation  </p>
                                    <span className=' font-bold text-yellow-500 lg:-mt-3'>5 working days</span>
                                    <p className=' font-bold'>${product.price * product.quantity}</p>


                                </div>
                                <div className='flex md:flex-col justify-between'>

                                    <button
                                        onClick={() => handleRemove(product.id)}
                                        className='px-4 py-2 rounded-full text-white  self-end active:bg-gray-300 md:mx-2'
                                    >

                                        <Trash2 color='black' />
                                    </button>
                                    <div className='flex items-center gap-x-2 self-end'>
                                        {/* <button className="w-8 h-8 rounded-full bg-gray-100 active:bg-gray-400" >-</button> */}
                                        <h3 className='font-semibold'>Quantity:</h3>
                                        <p>{product.quantity}</p>
                                        {/* <button className="w-8 h-8 rounded-full border border-black active:bg-gray-400" >+</button> */}
                                    </div>

                                </div>

                            </div>
                        ))
                    }
                </div>




                <div className=' bg-blue-50/70 rounded-md p-4 grid grid-cols-2 justify-items-center gap-y-4 max-w-3xl max-h-80 '>
                    <h3 className='col-span-2 font-bold text-xl text-center mb-6'> Order Summary</h3>
                    <h3 className='text-lg'>Quantity</h3>
                    <h3 className=''>{totalQuantity} items</h3>
                    <h3 className='text-lg'>Sub Total</h3>
                    <h3>${totalAmount}</h3>
                    <button className='col-span-2 mt-6 bg-black text-white px-4 py-2'>Proceed to Checkout</button>

                </div>

            </div>
            <Toaster />
        </div>
    )
}

export default CartPage