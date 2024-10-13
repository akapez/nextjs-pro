'use server';

import { revalidatePath } from 'next/cache';
import { BlogEntry } from './type';

const entries: BlogEntry[] = [
    {
        title: "Hello World!",
        text: "This is my first blog entry."
    },
    {
        title: "Another World!",
        text: "This is my Second blog entry."
    }
];

export async function getEntries() {
    return entries;
}

export async function addEntry(entry: BlogEntry) {
    entries.push(entry);
    revalidatePath('/');
}