// app/blog/[slug]/page.tsx
import { posts } from "../../utils/data";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return <h1>Post not found.</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
