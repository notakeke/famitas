import { signIn, signOut, useSession } from "next-auth/react";
import TodoList from "../components/TodoList";
import NewTodoForm from "../components/NewTodoForm";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      {!session && (
        <>
          サインインしてください。 <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          サインイン完了。 email: {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
          <NewTodoForm />
          <TodoList />
        </>
      )}
    </>
  );
}
