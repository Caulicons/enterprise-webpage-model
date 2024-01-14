import Button from '@/components/atoms/Button';
import Section from '@/components/atoms/Section';
import T from '@/components/atoms/Typography';

export default function ContactSection() {
  return (
    <Section
      className='h-full flex-col  bg-white px-12 py-12 md:flex-row'
      childrenClassName='h-full flex flex-col gap-12 md:flex-row min-h-screen items-center justify-center'
    >
      <div className='flex w-4/6 flex-col gap-11'>
        <T variant='p' styles='slogan'>
          Lorem ipsum
        </T>
        <T variant='h3' styles='h2' className='text-black'>
          Lorem ipsum dolor sit amet
        </T>
        <T>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.{' '}
        </T>
      </div>
      <form action='#' method='post' className='flex w-full flex-col gap-4'>
        <input
          type='text'
          name='name'
          placeholder='Name'
          required
          className=' rounded-xl border-2  border-gray-400 p-4 '
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          required
          className='rounded-xl border-2 border-gray-400 p-4 focus:border-primary focus-visible:border-primary'
        />
        <input
          type='tel'
          name='tel'
          placeholder='Email'
          className='rounded-xl border-2 border-gray-400 p-4 focus:border-primary focus-visible:border-primary'
        />
        <textarea
          name='message'
          placeholder='Message'
          className='h-36 rounded-xl border-2 border-gray-400 p-4 focus:border-primary focus-visible:border-primary '
        ></textarea>
        <Button type='submit' icon={'🚀'}>
          Send Message
        </Button>
      </form>
    </Section>
  );
}
