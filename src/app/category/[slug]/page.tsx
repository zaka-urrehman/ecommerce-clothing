import { client } from "@/lib/sanityClient";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";



export default async function ProductDetails({ params }: { params: { slug: string } }) {



    const getProductDetails = async () => {
      
        const res = await client.fetch(`*[category=='${params.slug}']`)
      
        
        return res;
    }

         const product = await getProductDetails()

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 justify-items-center">
                {
                    product.map((product:any)=>(
                        <div key={product._id}>
                            <Link href={`/productDetails/${product.slug.current}`}>
                            <Image src={urlForImage(product.image).url()} alt="product image" height={250} width={250}/>
                            <h3 className="text-lg font-semibold mt-3">{product.title}</h3>
                            <h3 className="font-semibold text-gray-500 mt-2">{product.type}</h3>
                            <h3 className="font-bold text-lg mt-1">${product.price}</h3>
                            </Link>
                        </div>
                    ))

                }

            </div>

        </div>
    )

}