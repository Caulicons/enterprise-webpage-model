import { cva } from 'class-variance-authority';
import cn from '../../../utils/cn';
import { IconType } from 'react-icons';

type ButtonProps = {
  icon?: IconType | string;
  variant?: 'primary' | 'secondary';
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const variants = cva(
  'w-max rounded-md px-4 py-2 text-lg font-bold transition-all duration-500 ease-out',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-secondary',
        secondary:
          'bg-transparent text-primary hover:bg-primary hover:text-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export default function Button({
  className,
  icon,
  children,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(variants({ variant }), className)} {...props}>
      {icon ? icon + ' ' + children : children}
    </button>
  );
}
