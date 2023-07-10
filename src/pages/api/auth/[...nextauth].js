import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
  adapters: MongoDBAdapter(),
  // A database is optional, but required to persist accounts in a database
});
