'use client'
import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { add } from '@/redux/features/cartSlice'
import { useAppDispatch } from '@/redux/store/store'
// import { ToastContainer, toast } from 'react-toastify'
import toast, { Toaster } from 'react-hot-toast';
import { auth, useAuth } from '@clerk/nextjs'
import { urlForImage } from '../../../sanity/lib/image'



const AddToCart = ({ product }: any) => {
    const [num, setNum] = useState(1)
    const dispatch = useAppDispatch()
    const { userId } = useAuth()

   


    const getDataFromDb = async () => {
     
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/${userId}`)
        // console.log(res)
        if (!res.ok) {
            throw new Error("Failed to Fetch Data From API");
        }
        const data = await res.json();
        
        return data;
    }




    const AddNewItemInDb = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
            method: "POST",
            body: JSON.stringify({
                product_id: product._id,
                quantity: num,
                image: urlForImage(product.image).url(),
                product_name: product.title,
                subcat: product.type,
                price: product.price,
                totalPrice: product.price * num,
            })
        })
        // console.log(res)
        if (!res.ok) {
            throw new Error("Failed to add Data");
        }

    }




    const setCartInDb = async () => {
        try {
            const cartData = await getDataFromDb()
           
            const existingItem = cartData.cartItems.find(
                (item: any) => item.id === product._id
            );
            // console.log(existingItem)

            if (existingItem) {
                const newQuantity = existingItem.quantity + num
                const newPrice = product.price * newQuantity;
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
                    method: "PUT",
                    body: JSON.stringify({
                        product_id: product._id,
                        quantity: newQuantity,
                        price: newPrice,
                    })
                })
                if (!res.ok) {
                    throw new Error("Failed to update data");
                }
                
                
            }

            else {
                await AddNewItemInDb();
             }

        } catch (error) {
            console.log((error as { message: string }).message);
        }
    }





    const handleCart = async (product: any) => {

        toast.promise(setCartInDb(), {
            loading: "Adding To Cart",
            success: "Product added To Cart",
            error: "Failed to Add Product to cart",
          });
        dispatch(add(product))
        
        // toast.success('Added to Cart!');
     
    }



    return (<>
        <div className='flex flex-col gap-y-16'>
            <div className="flex gap-x-2 mt-10 items-center">
                <h3 className="font-bold  text-lg">Quantity: </h3>
                <button className="w-8 h-8 rounded-full bg-gray-100 active:bg-gray-400" onClick={() => { setNum(num <= 1 ? 1 : num - 1) }}>-</button>
                <p>{num}</p>
                <button className="w-8 h-8 rounded-full border border-black active:bg-gray-400" onClick={() => { setNum(num + 1) }}>+</button>
            </div>

            <button
                onClick={() => handleCart({
                    image: urlForImage(product.image).url(),
                    title: product.title,
                    price: product.price,
                    type: product.type,
                    category: product.category,
                   id: product._id,
                    quantity: num
                })}
                //    onClick={ handleCart  } 
                className='flex py-[15px] w-[180px] bg-black  text-white font-semibold justify-center items-center px-4 pr-6 '>
                <ShoppingCart className='mr-2' />
                Add To Cart
            </button>
            <Toaster />

        </div>

    </>
    )
}

export default AddToCart