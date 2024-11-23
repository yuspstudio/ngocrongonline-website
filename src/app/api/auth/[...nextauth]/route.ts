import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/lib/prismadb"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: {label: "username", type: "text"},
        password: {label: "password", type: "password"}
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Invalid Credentials")
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username
          }
        })

        if (!user || !user?.password) {
          throw new Error("Invalid credentials")
        }

        if (credentials.password !== user.password) {
          throw new Error('Invalid credentials')
        }

        return user

      }
    })
  ],
  debug: process.env.NODE_ENV == "development",
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }