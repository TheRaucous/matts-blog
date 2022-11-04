import Head from 'next/head';
import { getValidatedContent } from '../lib/MDXContent';
import PostsFeed from '../components/PostsFeed';
import TwitterFeed from '../components/TwitterFeed';
import GridEffect from '../components/gridEffect/GridEffect';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home - MatMac</title>
      </Head>
      <div className="relative">
        <div className="overflow-hidden border-red-600">
          <GridEffect />
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10">
            <div className="bg-black/75 backdrop-blur-sm w-fit h-fit pointer-events-auto rounded shadow-md shadow-black/50">
              <div className="md:flex">
                <div className="flex items-center w-64 h-64 md:w-80 md:h-80 border">
                  <h1 className="text-3xl text-center w-full">
                    Stuff goes here
                  </h1>
                </div>
                <div className="flex items-center w-64 h-64 md:w-80 md:h-80 border">
                  <h1 className="text-3xl text-center w-full">
                    Stuff goes here
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* Blur was here */}
        </div>
      </div>
      <main>
        <div className="flex flex-col items-center">
          <div className="mt-20 w-[45rem] max-w-full">
            <div className="flex justify-between">
              <TwitterFeed />
              <PostsFeed posts={posts} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const content = getValidatedContent();
  const posts: {}[] = [];

  content.forEach((x) => {
    posts.push({
      slug: x.slug,
      ...x.frontmatter,
    });
  });

  return {
    props: {
      posts,
    },
  };
};
