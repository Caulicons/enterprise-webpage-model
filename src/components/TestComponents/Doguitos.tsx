type responseType = {
  message: string;
  status: string;
};

export default async function Doguitos() {
  /* Dynamic */
  const staticDoguitoJson = await fetch(
    'https://dog.ceo/api/breeds/image/random'
  );
  const staticDoguito: responseType = await staticDoguitoJson.json();

  /* Static */
  const dynamicDoguitoJson = await fetch(
    'https://dog.ceo/api/breeds/image/random',
    {
      next: { revalidate: 5 },
    }
  );
  const dynamicDoguito: responseType = await dynamicDoguitoJson.json();

  return (
    <div>
      <h1>
        dynamicDoguito:{' '}
        <img src={dynamicDoguito.message} alt={dynamicDoguito.status} />
      </h1>
      <h1>
        staticDoguito:{' '}
        <img src={staticDoguito.message} alt={staticDoguito.status} />
      </h1>
    </div>
  );
}
