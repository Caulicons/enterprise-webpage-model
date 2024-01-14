'use client';
import { Squash as Hamburger } from 'hamburger-react';
import { useRef, useState } from 'react';
import routes from '../../../../../data/routes';
import { useClickAway } from 'react-use';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from '@/components/atoms/Image';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setIsOpen(false));
  return (
    <nav className='rounded-xl bg-primary text-white hover:bg-accent lg:hidden'>
      <div className=''>
        <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Apply the gray overlay */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: 0.8,
                width: '100%',
                transition: { delay: 0.3, duration: 0.4 },
              }}
              exit={{
                opacity: 0.6,
                width: 0,
                transition: { delay: 0.5, duration: 0.6 },
              }}
              className='fixed left-0 right-0 top-0 h-screen bg-gray-600'
            />
            <motion.aside
              ref={ref}
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: 1,
                width: '75%',
                transition: {
                  delay: 0.6,
                  duration: 0.4,
                },
              }}
              exit={{ opacity: 0, width: 0, transition: { delay: 0.3 } }}
              className='shadow-4xl fixed left-0 right-0 top-0 h-screen  border-b border-b-white/20 bg-secondary p-5 pt-0'
            >
              <div className='flex  w-full items-center justify-between py-6'>
                <Image
                  src='/assets/images/Logo/logo.png'
                  alt='logo'
                  width={180}
                  height={180}
                />
                <div className='hover:text-red-70 bg-red-70'>
                  <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
                </div>
              </div>
              <ul className='grid gap-2'>
                {routes.map((route, idx) => {
                  return (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                      }}
                      exit={{
                        scale: 0,
                        opacity: 0,
                        width: 0,
                        transition: { delay: 0, damping: 0 },
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        delay: 0.9 + idx / 10,
                        duration: 0.7,
                        ease: 'easeInOut',
                      }}
                      key={route.name}
                      className='w-full rounded-xl '
                    >
                      <Link
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={
                          ' flex w-4/5 items-center justify-between p-3 text-xl font-bold text-white transition duration-300 ease-in-out hover:border-b-2 hover:border-primary hover:text-primary '
                        }
                        href={route.href}
                      >
                        <span className='flex gap-1 text-lg'>{route.name}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
