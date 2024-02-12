import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/libs/prismadb";

const authOptions: AuthOptions = {
  // Use PrismaAdapter for session management
  adapter: PrismaAdapter(prisma),
  // Define authentication providers
  providers: [
    // Google authentication provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // GitHub authentication provider
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    // Add more providers as needed
  ],
  // Enable debug mode during development
  debug: process.env.NODE_ENV === "development",
  // Session configuration
  session: {
    // Use JWT strategy for session management
    strategy: "jwt",
    // Add other session configuration options as needed
  },
  // Set the session secret
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
