import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";

export const authOption: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@mail.com" },
        password: { label: "Palavra-Passe", type: "password" },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        console.log(credentials.email, credentials.password);
        const user = await db.custumers.findUnique({
          where: {
            email: credentials.email,
          },
        });

        console.log(user);
        if (!user) {
          return null;
        }

        const passwordMach = await compare(credentials.password, user.password);

        if (!passwordMach) {
          return null;
        }

        return {
          id: user.id + "",
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      //se existir um usuário
      if (user) {
        return {
          //retornar os tokens padrão
          ...token,
          //... e retornar também as cenas que queremos adicionar
          id: user.id,
          name: user.name,
          email: user.email,
        };
      }
      return token;
    },
    //as "session"recebe o token retornado pelo jwt
    async session({ session, token }) {
      //retorna
      return {
        //sessao patrao
        ...session,
        //e o usuario definido
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
          role: token.role,
        },
      };
    },
  },
};
