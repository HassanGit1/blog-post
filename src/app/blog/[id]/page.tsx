import Link from "next/link";
import { notFound } from "next/navigation";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function BlogPost({ params }: { params: { id: string } }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  if (!response.ok) return notFound();

  const post: Post | null = await response.json();

  if (!post || !post.id) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-extrabold mb-4 text-center">{post.title}</h1>
      <p className="text-lg leading-relaxed border-l-4 border-white pl-4">{post.body}</p>
      <div className="mt-6 flex justify-center">
        <Link
          href="/"
          className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
