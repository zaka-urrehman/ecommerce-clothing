'use client'
import { useEffect, useState } from 'react';
import { client } from '@/lib/sanityClient';
import { Image as IImage, Slug as ISlug} from 'sanity';
import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import SwiperCore from 'swiper';
import Link from 'next/link';
SwiperCore.use([Navigation, A11y,]);

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=='product']`);
  return res;
};

interface IData {
  title: string;
  slug: ISlug,
  Description: string;
  price: number;
  image: IImage;
  _id: string;
}

export default  function ProductSlider() {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProductData();
      setData(res);
    };
    fetchData();
  }, []);
// const data :IData[] = await getProductData();

  return (
    <div className='mb-10 lg:max-h-[700px] max-h-[530px]'>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
          1000: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1260: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        spaceBetween={0}
        slidesPerView={3}

      >
        {data.map((item) => (
          <SwiperSlide key={item._id}>
            <div className='hover:scale-110 duration-500 flex flex-col justify-center items-center mt-5 mb-10'>

              <Link key={item._id} href={`/productDetails/${item.slug.current}`}>
                <Image
                  src={urlForImage(item.image).url()}
                  alt='slider Image'
                  width={370}
                  height={450}
                  className="mb-2"
                />
                <h2 className='font-bold text-center'>{item.title}</h2>
                
                <h2 className='font-bold text-center '>{item.price}</h2>

              
              </Link>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
}
