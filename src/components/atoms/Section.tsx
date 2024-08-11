import { cva } from 'class-variance-authority';
import cn from '../../../utils/cn';

type SectionProps = {
  size?: 'medium' | 'large';
  childrenClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const variants = cva('min-h-screen h-fit px-4 py-10 mx-auto', {
  variants: {
    size: {
      medium: 'max-w-[1280px]',
      large: 'max-w-[1440px]',
    },
  },
  defaultVariants: {
    size: 'large',
  },
});

export default function Section({
  className,
  children,
  childrenClassName,
  size = 'large',
}: SectionProps) {
  return (
    <section className={className}>
      <div className={cn(variants({ size }), childrenClassName)}>
        {children}
      </div>
    </section>
  );
}
