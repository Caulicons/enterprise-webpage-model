import Test from '@/components/ComponentToTest/Test';
import Section from '@/components/atoms/Section';
import Typography from '@/components/atoms/Typography';
import Image from 'next/image';
import HomePage from '../components/Pages/Home';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import Doguitos from '@/components/ComponentToTest/Doguitos';

export default function Home() {
  const test = false;
  return (
    <main>
      <Doguitos />
      {test && <Test>Teste</Test>}
    </main>
  );
}
