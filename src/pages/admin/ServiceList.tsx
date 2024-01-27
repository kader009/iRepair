import { useQuery } from '@tanstack/react-query';
import { getPosts } from './api/ServiceApi';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import { Trash2 } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const ServiceList = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    staleTime: 0,
    gcTime: 1000
  });

  console.log({ isLoading, data, isError });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong!</p>;
  }
  const Inposts: Post[] = data?.data.map((item: Post) => ({
    id: item.id,
    title: item.title,
    body: item.body,
  }));

  return (
    <Container>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Body</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Inposts.map((posts) => (
            <TableRow key={posts.id}>
              <TableCell>{posts.id}</TableCell>
              <TableCell>{posts.title}</TableCell>
              <TableCell>{posts.body}</TableCell>
              <Button className="mt-4 p-2" variant="destructive">
                <Trash2 />
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ServiceList;
