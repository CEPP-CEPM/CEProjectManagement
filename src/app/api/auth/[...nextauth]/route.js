import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        const credential = account.id_token
        const resLogin = await fetch(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/auth/login`,
          {
            method: 'POST',
            body: JSON.stringify({
              credential: credential,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const resToken = await resLogin.json()
        const resUser = await fetch(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${resToken.accessToken}`,
            },
          }
        );
        const user = await resUser.json() 
        // console.log(token.accessToken)
        return { ...token, user, ...resToken };
      }
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token.user
      session.accessToken = token.accessToken
      return session
    }
  }
});

export { handler as GET, handler as POST };