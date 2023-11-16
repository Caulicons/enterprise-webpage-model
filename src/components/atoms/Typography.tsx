import React, { forwardRef } from 'react';
import cn from '../../../utils/cn';
import { cva } from 'class-variance-authority';

type Variant = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
};

type TypographyProps = {
  children: React.ReactNode;
  styles?:
    | 'h1'
    | 'h2'
    | 'p'
    | 'pSoft'
    | 'pBold'
    | 'pHighlight'
    | 'span'
    | 'slogan'
    | 'subtitle';
  icon?: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement> &
  Variant;

const variants = cva('', {
  variants: {
    styles: {
      h1: ['text-white text-4xl font-bold md:text-6xl'],
      h2: ['text-white text-4xl font-bold md:text-5xl'],
      p: ['text-lg text-textDefault'],
      pSoft: ['text-lg text-textSoft'],
      pBold: ['text-lg text-textBold font-bold'],
      pHighlight: ['text-primary text-2xl font-bold'],
      span: [],
      slogan: [
        'tracking-[.75em] text-sm text-primary md:text-[21px] md:tracking-[.6em] uppercase',
      ],
      subtitle: [],
    },
  },
  defaultVariants: {
    styles: 'p',
  },
});

const T = forwardRef<HTMLParagraphElement, TypographyProps>(function T(
  { children, variant = 'p', styles = 'p', icon, className, ...props },
  ref
) {
  const Tag = variant;
  return (
    <Tag ref={ref} className={cn(variants({ styles }), className)} {...props}>
      {icon ? icon + ' ' + children : children}
    </Tag>
  );
});

export default T;
