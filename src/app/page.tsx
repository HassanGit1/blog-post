import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
        📝 Latest Blog Posts
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg rounded-lg p-5 border border-gray-300 hover:shadow-2xl transition transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 opacity-90">{post.body.substring(0, 60)}...</p>

            {/* Read More Link */}
            <Link
              href={`/blog/${post.id}`}
              className="mt-3 inline-block text-white font-medium bg-black px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
            >
              Read More →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
