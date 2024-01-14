import cn from '../../../../utils/cn';
import { IconType } from 'react-icons';
import React from 'react';
import Image from '@/components/atoms/Image';

type CartProps = {
  Icon?: IconType;
  iconColor?: 'primary' | 'secondary';
  imgURL?: string;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export default function Card({
  className,
  children,
  Icon,
  iconColor = 'primary',
  imgURL = '',
}: CartProps) {
  if (Icon && imgURL) {
    throw new Error('Only one of Icon and imgURL can be provided');
  }

  return (
    <div
      className={cn(
        'flex w-full flex-col gap-4 rounded-2xl bg-white p-6 pb-9 text-left',
        className
      )}
    >
      {Icon && (
        <span className={cn('text-primary', `text-${iconColor}`)}>
          <Icon fontSize={50} />
        </span>
      )}
      {imgURL && (
        <Image
          src={imgURL}
          alt='logo'
          width={70}
          height={70}
          className={'h-20 w-20 rounded-full'}
        />
      )}
      {children}
    </div>
  );
}
