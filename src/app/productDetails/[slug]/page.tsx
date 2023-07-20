'use client'
import { client } from "@/lib/sanityClient";
import { Image as IImage, Slug as ISlug, set } from 'sanity';
import Image from 'next/image';
import { urlForImage } from '../../../../sanity/lib/image';

import { Dot, ShoppingCart, } from "lucide-react";
import AddToCart from "@/components/sharred/addToCart";
import { SignedIn } from "@clerk/nextjs";
// import AddToCart from "@/components/sharred/addToCart";





type INames = {
    slug: {
      current: string;
    };
  };

interface Details {
    title: string,
    slug: ISlug,
    type: string,
    price: number,
    image: IImage,
    _id: string,

}




const getProductNames = async () => {
    const res = await client.fetch(`*[_type=='product']{
        slug {
        current
        }
    }`)
   
    return res;
}


export async function generateStaticParams() {

    const names: INames[] = await getProductNames()

    return (
        names.map((name) =>
        ({
            slug: name.slug.current,
        }))
    )
}






export default async function ProductDetails({ params }: { params: { slug: string } }) {



    const getProductDetails = async () => {
        const res = await client.fetch(`*[slug.current=='${params.slug}']`)
        return res;
    }


    const productDetails: Details[] = await getProductDetails()
    // const handleAddToCart = async (itemId:any) => {

    //     const res =await fetch ("/api/cart",{
    //       method:"POST",
    //       body: JSON.stringify({
    //           product_id: itemId ,            
    //       })        
    //     })
    //     // if (!res.ok) {
    //     //     throw new Error("Failed to Fetch Data From API");
    //     //   }

    //     const result = await res.json()

    //     console.log(Error)
    //   }


    return (
        <div className="max-w-7xl mx-auto p-4">

            {productDetails.map((item) => (
                <div key={item._id} className="lg:grid lg:grid-cols-2">

                    <div>
                        <Image
                            src={urlForImage(item.image).url()}
                            alt='product image'
                            height={10000} width={10000}
                            className="h-[350px] w-80 lg:h-[650px] lg:w-[580px] mx-auto " />
                    </div>
                    <div className="lg:ml-20">
                        <h1 className="text-3xl font-semibold mt-10">{item.title}</h1>
                        <h3 className="text-xl font-semibold text-gray-400">{item.type}</h3>
                        <h2 className="font-semibold mt-10 text-lg">SELECT SIZE</h2>
                        <div className="flex gap-x-2">
                            <button className="p-2 w-10 h-10  font-bold text-gray-500 text-center rounded-full hover:shadow-lg hover:bg-gray-100">XS</button>
                            <button className="p-2 w-10 h-10  font-bold text-gray-500 text-center rounded-full hover:shadow-lg hover:bg-gray-100">S</button>
                            <button className="p-2 w-10 h-10  font-bold text-gray-500 text-center rounded-full hover:shadow-lg hover:bg-gray-100">M</button>
                            <button className="p-2 w-10 h-10  font-bold text-gray-500 text-center rounded-full hover:shadow-lg hover:bg-gray-100">L</button>
                            <button className="p-2 w-10 h-10  font-bold text-gray-500 text-center rounded-full hover:shadow-lg hover:bg-gray-100">XL</button>
                        </div>





                        <div className="flex mt-10 items-center gap-x-8 ">
                          <SignedIn>  <AddToCart product = {item} /></SignedIn>
                            <p className="font-bold text-2xl md:text-3xl self-end">${item.price}.00</p>

                        </div>
                    </div>

                </div>
            ))}




            <div className="mt-20 py-14 border-b border-black relative ">
                <p className="font-bold text-2xl ">Product Information</p>
                <p className="absolute top-7 lg:top-0 text-7xl lg:text-9xl text-gray-100 -z-10 font-bold">Overview</p>

            </div>

            <div className="lg:grid lg:grid-cols-[35%,65%]">
                <h3 className="mt-10 text-lg font-semibold text-gray-500">PRODUCT DETAILS</h3>
                <p className="mt-5 text-md text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</p>
            </div>


            <div className="lg:grid lg:grid-cols-[35%,65%] mt-5 mb-32">
                <h3 className="mt-10 text-lg font-semibold text-gray-500">PRODUCT CARE</h3>
                <div className="mt-5 text-md text-gray-600 grid grid-cols-[3%,97%] gap-x-4 ">
                    <Dot />
                    <p className="font-bold"> Hand wash using cold water.</p>

                    <Dot />
                    <p className="font-bold">Do Not use Bleach.</p>

                    <Dot />
                    <p className="font-bold"> Hang it to dry.</p>

                    <Dot />
                    <p className="font-bold">Iron on low temperature.</p>

                </div>
            </div>

        </div>
    )
}




