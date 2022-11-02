import Head from 'next/head';
import Link from 'next/link';
import { getValidatedContent } from '../lib/MDXContent';
import PostsFeed from '../components/PostsFeed';
import GridEffect from '../components/gridEffect/GridEffect'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home - MatMac</title>
      </Head>
      <GridEffect />
      {/* <div className="flex justify-between">
        <PostsFeed posts={posts} />
        <main className='border-x px-4 max-w-[45rem]'>
          <h1 className="text-2xl">
            This is the main content of the home page.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </main>
        <aside className=' w-96 min-w-[20rem]'>
          <h1>Social Media Feed</h1>
        </aside>
      </div> */}
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
