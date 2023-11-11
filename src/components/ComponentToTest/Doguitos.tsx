import type { GetStaticProps, InferGetServerSidePropsType } from 'next';
import next from 'next';
type responseType = number;

export default async function Doguitos() {
  const dynamicNumberJson = await fetch(
    'https://www.randomnumberapi.com/api/v1.0/random'
  );
  const dynamicNumber: responseType = await dynamicNumberJson.json();

  const staticNumber = await getStaticNumber();
  return (
    <div>
      <p>dynamicNumber: {dynamicNumber}</p>
      <p>staticNumber: {staticNumber}</p>
    </div>
  );
}

async function getStaticNumber() {
  const staticNumberJson = await fetch(
    'https://www.randomnumberapi.com/api/v1.0/random',
    {
      next: { revalidate: 10 },
    }
  );
  const staticNumber: responseType = await staticNumberJson.json();
  return staticNumber;
}
