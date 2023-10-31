import getProviders from 'next-auth/next';
import { authOptions } from '@/app/lib/auth';
import { getServerSession } from 'next-auth';
import ActionArea from './ActionArea';
import { redirect } from 'next/navigation';
export default async function SignIn() {
  const session = await getServerSession();
  if (session) {
    redirect('/');
  }
  const providers = authOptions.providers;
  return (
    <>
      <div className='grid place-items-center min-h-screen'>
        <div className='text-center'>
          <h1 className='text-xl m-10'>Please Log In</h1>
          {/* {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <ActionArea id={provider.id} name={provider.name} />
              </div>
            ))} */}
        </div>
      </div>
    </>
  );
}
