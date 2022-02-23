import NextAuth, { DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: User;
  }

  interface User extends DefaultUser {
    id?: string | null;
  }

  interface ExtendCallbackOptions extends CallbacksOptions {
    session: (params: {
      session: Session;
      user: User;
      token: JWT;
    }) => Awaitable<Session>;
  }
}
