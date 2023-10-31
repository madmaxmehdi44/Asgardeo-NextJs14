import { NextAuthOptions } from 'next-auth';
export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: 'asgardeo',
      name: 'Asgardeo',
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      issuer: process.env.OAUTH_ISSUER_URL,
      userinfo: process.env.OAUTH_USERINFO_URL,
      type: 'oauth',
      wellKnown: process.env.OAUTH_WELL_KNOWN_URL,
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
