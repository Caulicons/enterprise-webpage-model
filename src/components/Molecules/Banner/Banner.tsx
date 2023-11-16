'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import cn from '../../../../utils/cn';

type BannerProps = {
  animation?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export default function Banner({
  children,
  className,
  animation,
}: BannerProps) {
  const banners = useMemo(() => ['01', '02'], []);
  const [banner, setBanner] = useState(banners[0]);

  useEffect(() => {
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
  }, [banner, banners]);
  return (
    <section className='relative overflow-hidden'>
      {/* Tag to apply the background images */}
      <div
        style={{
          backgroundImage: `url('./assets/images/Banner/banner${banner}.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '90.5vh',
          width: '100%',
          transition: 'all 1.2s ease-in-out',
          position: 'relative',
        }}
        className='animate-zoom'
      >
        {/* Tag to apply the overlay */}
        <div className='h-[90.5vh] w-screen bg-secondary/75' />
      </div>
      {animation ? (
        <motion.div
          initial={{ opacity: 0, top: 0 }}
          animate={{ opacity: 1, top: '45%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          className={cn(
            'absolute left-1/2 top-1/2 flex w-4/5 -translate-x-1/2 -translate-y-1/2 flex-col gap-8 text-center ',
            className
          )}
        >
          {children}
        </motion.div>
      ) : (
        <div
          className={cn(
            'absolute left-1/2 top-1/2 flex w-4/5 -translate-x-1/2 -translate-y-1/2 flex-col gap-8 text-center ',
            className
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
}
