import { redirect, notFound } from "next/navigation";
import { auth } from "@/lib/auth";

import Chat from "@/app/components/chat";

import { getChat } from "@/db";

export const dynamic = "force-dynamic";

export default async function ChatDetail({
    params: { chatId },
}: {
    params: { chatId: string; };
}) {
    const chat = await getChat(+chatId);
    if (!chat) {
        return notFound();
    }

    const session = await auth();
    if (!session || chat?.user_email !== session?.user?.email) {
        return redirect("/");
    }

    return (
        <main className="pt-5">
            <Chat id={+chatId} messages={chat?.messages || []} key={chatId} />
        </main>
    );
}