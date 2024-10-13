import { type BlogEntry } from '@/type';
import { Stack, Typography } from '@mui/material';

export default function Blog({
    entries,
}: Readonly<{
    entries: BlogEntry[];
}>) {
    return (
        <>
            {entries.map((entry) => (
                <Stack key={entry.title}>
                    <Typography variant="h4" sx={{ mb: 2 }}>{entry.title}</Typography>
                    <Typography sx={{ mb: 2 }}>{entry.text}</Typography>
                </Stack>
            ))}
        </>
    );
}