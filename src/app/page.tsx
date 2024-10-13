import Blog from '@/components/blog';
import BlogForm from '@/components/blog-form';
import { getEntries } from '@/blog';
import { Box, Container } from '@mui/material';

export default async function Home() {
  const entires = await getEntries();

  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 4, display: "flex" }}>
        <Box sx={{ width: "50%" }}>
          <Blog entries={entires} />
        </Box>
        <Box sx={{ width: "50%" }}>
          <BlogForm />
        </Box>
      </Box>
    </Container>
  );
}