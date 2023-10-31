'use client';
import { Button } from 'mochi-ui';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
export default function ({ client_id }: { client_id: string | undefined }) {
  const router = useRouter();
  return (
    <Button
      size='large'
      title='Log Out'
      color='danger'
      onClick={async () => {
        await signOut({ redirect: false });
        router.push(
          `https://api.asgardeo.io/t/hasathcharu/oidc/logout?client_id=${client_id}&post_logout_redirect_uri=http://localhost:3000`
        );
      }}
    />
  );
}
