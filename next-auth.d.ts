// next-auth.d.ts

import { Session } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    idToken?: string | unknown; // Add the idToken property to the Session
  }
}
