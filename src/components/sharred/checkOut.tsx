'use client'

import getStripePromise from '@/lib/stripe'


const CheckOut =  (props: any) => {
    
    let handleCheckOut=async()=>{
        const stripe = await getStripePromise()
        const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stripe-session`,{
            method: "POST",
            body: JSON.stringify(props.items),
            headers: { "Content-Type": "application/json" },
            cache: "no-cache",
           
        })

        const data = await res.json();
        if (data.session) {
            stripe?.redirectToCheckout({ sessionId: data.session.id });
          }
    } 

    return (
        <div>
            <button
                className=' mt-6 bg-black text-white px-4 py-2'
                onClick={()=>handleCheckOut()}
            >
                Proceed to Checkout
            </button>
        </div>
    )
}

export default CheckOut