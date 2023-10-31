import Image from 'next/image';
import ActionArea from './ActionArea';
import { getServerSession } from 'next-auth';
export default async function () {
  const session = await getServerSession();
  return (
    <div className='grid place-items-center min-h-screen'>
      <div className='text-center grid justify-items-center'>
        <Image
          src='/asgardeo.png'
          alt='Asgardeo Logo'
          height='200'
          width='500'
        />
        <h1 className='text-[2rem] m-10'>Welcome to Asgardeo Demo</h1>
        {session ? <ActionArea dashboard /> : <ActionArea />}
      </div>
    </div>
  );
}
