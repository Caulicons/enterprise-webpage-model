import Image from '@/components/atoms/Image';
import cn from '../../../../utils/cn';
import { IconType } from 'react-icons';

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

  if(Icon &&  imgURL) {
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
      {imgURL && <Image src={imgURL} alt='logo' width={40} height={40} className={'rounded-full'}/>}
      {children}
    </div>
  );
}
