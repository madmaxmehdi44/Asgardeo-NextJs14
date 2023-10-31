'use client';
import { signIn } from 'next-auth/react';
import { Button } from 'mochi-ui';
import { useRouter } from 'next/navigation';
export default function ({ dashboard }: { dashboard?: boolean }) {
  const router = useRouter();
  return (
    <>
      {dashboard ? (
        <Button
          title={`Dashboard`}
          onClick={() => router.push('/dashboard')}
          size='large'
          color='secondary'
        />
      ) : (
        <Button
          title={`Sign In`}
          onClick={() =>
            signIn('asgardeo', {
              callbackUrl: 'http://localhost:3000/dashboard',
            })
          }
          size='large'
        />
      )}
    </>
  );
}
