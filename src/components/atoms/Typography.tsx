import React from 'react';
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
      h1: ['text-white text-4xl font-bold lg:text-6xl'],
      h2: ['text-white text-4xl font-bold lg:text-5xl'],
      p: ['text-lg text-textDefault'],
      pSoft: ['text-lg text-textSoft'],
      pBold: ['text-lg text-textBold font-bold'],
      pHighlight: [],
      span: [],
      slogan: [
        'tracking-[.75em] text-sm text-primary md:text-[21px] md:tracking-[.6em]',
      ],
      subtitle: [],
    },
  },
  defaultVariants: {
    styles: 'p',
  },
});

const Typography = ({
  children,
  variant = 'p',
  styles = 'p',
  className,
  icon,
}: TypographyProps) => {
  const Tag = variant;

  return (
    <Tag className={cn(variants({ styles }), className)}>
      {icon ? icon + ' ' + children : children}
    </Tag>
  );
};

export default Typography;
