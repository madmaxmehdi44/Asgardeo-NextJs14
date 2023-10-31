import { NextAuthOptions } from 'next-auth';
import type { OIDCConfig } from '@auth/core/providers';
import { Profile } from 'next-auth';
export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: 'asgardeo',
      name: 'Asgardeo',
      clientId: '022cftl9HfvSWVLcdTlT51bRnmsa',
      clientSecret: 'UJdHXAY07Y0M5a4WKVP0WnwvROtZTAMNQt8Ry_OWzn0a',
      issuer: 'https://api.asgardeo.io/t/hasathcharu/oauth2/token',
      userinfo: `https://api.asgardeo.io/t/${process.env.ASGARDEO_ORGANIZATION_NAME}/oauth2/userinfo`,
      type: 'oauth',
      wellKnown: `https://api.asgardeo.io/t/${process.env.ASGARDEO_ORGANIZATION_NAME}/oauth2/token/.well-known/openid-configuration`,
      authorization: {
        params: { scope: 'openid profile' },
      },
      idToken: true,
      checks: ['pkce', 'state'],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.username,
        };
      },
    },
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.idToken = token.idToken;
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  // debug: true,
};
