import cn from '../../../utils/cn';

export default function Section({
  children,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn('grid min-h-full place-content-center', className)}
      {...props}
    >
      {children}
    </section>
  );
}
