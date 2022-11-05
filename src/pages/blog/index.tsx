import Head from 'next/head';
import { getContentByDirectory } from '../../lib/MDXContent';
import PostsFeed from '../../components/PostsFeed';

export default function index({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - MatMac</title>
      </Head>
      <h1 className="text-center text-4xl py-10">MatMac Blog</h1>
      <PostsFeed posts={posts} />
    </>
  );
}

export const getStaticProps = async () => {
  const files = getContentByDirectory('src/_content/blogPosts');
  const posts = files.map((file) => {
    return {
      slug: file.slug,
      ...file.frontmatter,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
};
