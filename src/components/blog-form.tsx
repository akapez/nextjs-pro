'use client';
import { useForm, Controller } from 'react-hook-form';
import { Button, FormControl, InputLabel, Stack, TextField } from '@mui/material';

import { addEntry } from '@/blog';


type FormFields = {
    title: string;
    text: string;
};

export default function BlogForm() {
    const form = useForm<FormFields>({
        defaultValues: {
            title: "",
            text: ""
        }
    });

    const onSubmit = async (data: FormFields) => {
        await addEntry(data);
        form.reset();
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Stack gap={2}>
                <Controller name="title" control={form.control} render={({ field }) => (
                    <FormControl>
                        <InputLabel htmlFor="title">Title</InputLabel>
                        <TextField id="title" aria-describeby="Title" {...field} variant="outlined" />
                    </FormControl>
                )} />
                <Controller name="text" control={form.control} render={({ field }) => (
                    <FormControl>
                        <InputLabel htmlFor="text">Description</InputLabel>
                        <TextField id="text" aria-describeby="Description" {...field} variant="outlined" multiline minRows={4} />
                    </FormControl>
                )} />
                <div>
                    <Button type="submit" variant="contained">
                        Submit
                    </Button>
                </div>
            </Stack>
        </form>
    );
}