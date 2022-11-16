import Head from 'next/head';
import { getValidatedContent } from '../lib/MDXContent';
import PostsFeed from '../components/PostsFeed';
// import TwitterFeed from '../components/TwitterFeed';
// import GridEffect from '../components/gridEffect/GridEffect';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home - MatMac</title>
      </Head>
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
