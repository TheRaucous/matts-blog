import { format, isThisYear } from 'date-fns';
import Link from 'next/link';

export default function PostsFeed({ posts }) {
  const maxDescLength = 350;

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

  const formattedDate = (dateString: string) => {
    const date = new Date(dateString);
    return isThisYear(date) ? format(date, 'MMM d') : format(date, 'MMM d, y');
  };

  const formatTags = (tags: string) => {
    if (tags == null) return [""];

    const formattedTags = tags.split(", ");

    return formattedTags;
  };

  return (
    <aside className="flex justify-center">
      <div className="w-[45rem]">
        {posts.map((post) => {
          return (
            <Link href={'/blog/' + post.slug} key={post.slug}>
              <div className="c-trans my-8 rounded-lg bg-c-bg-01 p-6 hover:bg-c-bg-02">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <span className="text-sm sm:inline-block">
                  {formattedDate(post.date)}
                </span>
                <div className="">
                  {formatTags(post.tags).map((tag) => {
                    return (
                      <TagUI text={tag} />
                    );
                  })}
                </div>
                <p className="mt-2 max-h-24 overflow-hidden">
                  {checkDescription(post.description)}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

function TagUI({ text }) {
  if (text == "") return <></>

  return (
    <div className="bg-c-bg-02 p-1 rounded-md mr-2 mt-2 border-2 inline-block">
      {text}
    </div>
  );
}
