'use client';
import { signIn } from 'next-auth/react';
import { Button } from 'mochi-ui';

export default function ({ id, name }: { id: string; name: string }) {
  return (
    <Button
      title={`Sign in with ${name}`}
      onClick={() => signIn(id)}
      size='large'
    />
  );
}
