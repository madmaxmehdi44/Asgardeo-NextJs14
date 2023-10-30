'use client';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
export default function ({ client_id }: { client_id: string | undefined }) {
  const router = useRouter();
  return (
    <button
      className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
      onClick={() => {
        const endSessionURL = `https://api.asgardeo.io/t/hasathcharu/oidc/logout?client_id=${client_id}&post_logout_redirect_uri=http://localhost:3000`;
        signOut({ redirect: false });
        router.push(endSessionURL);
      }}
    >
      Log Out
    </button>
  );
}
