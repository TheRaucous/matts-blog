import Link from "next/link";

export default function PostsFeed({ posts }) {
  return (
    <aside className="flex flex-col w-72 min-w-[20rem] items-start px-4 pt-4">
    <h1 className='text-xl ml-4 mb-4 text-center'>Latest Posts</h1>
    {posts.map((post) => {
      return (
        <div key={post.slug} className="p-4 w-full hover:bg-gray-500/10 transition-colors duration-100 rounded">
          <Link href={'/blog/' + post.slug}>
            <h2 className="inline-block mr-4 text-lg font-semibold">
              {post.title}
            </h2>
            <span className="inline-block text-xs">
              {new Date(post.date).toDateString()}
            </span>
            <p className="text-[0.95rem]">{post.description}</p>
          </Link>
        </div>
      );
    })}
  </aside>
  )
}
