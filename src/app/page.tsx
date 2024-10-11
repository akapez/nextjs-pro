import { auth } from "@/lib/auth";
import { Separator } from '@/components/ui/separator';
import Chat from '@/app/components/chat';

export default async function Home() {
  const session = await auth();
  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Welcome To GPT Chat</h1>
      {!session?.user && <div>You need to log in to use this chat.</div>}
      {session?.user && (
        <>
          <Separator className="my-5" />
          <Chat />
        </>
      )}
    </main>
  );
}