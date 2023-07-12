import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "../../../../database/connectDB";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
  adapter: MongoDBAdapter(clientPromise),
  // A database is optional, but required to persist accounts in a database
});
