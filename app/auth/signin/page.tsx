import { Button } from 'mochi-ui';
import { getProviders, signIn } from 'next-auth/react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import ActionArea from './ActionArea';
export default async function SignIn() {
  const session = await getServerSession();
  if (session) {
    return { redirect: { destination: '/dashboard' } };
  }
  const providers = await getProviders();
  return (
    <>
      <div className='grid place-items-center min-h-screen'>
        <div className='text-center'>
          <h1 className='text-xl m-10'>Please Log In</h1>
          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <ActionArea id={provider.id} name={provider.name} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
