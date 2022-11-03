import Head from 'next/head';
import { getValidatedContent } from '../lib/MDXContent';
import PostsFeed from '../components/PostsFeed';
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
              <div className='md:flex'>
                <div className="flex items-center w-64 h-64 md:w-80 md:h-80 border">
                  <h1 className="text-3xl text-center w-full">Stuff goes here</h1>
                </div>
                <div className="flex items-center w-64 h-64 md:w-80 md:h-80 border">
                  <h1 className="text-3xl text-center w-full">Stuff goes here</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 w-full h-[18vw] bg-gradient-to-b from-c-bg to-transparent pointer-events-none c-trans" />
          <div className="absolute top-0 left-0 h-full w-[20vw] bg-gradient-to-r from-c-bg to-transparent pointer-events-none c-trans" />
          <div className="absolute top-0 -right-[1px] h-full w-[20vw] bg-gradient-to-l from-c-bg to-transparent pointer-events-none c-trans" />
          <div className="absolute -bottom-[1px] w-full h-[18vw] bg-gradient-to-t from-c-bg to-transparent pointer-events-none c-trans" />
        </div>
      </div>
      <main>
        <div className="flex flex-col items-center">
          <div className="mt-20 w-[45rem] max-w-full">
            <div className="flex justify-between">
              <h1>Social Media Feed</h1>
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
