import Image from '../../atoms/Image';
import Typography from '../../atoms/Typography';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className='flex w-full flex-col items-center justify-center text-center gap-8 bg-secondary p-8 pb-10 md:flex-row md:items-start'>
      <Image
        src={'/assets/images/Logo/logoIcon.png'}
        alt='logo'
        width={60}
        height={60}
      />
      <div className='flex flex-col gap-2 text-white'>
        <Typography styles='pHighlight' variant='p'>
          Contact:
        </Typography>
        <ul className='flex flex-col items-center gap-1'>
          <li>
            <Typography className='text-white' icon='📞'>
              (11) 97800-6719
            </Typography>
          </li>
          <li>
            <Typography className='text-white' icon='📧'>
              Caulicons.jobs@gmail.com
            </Typography>
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-3'>
        <Typography styles='pHighlight' variant='p'>
          Social Medias:
        </Typography>
        <ul className='flex justify-center gap-4 [&_li]:h-9 [&_li]:w-9 [&_li]:text-white'>
          <li>
            <FaSquareTwitter className='h-9 w-9' />
          </li>
          <li>
            <FaWhatsappSquare className='h-9 w-9' />
          </li>
          <li>
            <FaFacebookSquare className='h-9 w-9' />
          </li>
        </ul>
      </div>
      <div className='justify-center w-3/5 md:w-2/5'>
        <Typography styles={'pHighlight'}>Local:</Typography>
        <Typography className='text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit amet,
          consectetur adipiscing elit.
        </Typography>
      </div>
    </footer>
  );
}
