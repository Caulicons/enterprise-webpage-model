'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from '@/components/atoms/Image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type slide = {
  id: number;
  name: string;
};

type CarouselWithSwiperProps = {
  slides: slide[];
};

export default function CarouselWithSwiper({}) {
  const slides = [
    {
      id: 1,
      url: '/assets/images/Random/confirm.jpg',
      description: 'Slide 1',
    },
    {
      id: 2,
      url: '/assets/images/Random/conversation.jpg',
      description: 'Slide 1',
    },
    {
      id: 3,
      url: '/assets/images/Random/reunion.jpg',
      description: 'Slide 1',
    },
    {
      id: 4,
      url: '/assets/images/Random/reunion2.jpg',
      description: 'Slide 1',
    },
    {
      id: 5,
      url: '/assets/images/Random/reunion3.jpg',
      description: 'Slide 1',
    },
    {
      id: 6,
      url: '/assets/images/Random/seat.jpg',
      description: 'Slide 1',
    },
  ];

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={'auto'}
      centeredSlides={true}
      autoplay={{ delay: 2000 }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      pagination={{ clickable: true }}
      loop={true}
      scrollbar={{ draggable: true }}
      className='flex h-[450px] place-content-center items-center justify-center md:w-11/12'
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Image
            src={slide.url}
            alt={slide.description}
            key={slide.id}
            width={400}
            height={400}
            className='w-full h-full object-cover'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
