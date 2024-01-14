'use client';
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

export default function BannerImage() {
  const [banner, setBanner] = useState('01');

  useEffect(() => {
    const banners = ['01', '02'];

    const interval = setInterval(() => {
      switch (banner) {
        case '01':
          setBanner(banners[1]);
          break;
        case '02':
          setBanner(banners[0]);
          break;
      }
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [banner]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url('./assets/images/Banner/banner${banner}.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          width: '100%',
          transition: 'all 1.2s ease-in-out',
          position: 'absolute',
        }}
        className='animate-zoom bg-gradient-to-r from-primary to-secondary '
      >
        <div className='h-screen w-screen bg-secondary/75' />
      </div>
    </>
  );
}
/* 



*/
