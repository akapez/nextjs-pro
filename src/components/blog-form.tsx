'use client';

import { addEntry } from '@/blog';
import { useForm, Controller } from 'react-hook-form';
import { Form, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';

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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <Controller name="title" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                            <Input placeholder="Title" {...field} />
                        </FormControl>
                    </FormItem>
                )} />
                <Controller name="text" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Input placeholder="Description" {...field} />
                        </FormControl>
                    </FormItem>
                )} />
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>

        </Form>
    );
}