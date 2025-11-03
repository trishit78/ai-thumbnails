import NextAuth from "next-auth";
import { authConfig } from "~/server/auth"; // <-- wherever you saved that file

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
