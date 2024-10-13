import Blog from '@/components/blog';
import BlogForm from '@/components/blog-form';
import { getEntries } from '@/blog';

export default async function Home() {
  const entires = await getEntries();

  return (
    <main className="flex">
      <div className="w-1/2">
        <Blog entries={entires} />
      </div>
      <div className='w-1/2'>
        <BlogForm />
      </div>
    </main>

  );
}
