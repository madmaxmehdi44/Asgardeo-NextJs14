import { getServerSession } from 'next-auth';
import LogoutButton from '../ui/LogoutButton';
export default async function Page() {
  const session = await getServerSession();
  return (
    <div className='grid place-content-center min-h-[100vh] text-center'>
      <h1 className='text-[2.5rem]'>Asgardeo Demo</h1>
      <br />
      <br />
      <h1 className='text-xl my-5'>
        You are logged in as {session?.user?.name}
      </h1>
      <h1 className='text-l'>This is a protected route.</h1>
      <br />
      <div>
        <LogoutButton client_id={process.env.OAUTH_CLIENT_ID} />
      </div>
    </div>
  );
}
