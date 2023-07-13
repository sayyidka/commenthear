import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email"
import { DynamoDB } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"
import { DynamoDBAdapter } from "@auth/dynamodb-adapter"

const config = {
  credentials: {
    accessKeyId: process.env.NEXT_AUTH_AWS_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_AUTH_AWS_SECRET_KEY,
  },
  region: process.env.NEXT_AUTH_AWS_REGION,
};

const client = DynamoDBDocument.from(new DynamoDB(config), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
})

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session;
    }
  },
  pages: {
    signIn: '/signin'
  },
  adapter: DynamoDBAdapter(
    client,
    { tableName: 'commenthear_users' }
  )
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
