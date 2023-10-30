'use client';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
export default function Home() {
  return (
    <div className='grid place-items-center min-h-screen'>
      <div className='text-center'>
        <Image
          src='/asgardeo.png'
          alt='Asgardeo Logo'
          height='300'
          width='700'
        />
        <h1 className='text-xl m-10'>Welcome to Asgardeo Demo</h1>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => signIn('asgardeo')}
        >
          Login
        </button>
        <Link href='/dashboard'>Dashboard</Link>
      </div>
    </div>
  );
}
