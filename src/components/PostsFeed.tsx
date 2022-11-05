import Link from 'next/link';

export default function PostsFeed({ posts }) {
  const maxDescLength = 150;

  posts.sort((a, b) => {
    return (
      new Date((b as any).date).getTime() - new Date((a as any).date).getTime()
    );
  });

  const checkDescription = (desc: string): string => {
    if (!desc) return '';
    if (desc.length > maxDescLength) {
      return desc.slice(0, maxDescLength - 1) + '...';
    } else {
      return desc;
    }
  };

  return (
    <aside className="flex justify-center">
      <div className="w-[45rem]">
        {posts.map((post) => {
          return (
            <Link href={'/blog/' + post.slug} key={post.slug}>
              <div className="bg-c-bg-01 p-6 my-8 rounded-lg hover:bg-c-bg-02 c-trans">
                <h3 className="sm:inline-block sm:mr-8 text-xl font-semibold">
                  {post.title}
                </h3>
                <span className="sm:inline-block text-xs">
                  {new Date(post.date).toDateString()}
                </span>
                <p className="mt-2">{checkDescription(post.description)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
