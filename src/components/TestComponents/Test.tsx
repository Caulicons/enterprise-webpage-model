export default function Test(props: { children: React.ReactNode }) {
  return (
    <div className='grid min-h-screen place-content-center'>
      {props.children}
    </div>
  );
}
