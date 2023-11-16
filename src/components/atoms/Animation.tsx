import { useAnimation, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useMemo, MutableRefObject } from 'react';
import cn from '../../../utils/cn';

type animationProps = {
  direction?: 'left-to-right' | 'right-to-left' | 'up' | 'down';
  reference?: MutableRefObject<null>;
} & React.HTMLAttributes<HTMLDivElement>;
export default function Animation({
  children,
  className,
  direction = 'left-to-right',
  reference,
}: animationProps) {
  const ref = useRef(null);
  const inView = useInView(reference ? reference : ref, {once: true});

  const directions = useMemo(() => {
    return {
      'left-to-right': {
        x: '-90vw',
      },
      'right-to-left': {
        x: '90vw',
      },
      up: {
        y: '-90vh',
      },
      down: {
        y: '90vh',
      },
    };
  }, []);
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
          delay: 0.2,
          ease: 'easeInOut',
        },
      });
    }
    if (!inView) {
      animation.start({
        ...directions[direction],
        opacity: 0,
      });
    }
  }, [inView, animation, direction, directions]);

  return (
    <motion.div
      ref={ref}
      animate={animation}
      className={cn('overflow-hidden', className)}
    >
      {children}
    </motion.div>
  );
}
