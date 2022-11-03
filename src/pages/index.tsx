import Head from 'next/head';
import Link from 'next/link';
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
        <main className="absolute inset-0 pointer-events-none z-10">
          <div className="flex flex-col items-center">
            <div className="mt-20 w-[45rem] max-w-[80vw] p-6 bg-gray-400/20 backdrop-blur-sm rounded">
              <h1 className="text-2xl text-center my-10">
                This is the main content of the home page.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </main>
        <div className='overflow-hidden border-red-600'>
          <GridEffect />
          <div className="absolute top-0 w-full h-[18vw] bg-gradient-to-b from-c-bg to-transparent pointer-events-none c-trans" />
          <div className="absolute top-0 left-0 h-full w-[20vw] bg-gradient-to-r from-c-bg to-transparent pointer-events-none c-trans" />
          <div className="absolute top-0 right-0 h-full w-[20vw] bg-gradient-to-l from-c-bg to-transparent pointer-events-none c-trans" />
          <div className="absolute bottom-0 w-full h-[18vw] bg-gradient-to-t from-c-bg to-transparent pointer-events-none c-trans" />
        </div>
      </div>
      {/* <div className="flex justify-center">
        <main className="bg-white/20 backdrop-blur-sm px-6 w-[45rem] max-w-full rounded">
        </main>
      </div> */}
      {/* <aside className=" w-96 min-w-[20rem]">
          <h1>Social Media Feed</h1>
        </aside> */}
      {/* <PostsFeed posts={posts} /> */}
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
