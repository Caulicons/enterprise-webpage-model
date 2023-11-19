'use client';
import {  motion } from 'framer-motion';
import cn from '../../../../utils/cn';
import BannerImage from './BannerImage';

type BannerProps = {
  animation?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export default function Banner({
  children,
  className,
  animation,
}: BannerProps) {
  return (
    <section className='relative overflow-hidden h-[90.5vh]'>
      <BannerImage />
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
