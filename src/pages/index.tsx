import Head from 'next/head';
import { getValidatedContent } from '../lib/MDXContent';
import PostsFeed from '../components/PostsFeed';
import TwitterFeed from '../components/TwitterFeed';
import GridEffect from '../components/gridEffect/GridEffect';
import Hero from '../components/Hero';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home - MatMac</title>
      </Head>
      {/* <div className="relative">
        <GridEffect />
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="pointer-events-auto h-fit w-fit bg-c-bg-01/75 shadow-md shadow-black/50 backdrop-blur-sm md:flex">
            <div className="flex h-64 w-64 items-center border md:h-80 md:w-80">
              <h1 className="w-full text-center text-3xl">Stuff goes here</h1>
            </div>
            <div className="flex h-64 w-64 items-center border md:h-80 md:w-80">
              <h1 className="w-full text-center text-3xl">Stuff goes here</h1>
            </div>
          </div>
        </div>
      </div> */}
      <Hero />
      <main className="mt-36">
        <h1 className="text-center text-2xl">Latest Posts</h1>
        <PostsFeed posts={posts} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const content = getValidatedContent();

  const posts = content.map((file) => {
    return {
      slug: file.slug,
      ...file.frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
