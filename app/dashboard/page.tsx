import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import LogoutButton from '../ui/LogoutButton';
export default async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>This is a dashboard</h1>
      {session?.user?.name}
      <br />
      <LogoutButton client_id={process.env.OAUTH_CLIENT_ID} />
    </div>
  );
}
