import NextImage, { ImageProps as NextImageProps } from 'next/image';

type ImageProps = {} & NextImageProps;
export default function Image({
  src,
  alt,
  className,
  width,
  height,
  ...props
}: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
}
