import Head from 'next/head';
import { getValidatedContent } from '../lib/MDXContent';
import PostsFeed from '../components/PostsFeed';
import Hero from '../components/home/Hero';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home - McLeroy</title>
      </Head>
      <main className="mb-10">
        <Hero Title="Blog"/>
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
