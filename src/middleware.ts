import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export const config = {
    matcher: ["/chats/:chatId*"],
};

export default auth((req) => {
    if (!req.auth) {
        return NextResponse.redirect(new URL("/api/auth/signin", req.url));
    }
});